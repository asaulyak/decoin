class Consensus {
  getConsensus(otherChains = [], current) {
    const longestChain = otherChains.find(chain => chain.length > current.length);

    return longestChain || current;
  }
}

module.exports = new Consensus();