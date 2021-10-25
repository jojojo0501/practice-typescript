export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  if (printable) {
    console.log(weight / (height * height));
  }
  return weight / (height * height);
};
bmi(1.78, 88);
