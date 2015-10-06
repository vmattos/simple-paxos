
var Account = require('./account');

var acc1 = new Account();

acc1.deposit(100, function(val, err) {
  if (err) throw err
  console.log('Deposit ccomplete')
})

acc1.deposit(200, function(val,err) {
  console.log('other deposit')
})

acc1.withdrawal(67, function(val, err) {
  console.log('withdrawal')
})
