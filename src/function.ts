export {};

function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

let bmi2 = function (height: number, weight: number): number {
  return weight / (height * height);
};

let bmi3 = (height: number, weight: number): number => {
  return weight / (height * height);
};
//アロー関数では｛return｝を省略可能
let bmi4 = (height: number, weight: number): number =>
  weight / (height * height);
console.log(bmi(1.78, 86));
console.log(bmi2(1.78, 86));
console.log(bmi3(1.78, 86));
