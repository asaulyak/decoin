const express = require('express');
const bodyParser = require('body-parser');
const Transactions = require('./transactions');
const proof = require('./algorithms/pow');
const Blockchain = require('./blockchain');

const app = express();
app.use(bodyParser.json());

const transactions = new Transactions();
const blockchain = new Blockchain();

app.post('txion', (req, res) => {
  const transaction = req.body;
  if(transaction) {
    transactions.addToPool(req.body);
    res.send(204);
  }
  else {
    res.send(400);
  }
});

app.get('mine', (req, res) => {

});

app.listen(3030, () => console.log('Listening http on port: ' + 3030));