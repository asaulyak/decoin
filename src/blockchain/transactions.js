class Transactions {
  constructor() {
    this.pool = [];
  }

  addToPool(transaction) {
    this.pool.push(transaction);
  }

  empty() {
    this.pool = [];
  }
}

moduel.exports = Transactions;