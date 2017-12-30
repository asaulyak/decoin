const Blockchain = require('./blockchain');
const Miner = require('./miner');
const Transactions = require('./transactions');

describe('Miner', () => {
  let blockchain;
  let transactions = new Transactions();

  beforeEach(() => {
    blockchain = new Blockchain();
  });

  it('should mine new block without previous transactions', () => {
    const genesisBlock = blockchain.last;
    const block = Miner.mineNewBlock(genesisBlock, transactions, 'some_address');
    console.log(block);
    expect(block).toBeDefined();
  });
});