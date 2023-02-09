function createPerson(firstName, lastName) {
  let person = {
    firstName,
    lastName,
  };

  Object.defineProperty(person, "fullName", {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      let values = value.split(" ");
      if (value.length != 2) return;
      let [newFirstName, newLastName] = values;
      this.firstName = newFirstName;
      this.lastName = newLastName;
    },
  });

  return person;
}

// let person = createPerson("Peter", "Ivanov");

// console.log(person.fullName); //Peter Ivanov

// person.firstName = "George";

// console.log(person.fullName); //George Ivanov

// person.lastName = "Peterson";

// console.log(person.fullName); //George Peterson

// person.fullName = "Nikola Tesla";

// console.log(person.firstName); //Nikola

// console.log(person.lastName); //Tesla

let person = createPerson("Albert", "Simpson");

console.log(person.fullName); //Albert Simpson

person.firstName = "Simon";

console.log(person.fullName); //Simon Simpson

person.fullName = "Peter";

console.log(person.firstName); // Simon

console.log(person.lastName); // Simpson
