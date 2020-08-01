// 509. Fibonacci Number


// 1
function fib(N: number): number {
  if(N <= 1) { return N; }
  return fib(N - 1) + fib(N - 2);
};


// 2
function fib2(N: number): number {
  if ( N <= 1 ) return N;
  return memoize2(N);
};

function memoize2(N: number): number {
  let cache: number[] = [];
  cache[0] = 0;
  cache[1] = 1;

  for(let i = 2; i <= N; i++) {
    cache[i] = cache[i-1] + cache[i-2];
  }

  return cache[N];
};


// 3
function fib3(N: number): number {
  if ( N <= 1 ) return N;
  else if ( N === 2) return 1;

  let count: number = 0;
  let prev1: number = 1;
  let prev2: number = 1;

  for(let i = 3; i <= N; i++) {
    count = prev1 + prev2;
    prev2 = prev1;
    prev1 = count;
  }

  return count;
};


// 4
var cache: number[] = [];

function fib4(N: number): number {
  if ( N <= 1 ) return N;

  cache[0] = 0;
  cache[1] = 1;

  return memoize4(N);
};

function memoize4(N: number): number {
  if ( cache[N] !== undefined ) return cache[N];

  cache[N] = memoize4(N - 1) + memoize4(N - 2);

  return memoize4(N);
};


// 5
function fib5(N: number): number {
  let goldenRatio: number = (1 + Math.sqrt(5)) / 2;
  return Math.round(Math.pow(goldenRatio, N) / Math.sqrt(5));
};