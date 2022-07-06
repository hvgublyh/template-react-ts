// // interface
// interface User {
//   name: string;
//   year: number;
// }
// class UserAccount {
//   name: string;
//   year: number;

//   constructor(name: string, year: number) {
//     this.name = name;
//     this.year = year;
//   }
// }
// const user: User = new UserAccount('tom', 11);

// type
type userState = 'start' | 'end';
const type: userState = 'start';

// declare
// interface Backpack<Type> {
//   get: () => Type;
//   add: (number: number) => void;
// }

// declare const backpack: Backpack<String>;

// backpack.get();
// backpack.add(23);