const EC = require('elliptic').ec;
const fs = require('fs');
const util = require('util');

const ec = new EC('secp256k1');

const privateKeyLocation = './private_key';

class Wallet {
  initWallet() {
    return this.getKeys()
      .then(() => {
        return {
          address: this.key.getPublic('hex')
        };
      });
  }

  async getKeys() {
    const reader = util.promisify(fs.readFile);

    try {
      const data = await reader(privateKeyLocation);
      return this.key = ec.keyFromPrivate(data.toString(), 'hex');
    }
    catch (ex) {
      this.key = ec.genKeyPair();
      return this.storePrivateKey();
    }
  }

  async storePrivateKey() {
    const privateKey = this.key.getPrivate('hex');
    const writer = util.promisify(fs.writeFile);

    await writer(privateKeyLocation, privateKey);
  }

  send(to, amount) {
    return this.signTransaction({
      from: this.key.getPublic('hex'),
      to: to,
      amount: amount
    });
  }

  signTransaction(transaction) {
    const signature = this.key.sign(Buffer.from(`${transaction.from}${transaction.to}${transaction.amount}`)
      .toString('hex')).toDER();

    return Object.assign({}, transaction, {signature: Buffer.from(signature).toString('hex')});
  }

  get address() {
    return this.key.getPublic('hex');
  }
}

module.exports = Wallet;
