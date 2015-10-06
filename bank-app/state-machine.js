var StateMachine = function() {
  this.state = {
    accounts: []
  }
}

StateMachine.prototype.executeOperation = function(operation) {
  if (operation.name == 'deposit') {
    this.state.accounts[operation.targetAccount] += operation.amount;
    return this.state;
  }

  if (operation.name == 'withdrawal') {
    this.state.accounts[operation.targetAccount] -= operation.amount;
    return this.state;
  }

}

module.exports = new StateMachine()
