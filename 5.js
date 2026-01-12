function createMemoizedFibonacci() {
  //TODO: 구현하세요
  const cache = {};

  return function sum(n){
    if(n in cache) return cache[n]; // 캐시에 저장되어 있는지 확인
    if(n<=1) return n; // n이 1 이하면 피보나치 결과는 자기 자신이므로 n 반환

    cache[n] = sum(n-1) + sum(n-2); // 재귀 호출 후 캐시에 저장.
    return cache[n];

  }
}

// 테스트
const fib = createMemoizedFibonacci();
console.log(fib(10));  // 55
console.log(fib(50));  // 12586269025 (빠르게 계산되어야 함)
console.log(fib(10));  // 55 (캐시에서 가져옴)