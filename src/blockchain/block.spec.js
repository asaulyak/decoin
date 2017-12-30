const Block = require('./block');
const crypto = require('crypto');

describe('Block', () => {

  it('should create a block', () => {
    const timestamp = Date.now();
    const previousHash = '0';
    const data = 'simple block';
    const index = 5;

    const block = new Block(index, timestamp, data, previousHash);

    expect(block).toBeDefined();
  });

  it('should correctly calculate block hash', () => {
    const timestamp = Date.now();
    const previousHash = '0';
    const data = 'genesis block';
    const sha = crypto.createHash('sha256');
    const index = 0;

    sha.update(index +
      timestamp +
      data +
      previousHash);

    const currentBlockHash = sha.digest('hex');

    const block = new Block(index, timestamp, data, previousHash);

    expect(block.hash).toEqual(currentBlockHash);
  });
});