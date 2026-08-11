export const people = [
  { name: "Jack", age: 50 },
  { name: "Michael", age: 9 },
  { name: "John", age: 40 },
  { name: "Ann", age: 19 },
  { name: "Elisabeth", age: 16 },
];

export const isTeenager = (p) => p.age >= 10 && p.age <= 20;

export const firstTeenager = people.find(isTeenager);
export const allTeenagers = people.filter(isTeenager);
export const everyoneIsTeenager = people.every(isTeenager);
export const anyTeenager = people.some(isTeenager);

export const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12",
  },
};

export const {
  address: { street },
} = person;
