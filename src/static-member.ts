export {};

class Me {
  static isProgrammer: boolean = true;
  static fistName: string = 'Jota';
  static lastName: string = 'Kaneko';

  static work(): string {
    return `Hey! this is ${this.fistName}!`;
  }
}

let me = new Me();
console.log(Me.fistName);
console.log(Me.work());
