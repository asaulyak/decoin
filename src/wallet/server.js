const express = require('express');
const bodyParser = require('body-parser');
const Wallet = require('./wallet');

const app = express();
const router = express.Router();
const wallet = new Wallet();

app.use(bodyParser.json());
app.use(express.static('dist'));

router.route('/wallet')
  .get((req, res) => {
    wallet.initWallet()
      .then(data => res.json({
        content: {
          wallet: data
        }
      }));
  });

router.route('/transactions')
  .post((req, res) => {

  });


app.use(router);

app.listen(4200, () => console.log('Listening http on port: ' + 4200));
