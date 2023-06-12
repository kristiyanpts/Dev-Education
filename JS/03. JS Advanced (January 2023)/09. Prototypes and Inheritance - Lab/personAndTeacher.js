function personAndTeacher() {
  class Person {
    name = "";
    email = "";
  }

  class Teacher extends Person {
    subject = "";
  }

  return {
    Person,
    Teacher,
  };
}
