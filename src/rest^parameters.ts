export {};

// const sum = (...values) => {
//   console.log(values);
// };

const reducer = (previousValue: number, currentValue: number) => {
  console.log(previousValue + '+' + currentValue);
  return previousValue + currentValue;
};

const sum = (...values: number[]): number => {
  const sum: number = values.reduce(reducer);
  return sum;
};

console.log(sum(1, 2, 3, 4, 5));
