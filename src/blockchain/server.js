const express = require('express');
const bodyParser = require('body-parser');
const Transactions = require('./transactions');
const Blockchain = require('./blockchain');
const Miner = require('./miner');
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));

const transactions = new Transactions();
const blockchain = new Blockchain();

router.route('/transactions')
  .post((req, res) => {
    const newTransactions = req.body.transactions;
    if (newTransactions) {
      transactions.addToPool(newTransactions);
      res.send(204);
    }
    else {
      res.send(400);
    }
  })
  .get((req, res) => {
    const transactions = blockchain.transactions();

    res.json({
      content: {
        transactions
      }
    });
  });

router.route('/transactions/:address')
  .get((req, res) => {
    const transactions = blockchain.transactions(req.params.address);

    res.json({
      content: {
        transactions
      }
    });
  });

router.route('/mine')
  .post((req, res) => {
    const lastBlock = blockchain.last;
    const minerAddress = req.body.miner;
    const block = Miner.mineNewBlock(lastBlock, transactions, minerAddress);

    blockchain.addBlock(block);
    transactions.empty();

    res.json({
      content: {
        block
      }
    });
  });

app.use(router);

app.listen(3030, () => console.log('Listening http on port: ' + 3030));
