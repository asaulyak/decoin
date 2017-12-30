const consensus = require('./consensus');

describe('Consensus', () => {
  it('should return current chain as the longest', () => {
    const currentChain = new Array(10);
    const otherChains = Array.apply(null, {length: 5}).map(() => new Array(Math.floor(Math.random() * 9)));

    const longestChain = consensus.getConsensus(otherChains, currentChain);

    expect(longestChain).toEqual(currentChain);
  });

  it('should return current chain as the longest when the list of other chains is empty', () => {
    const currentChain = new Array(10);
    const otherChains = [];

    const longestChain = consensus.getConsensus(otherChains, currentChain);
    expect(longestChain).toEqual(currentChain);
  });

  it('should return other chain as the longest', () => {
    const currentChain = new Array(10);
    const longerChain = new Array(11);
    const otherChains = [longerChain];

    const longestChain = consensus.getConsensus(otherChains, currentChain);
    expect(longestChain).toEqual(longerChain);
  });

  it('should return other chain as the longest when other chains list contains chains of multiple sizes', () => {
    const currentChain = new Array(10);
    const longerChain = new Array(11);
    const shorterChain = new Array(9);
    const otherChains = [longerChain, shorterChain];

    const longestChain = consensus.getConsensus(otherChains, currentChain);
    expect(longestChain).toEqual(longerChain);
  });

  it('should return empty array when all chains are empty', () => {
    const currentChain = [];
    const otherChains = [];

    const longestChain = consensus.getConsensus(otherChains, currentChain);
    expect(longestChain).toEqual([]);
  });
});