const ChainAssembler = require('./chain-assembler');

const assembler = new ChainAssembler();

class Blockchain {
  constructor() {
    this.blocks = [assembler.createGenesisBlock()];
  }

  addBlock(block) {
    this.blocks.push(block);
  }

  get chain() {
    return this.blocks;
  }
}

module.exports = Blockchain;