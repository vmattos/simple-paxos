var StateMachine = function() {}

StateMachine.prototype.executeOperation = function(state, operation) {
  if (operation.name == 'deposit') {
    state.accounts[operation.targetAccount] += operation.amount;
    return state;
  }

  if (operation.name == 'withdrawal') {
    state.accounts[operation.targetAccount] -= operation.amount;
    return state;
  }

}

module.exports = new StateMachine()
