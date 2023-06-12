function createAssemblyLine() {
  let object = {
    hasClima: function (parameter) {
      Object.assign(parameter, { temp: 21 });
      Object.assign(parameter, { tempSettings: 21 });
      Object.assign(parameter, {
        adjustTemp: function () {
          if (this.temp < this.tempSettings) {
            this.temp += 1;
          } else if (this.temp > this.tempSettings) {
            this.temp -= 1;
          }
        },
      });
    },
    hasAudio: function (parameter) {
      Object.assign(parameter, { currentTrack: { name: null, artist: null } });
      Object.assign(parameter, {
        nowPlaying: function () {
          if (
            this.currentTrack.name !== null &&
            this.currentTrack.artist !== null
          ) {
            console.log(
              `Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`
            );
          }
        },
      });
    },
    hasParktronic: function (parameter) {
      Object.assign(parameter, {
        checkDistance: function (distance) {
          if (distance < 0.1) {
            console.log("Beep! Beep! Beep!");
          } else if (distance >= 0.1 && distance < 0.25) {
            console.log("Beep! Beep!");
          } else if (distance >= 0.25 && distance < 0.5) {
            console.log("Beep!");
          } else {
            console.log("");
          }
        },
      });
    },
  };

  return object;
}

const assemblyLine = createAssemblyLine();

const myCar = {
  make: "Toyota",

  model: "Avensis",
};

assemblyLine.hasClima(myCar);

console.log(myCar.temp);

myCar.tempSettings = 18;

myCar.adjustTemp();

console.log(myCar.temp);

assemblyLine.hasAudio(myCar);

myCar.currentTrack = {
  name: "Never Gonna Give You Up",

  artist: "Rick Astley",
};

myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);

myCar.checkDistance(0.4);

myCar.checkDistance(0.2);

console.log(myCar);
