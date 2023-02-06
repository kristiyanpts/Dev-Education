class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    if (this.goals.hasOwnProperty(peak)) {
      return `${peak} has already been added to your goals`;
    }
    this.goals[peak] = altitude;
    return `You have successfully added a new goal - ${peak}`;
  }

  hike(peak, time, difficultyLevel) {
    if (!this.goals.hasOwnProperty(peak)) {
      throw new Error(`${peak} is not in your current goals`);
    }
    if (this.resources <= 0) {
      throw new Error("You don't have enough resources to start the hike");
    }

    let difference = this.resources - time * 10;

    if (difference < 0) {
      return "You don't have enough resources to complete the hike";
    }

    this.resources -= time * 10;

    this.listOfHikes.push({
      peak,
      time,
      difficultyLevel,
    });

    delete this.goals[peak];

    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }

  rest(time) {
    let timeToAdd = time * 10;

    if (this.resources + timeToAdd > 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    }
    this.resources += timeToAdd;
    return `You have rested for ${time} hours and gained ${
      time * 10
    }% resources`;
  }

  showRecord(criteria) {
    if (this.listOfHikes.length === 0) {
      return `${this.username} has not done any hiking yet`;
    }

    if (criteria !== "all") {
      let newHikes = [];
      this.listOfHikes.map((e) => {
        if (e.difficultyLevel === criteria) {
          newHikes.push(e);
        }
      });
      if (newHikes.length === 0) {
        return `${this.username} has not done any ${criteria} hiking yet`;
      } else {
        let fastestHike = newHikes.sort((a, b) => a.time - b.time)[0];
        return `${this.username}'s best ${criteria} hike is ${fastestHike.peak} peak, for ${fastestHike.time} hours`;
      }
    } else {
      let output = [];
      output.push("All hiking records:");
      this.listOfHikes.map((h) =>
        output.push(`${this.username} hiked ${h.peak} for ${h.time} hours`)
      );
      return output.join("\n");
    }
  }
}

const user = new SmartHike("Vili");
user.addGoal("Musala", 2925);
user.hike("Musala", 8, "hard");
console.log(user.showRecord("easy"));
user.addGoal("Vihren", 2914);
user.hike("Vihren", 4, "hard");
console.log(user.showRecord("hard"));
user.addGoal("Rui", 1706);
user.hike("Rui", 3, "easy");
console.log(user.showRecord("all"));
