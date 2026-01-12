function createBankAccount(initialBalance) {
  const val = initialBalance;
  let balance = val;
  let history = [];
  return {
    deposit: function(amount) {
    
        balance += amount;
        history.push({type: 'deposit', amount: amount});
  },
  withdraw : function(amount){
    if(amount > balance || amount <=0){
        return false;
    }
    else{
        balance -= amount
        history.push({type: 'withdraw', amount : amount});
        return true;
    }
  },
  getBalance : function(){
    return balance;
  },
  getHistory : function(){
    return [...history];
}
  }
}

// 테스트
const account = createBankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
console.log(account.withdraw(2000)); // false
console.log(account.withdraw(-100)); // false
console.log(account.withdraw(300)); // true
console.log(account.getBalance()); // 1200
console.table(account.getHistory());
// [{type: 'deposit', amount: 500}, {type: 'withdraw', amount: 300}]