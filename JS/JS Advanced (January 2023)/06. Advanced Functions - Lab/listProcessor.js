function solution(commands) {
  let object = [];

  function add(string) {
    object.push(string);
  }

  function remove(string) {
    while (object.includes(string)) {
      object.splice(object.indexOf(string), 1);
    }
  }

  function print() {
    console.log(object.join(","));
  }

  for (let command of commands) {
    command = command.split(" ");
    switch (command[0]) {
      case "add":
        add(command[1]);
        break;
      case "remove":
        remove(command[1]);
        break;
      case "print":
        print();
        break;
      default:
        break;
    }
  }
}

solution(["add hello", "add again", "remove hello", "add again", "print"]);
