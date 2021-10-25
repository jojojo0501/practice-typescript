export {};

type Mojiretsu = string;

const fooString:string = "hello";
const fooMojiretsu:Mojiretsu = "Morning";

type profile = {
  name: string;
  age: number;
}

const example1:profile = {
  name:"jota",
  age:24
}

type example2 = typeof example1;