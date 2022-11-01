export function runCounter(inputNum = 0) {
  let counter = inputNum;

  function getCounter() {
    return counter;
  }

  function increaseCounter() {
    counter++;
  }

  return [getCounter, increaseCounter];
}

const [getA, nextA] = runCounter(1);

console.log({ getA: getA() });
nextA();
console.log({ getA: getA() });

const [getB, nextB] = runCounter(10);
nextB();
console.log({ getA: getA() });
console.log({ getB: getB() });

nextA();
console.log({ getA: getA() });
console.log({ getB: getB() });
