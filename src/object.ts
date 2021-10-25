export {};

let profile1: object = {name: 'Jota'};
console.log({profile1});
profile1 = {birthYear: 1976};
console.log({profile1});

let profile2: {
  name: string;
} =  {name: 'Jota'};

profile2 = {name :'aaa'};