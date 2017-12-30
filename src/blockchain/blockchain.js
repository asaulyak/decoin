const ChainAssembler = require('./chain-assembler');

class Blockchain {
  constructor() {
    this.blocks = [];
  }

  addBlock(block) {
    this.blocks.push(block);
  }

  get chain() {
    return this.blocks;
  }
}

module.exports = Blockchain;