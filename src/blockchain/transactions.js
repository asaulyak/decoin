class Transactions {
  constructor() {
    this.pool = [];
  }

  addToPool(transactions) {
    Array.prototype.push.apply(this.pool, transactions);
  }

  empty() {
    this.pool = [];
  }
}

module.exports = Transactions;