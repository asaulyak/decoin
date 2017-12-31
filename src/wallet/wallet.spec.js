const Wallet = require('./wallet');

describe('Wallet', () => {
  let wallet;

  beforeEach(() => {
    wallet = new Wallet();
  });

  it('should init a new wallet', done => {
    wallet.initWallet()
      .then(data => {
        console.log('Wallet data', data);
        expect(data).toBeDefined();
        done();
      })
      .catch(error => console.log('Wallet error', error));

  });
});
