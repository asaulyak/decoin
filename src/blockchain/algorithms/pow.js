class ProofOfWork {
  static calculate(lastProof) {
    let incrementor = lastProof + 1;

    while (incrementor % 9 !== 0 && incrementor % lastProof !== 0) {
      incrementor += 1;
    }

    return incrementor;
  }
}

module.expotrs = new ProofOfWork();