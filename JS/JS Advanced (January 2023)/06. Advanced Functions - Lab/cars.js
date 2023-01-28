function solution(commands) {
  let cars = {};

  function create(name) {
    cars[name] = {};
  }

  function createInherits(name, parentName) {
    cars[name] = cars[parentName];
  }

  function set(name, key, value) {
    cars[name][key] = value;
    console.log(name, cars[name][key]);
  }

  function print(name) {
    let result = [];
    for (const [key, value] of Object.entries(cars[name])) {
      result.push(`${key}:${value}`);
    }
    console.log(result.join(","));
  }

  for (let command of commands) {
    command = command.split(" ");
    switch (command[0]) {
      case "create":
        if (command[2] === "inherits") {
          createInherits(command[1], command[3]);
        } else {
          create(command[1]);
        }
        break;
      case "set":
        set(command[1], command[2], command[3]);
        break;
      case "print":
        print(command[1]);
        break;
      default:
        break;
    }
  }
}

solution([
  "create c1",

  "create c2 inherit c1",

  "set c1 color red",

  "set c2 model new",

  "print c1",

  "print c2",
]);
