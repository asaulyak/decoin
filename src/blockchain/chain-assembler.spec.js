const CjainAssembler = require('./chain-assembler');

describe('ChainAssembler', () => {
  let chain;

  beforeEach(() => {
    chain = new CjainAssembler();
  });

  it('should generate genesis block', () => {
    const genesisBlock = chain.createGenesisBlock();

    expect(genesisBlock).toBeDefined();
    expect(genesisBlock.index).toBe(0);
  });

  it('should generate next block with correct index', () => {
    const genesisBlock = chain.createGenesisBlock();
    const block = chain.nextBlock(genesisBlock, {
      transactions: []
    });

    expect(block.index).toBe(genesisBlock.index + 1);
  });

  it('should generate next block with correct data', () => {
    const genesisBlock = chain.createGenesisBlock();
    const data = {
      transactions: []
    };
    const block = chain.nextBlock(genesisBlock, data);

    expect(block.data).toEqual(data);
  });
});