const Block = require('./block');

class ChainAssembler {
  createGenesisBlock() {
    return new Block(0, Date.now(), {
      proof: 36,
      transactions: []
    }, '0');
  }

  nextBlock(lastBlock, data) {
    return new Block(lastBlock.index + 1, Date.now(), data, lastBlock.hash);
  }
}

module.exports = ChainAssembler;