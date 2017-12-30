const crypto = require('crypto');

class Block {
  constructor(index, timestamp, data, previousHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.hashBlock();
  }

  hashBlock() {
    const sha = crypto.createHash('sha256');
    sha.update(this.index +
      this.timestamp +
      this.data +
      this.previousHash);

    return sha.digest('hex');
  }
}

module.exports = Block;