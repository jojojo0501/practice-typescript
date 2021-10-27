export {};

let name: any = 'Jota';

//上が推奨
let length = (name as string).length;
// let length = (<string>name).length;

length = 3;
