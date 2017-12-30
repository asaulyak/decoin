const express = require('express');
const bodyParser = require('body-parser');
const Transactions = require('./transactions');
const Blockchain = require('./blockchain');
const Miner = require('./miner');

const app = express();
app.use(bodyParser.json());

const transactions = new Transactions();
const blockchain = new Blockchain();
const minerAddress = 'some_address';

app.post('/txion', (req, res) => {
  const newTransactions = req.body.transactions;
  if(newTransactions) {
    transactions.addToPool(newTransactions);
    res.send(204);
  }
  else {
    res.send(400);
  }
});

app.get('/mine', (req, res) => {
  const lastBlock = blockchain.last;
  const block = Miner.mineNewBlock(lastBlock, transactions, minerAddress);

  blockchain.addBlock(block);
  transactions.empty();

  res.json(block);
});

app.listen(3030, () => console.log('Listening http on port: ' + 3030));
