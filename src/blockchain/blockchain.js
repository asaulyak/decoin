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

  get last() {
    return this.blocks[this.blocks.length - 1]
  }
}

module.exports = Blockchain;