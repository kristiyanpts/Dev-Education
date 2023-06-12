class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    if (!this.priceForTheCamp.hasOwnProperty(condition)) {
      throw new Error("Unsuccessful registration at the camp.");
    }

    let isRegistered = this.listOfParticipants.find((p) => p.name == name);

    if (isRegistered) {
      return `The ${name} is already registered at the camp.`;
    }
    if (money < this.priceForTheCamp[condition]) {
      return `The money is not enough to pay the stay at the camp.`;
    }
    this.listOfParticipants.push({
      name,
      condition,
      power: 100,
      wins: 0,
    });
    return `The ${name} was successfully registered.`;
  }

  unregisterParticipant(name) {
    let isRegistered = this.listOfParticipants.find((p) => p.name == name);

    if (!isRegistered) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }
    this.listOfParticipants.splice(
      this.listOfParticipants.indexOf(isRegistered),
      1
    );
    return `The ${name} removed successfully.`;
  }

  timeToPlay(typeOfGame, participant1, participant2) {
    let isRegisteredP1 = this.listOfParticipants.find(
      (p) => p.name == participant1
    );
    let isRegisteredP2 = this.listOfParticipants.find(
      (p) => p.name == participant2
    );

    if (!isRegisteredP1) {
      throw new Error(`Invalid entered name/s.`);
    }

    if (participant2) {
      if (!isRegisteredP2) {
        throw new Error(`Invalid entered name/s.`);
      }
      if (isRegisteredP1.condition != isRegisteredP2.condition) {
        throw new Error(`Choose players with equal condition.`);
      }
    }

    if (typeOfGame === "Battleship") {
      isRegisteredP1.power += 20;
      return `The ${participant1} successfully completed the game ${typeOfGame}.`;
    } else if (typeOfGame === "WaterBalloonFights") {
      if (isRegisteredP1.power > isRegisteredP2.power) {
        isRegisteredP1.wins++;
        return `The ${participant1} is winner in the game ${typeOfGame}.`;
      } else if (isRegisteredP2.power > isRegisteredP1.power) {
        isRegisteredP2.wins++;
        return `The ${participant2} is winner in the game ${typeOfGame}.`;
      } else {
        return `There is no winner.`;
      }
    }
  }

  toString() {
    let output = [];
    output.push(
      `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
    );
    this.listOfParticipants
      .sort((a, b) => b.wins - a.wins)
      .map((p) =>
        output.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`)
      );
    return output.join("\n");
  }
}

// const summerCamp = new SummerCamp(
//   "Jane Austen",
//   "Pancharevo Sofia 1137, Bulgaria"
// );
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp(
//   "Jane Austen",
//   "Pancharevo Sofia 1137, Bulgaria"
// );
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp(
//   "Jane Austen",
//   "Pancharevo Sofia 1137, Bulgaria"
// );
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(
//   summerCamp.timeToPlay(
//     "WaterBalloonFights",
//     "Petar Petarson",
//     "Sara Dickinson"
//   )
// );
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(
//   summerCamp.timeToPlay(
//     "WaterBalloonFights",
//     "Petar Petarson",
//     "Dimitur Kostov"
//   )
// );

const summerCamp = new SummerCamp(
  "Jane Austen",
  "Pancharevo Sofia 1137, Bulgaria"
);
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(
  summerCamp.timeToPlay(
    "WaterBalloonFights",
    "Petar Petarson",
    "Sara Dickinson"
  )
);
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(
  summerCamp.timeToPlay(
    "WaterBalloonFights",
    "Petar Petarson",
    "Dimitur Kostov"
  )
);

console.log(summerCamp.toString());
