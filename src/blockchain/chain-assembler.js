const Block = require('./block');

class ChainAssembler {
  createGenesisBlock() {
    return new Block(0, Date.now(), 'Genesis Block', '0');
  }

  nextBlock(lastBlock, data) {
    return new Block(lastBlock.index + 1, Date.now(), data, lastBlock.hash);
  }
}

module.exports = ChainAssembler;