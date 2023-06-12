class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    let newPlayers = [];
    footballPlayers.forEach((p) => {
      let [name, age, playerValue] = p.split("/");
      age = Number(age);
      playerValue = Number(playerValue);

      let isAlrPlayer = this.invitedPlayers.find((p) => p.name == name);

      if (!isAlrPlayer) {
        this.invitedPlayers.push({
          name,
          age,
          playerValue,
        });
        newPlayers.push(name);
      } else {
        if (playerValue > isAlrPlayer.playerValue) {
          isAlrPlayer.playerValue = playerValue;
        }
      }
    });

    return `You successfully invite ${newPlayers.join(", ")}.`;
  }

  signContract(selectedPlayer) {
    let [name, offer] = selectedPlayer.split("/");
    offer = Number(offer);

    let isAlrPlayer = this.invitedPlayers.find((p) => p.name == name);

    if (!isAlrPlayer) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    if (offer < isAlrPlayer.playerValue) {
      throw new Error(
        `The manager's offer is not enough to sign a contract with ${name}, ${
          isAlrPlayer.playerValue - offer
        } million more are needed to sign the contract!`
      );
    }
    isAlrPlayer.playerValue = "Bought";
    return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
  }

  ageLimit(name, age) {
    let isAlrPlayer = this.invitedPlayers.find((p) => p.name == name);

    if (!isAlrPlayer) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    if (isAlrPlayer.age < age) {
      let difference = age - isAlrPlayer.age;
      if (difference < 5) {
        return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
      } else {
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
      }
    } else {
      return `${name} is above age limit!`;
    }
  }

  transferWindowResult() {
    let output = [];
    output.push("Players list:");
    this.invitedPlayers
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((p) => output.push(`Player ${p.name}-${p.playerValue}`));
    return output.join("\n");
  }
}

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(
//   fTeam.newAdditions([
//     "Kylian Mbappé/23/160",
//     "Lionel Messi/35/50",
//     "Pau Torres/25/52",
//   ])
// );
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.transferWindowResult());

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(
//   fTeam.newAdditions([
//     "Kylian Mbappé/23/160",
//     "Lionel Messi/35/50",
//     "Pau Torres/25/52",
//   ])
// );
// console.log(fTeam.ageLimit("Lionel Messi", 33));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(
//   fTeam.newAdditions([
//     "Kylian Mbappé/23/160",
//     "Lionel Messi/35/50",
//     "Pau Torres/25/52",
//   ])
// );
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));
