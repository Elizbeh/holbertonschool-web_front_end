let countPrimeNumbers = function() {
  var timeBegin = performance.now();

  let count = 0;
  for (let i = 2; i <=100; i++) {
    if(isPrime(i)) {
      count++;
    }
  }

  const timeEnd = performance.now();
  const executionTime = timeEnd - timeBegin;

  console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`);
  return count;
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function hundredTimes() {
  const timeBegin = performance.now();

  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }

  const timeEnd = performance.now();
  const executionTime = timeEnd - timeBegin;

  console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);
}

hundredTimes();