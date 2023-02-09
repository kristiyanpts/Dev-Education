function personAndTeacher() {
  class Person {
    name = "";
    email = "";

    toString() {
      return `Person (name: ${this.name}, email: ${this.email})`;
    }
  }

  class Teacher extends Person {
    subject = "";

    toString() {
      return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
    }
  }

  class Student extends Person {
    course = "";

    toString() {
      return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
    }
  }

  return {
    Person,
    Teacher,
    Student,
  };
}
