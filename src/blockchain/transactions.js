class Transactions {
  constructor() {
    this.pool = [];
  }
  addToPool(transaction) {
    this.pool.push(transaction);
  }
}

moduel.exports = Transactions;