var machine = require('./state-machine');

var idCounter = 0;

var Account = function(id) {
  this.id = idCounter++;
  this.balance = 0;

  machine.state.accounts[this.id] = this.balance;
}

Account.prototype.deposit = function(value, callback) {
  var cb = callback || function(){}
    , err = null;

  if (typeof value !== 'number') {
    err = new Error("Value must be a number");
    return cb(null, err);
  }

  this.balance += value;

  machine.executeOperation({
    name: 'deposit',
    targetAccount: this.id,
    amount: value
  });

  return cb(value, err);
}

Account.prototype.withdrawal = function(value, callback) {
  var cb = callback || function() {}
    , err = null;

  if (typeof value !== 'number') {
    err = new Error("Value must be a number");
    return cb(null, err);
  }

  this.balance -= value;

  machine.executeOperation({
    name: 'withdrawal',
    targetAccount: this.id,
    amount: value
  });

  cb(value, err)
}

module.exports = Account
