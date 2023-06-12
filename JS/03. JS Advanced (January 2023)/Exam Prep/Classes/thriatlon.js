class Triathlon {
  constructor(competitionName) {
    this.competitionName = competitionName;
    this.participants = {};
    this.listOfFinalists = [];
  }

  addParticipant(participantName, participantGender) {
    if (this.participants.hasOwnProperty(participantName)) {
      return `${participantName} has already been added to the list`;
    }
    this.participants[participantName] = participantGender;
    return `A new participant has been added - ${participantName}`;
  }

  completeness(participantName, condition) {
    if (!this.participants.hasOwnProperty(participantName)) {
      throw new Error(
        `${participantName} is not in the current participants list`
      );
    }
    if (condition < 30) {
      throw new Error(
        `${participantName} is not well prepared and cannot finish any discipline`
      );
    }
    let competitions = Math.floor(condition / 30);

    if (competitions === 3) {
      let participantGender = this.participants[participantName];

      this.listOfFinalists.push({
        participantName,
        participantGender,
      });

      delete this.participants[participantName];

      return `Congratulations, ${participantName} finished the whole competition`;
    } else {
      return `${participantName} could only complete ${competitions} of the disciplines`;
    }
  }

  rewarding(participantName) {
    let isFinalist = this.listOfFinalists.find(
      (p) => p.participantName == participantName
    );
    if (!isFinalist) {
      return `${participantName} is not in the current finalists list`;
    }

    return `${participantName} was rewarded with a trophy for his performance`;
  }

  showRecord(criteria) {
    if (this.listOfFinalists.length === 0) {
      return `There are no finalists in this competition`;
    }

    if (criteria !== "all") {
      this.listOfFinalists.map((e) => {
        if (e.participantGender === criteria) {
          return e;
        }
      });
      if (this.listOfFinalists.length === 0) {
        return `There are no ${criteria}'s that finished the competition`;
      } else {
        let participantName = this.listOfFinalists[0].participantName;
        return `${participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
      }
    } else {
      let output = [];
      output.push(`List of all ${this.competitionName} finalists:`);
      this.listOfFinalists
        .sort((a, b) => a.participantName.localeCompare(b.participantName))
        .map((p) => output.push(`${p.participantName}`));
      return output.join("\n");
    }
  }
}

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.showRecord("all"));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));
