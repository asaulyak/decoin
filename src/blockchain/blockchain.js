const ChainAssembler = require('./chain-assembler');

const assembler = new ChainAssembler();

class Blockchain {
  constructor() {
    this.blocks = [assembler.createGenesisBlock()];
  }

  addBlock(block) {
    this.blocks.push(block);
  }

  get last() {
    return this.blocks[this.blocks.length - 1]
  }

  transactions(address) {
    let transactions = this.blocks
      .reduce((previous, current) => {
      Array.prototype.push.apply(previous, current.data.transactions);

      return previous;
    }, []);

    if(address) {
      transactions = transactions.filter(transaction => transaction.to === address
        || transaction.from === address);
    }

    return transactions;
  }
}

module.exports = Blockchain;