const pow = require('./algorithms/pow');
const ChainAssembler = require('./chain-assembler');

const assembler = new ChainAssembler();

class Miner {
  static mineNewBlock(previousBlock, transactions, minerAddress) {
    const proof = pow.calculate(previousBlock.data.proof);

    transactions.addToPool({
      from: 'network',
      to: minerAddress,
      amount: 1
    });

    const data = {
      proof: proof,
      transactions: transactions.pool
    };

    return assembler.nextBlock(previousBlock, data);
  }
}

module.exports = Miner;