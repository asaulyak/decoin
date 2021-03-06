const express = require('express');
const bodyParser = require('body-parser');
const Wallet = require('./wallet');
const request = require('request');

const app = express();
const router = express.Router();
const wallet = new Wallet();
const baseUrl = 'http://localhost:3030';

app.use(bodyParser.json());
app.use(express.static('dist'));

router.route('/wallet')
  .get((req, res) => {
    wallet.initWallet()
      .then(wallet => {
        return new Promise((resolve, reject) => {
          request.get(`${baseUrl}/transactions/${wallet.address}`, (error, response, body) => {
            if(!error) {
              const transactions = JSON.parse(body).content.transactions;
              resolve(Object.assign({}, wallet, {transactions}));
            }
            else {
              reject(error);
            }
          });
        });
      })
      .then(wallet => {
        const balance = wallet.transactions
          .reduce((previous, current) => {
            if (current.from === wallet.address) {
              previous -= current.amount;
            }
            else if (current.to === wallet.address) {
              previous += current.amount;
            }

            return previous;
          }, 0);

        return {
          address: wallet.address,
          balance: balance
        };
      })
      .then(data => res.json({
        content: {
          wallet: data
        }
      }));
  });

router.route('/transactions')
  .post((req, res) => {
    const transaction = wallet.send(req.body.to, req.body.amount);
    const payload = {
      transactions: [transaction]
    };

    request({
      uri: `${baseUrl}/transactions`,
      method: 'POST',
      json: payload
    })
      .pipe(res);
  })
  .get((req, res) => {
    request.get(`${baseUrl}/transactions/${wallet.address}`)
      .pipe(res);
  });

router.route('/mine')
  .post((req, res) => {
    const payload = {
      miner: wallet.address
    };

    request({
      uri: `${baseUrl}/mine`,
      method: 'POST',
      json: payload
    })
      .pipe(res);
  });

app.use(router);

app.listen(4200, () => console.log('Listening http on port: ' + 4200));
