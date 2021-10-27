export {};

let name = 'Atsushi';
name = 'Jota';

let nickname = 'Jota' as const;
nickname = 'Jota';

let profile = {
  name: 'Atsushi',
  height: 178,
} as const;

// profile.name = 'jota';
