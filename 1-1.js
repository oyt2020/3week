function createCounter(initialValue = 0) {
    const intVal = initialValue;
	let value = intVal;
  //TODO: 구현하세요
  return {
    increment : function() {
      value += 1;
      return value;
    },
    decrement : function() {
        value -= 1;
        return value;
  },
  getValue : function(){
    return value;
  },
  reset : function(){
    value = intVal;
  }
}
}
// 테스트
const counter = createCounter(10);
const counter2 = createCounter(10);
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.decrement()); // 11
console.log(counter.getValue());  // 11
counter.reset();
console.log(counter.getValue());  // 10
console.log(counter.increment()); // 11
console.log(counter2.getValue()); // 10