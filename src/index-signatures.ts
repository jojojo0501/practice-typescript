export {};

interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Jota', underTwenty: false };

//インデックスシグネチャーの書き方
// {[index:typeForIndex]:typeForValue}
profile.name = 'Ham';
profile.age = 11;
profile.nationality = 'Japan';
