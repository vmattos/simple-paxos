var machine = require('./state-machine');

var state = {
  accounts: []
}

var idCounter = 0;

var Account = function(id) {
  this.id = idCounter++;
  this.balance = 0;

  state.accounts[this.id] = this.balance;
}

Account.prototype.deposit = function(value, callback) {
  var cb = callback || function(){}
    , err = null;

  if (typeof value !== 'number') {
    err = new Error("Value must be a number");
    return cb(null, err);
  }

  this.balance += value;
  state = machine.executeOperation(state, {
    name: 'deposit',
    targetAccount: this.id,
    amount: value
  });

  console.log(state)

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
  state = machine.executeOperation(state, {
    name: 'withdrawal',
    targetAccount: this.id,
    amount: value
  });

  console.log(state)

  cb(value, err)
}

module.exports = Account
