type User = {
  name: String;
  age: Number;
};

const user = {
  name: "Pesho",
  age: 21,
} as User;

interface AnotherUser {
  firstName: String;
  lastName: String;
  id: Number;
}

class AnotherUserClass implements AnotherUser {
  firstName: String;
  lastName: String;
  id: Number;

  getUserName() {
    return this.firstName + " " + this.lastName;
  }

  constructor(firstName: String, lastName: String, id: Number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
  }
}

const isAuthenticated: boolean = true;
const money: number = 1.5;

const users = [
  { firstName: "Pesho", lastName: "Ivanov", id: 1 },
  { firstName: "Mitko", lastName: "Petrov", id: 2 },
  { firstName: "Maria", lastName: "Petrova", id: 3 },
] as AnotherUser[];

users.forEach((user) => {
  console.log(
    "User " + user.id + " - Name: " + user.firstName + " " + user.lastName
  );
});

function getIdentity<T>(id: T) {
  console.log(id);
}

getIdentity<string>("Nigga");
getIdentity<number>(123);

enum PaymentStatus {
  Failed,
  Successful,
  Pending,
}
