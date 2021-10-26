export {};

class Mahotsukai {}

class Souryo {}

class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ばーーん！');
  }
  kougeki(): void {
    console.log('ばし！');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
