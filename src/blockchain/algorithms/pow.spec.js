const pow = require('./pow');

describe('Proof of work', () => {
  it('should calculate proof', () => {
    const lastProof = 36;
    const proof = pow.calculate(lastProof);
    expect(proof).toEqual(45);
  });
});