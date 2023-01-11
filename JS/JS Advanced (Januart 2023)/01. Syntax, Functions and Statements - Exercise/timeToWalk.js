function Main(steps, footLength, speed) {
  let km = steps * footLength;
  let speedInSec = speed / 3.6;
  let time = km / speedInSec;
  let rests = Math.floor(km / 500);

  let timeMin = Math.floor(time / 60);
  let timeSec = Math.round(time - timeMin * 60);
  let timeHr = Math.floor(time / 3600);

  console.log(
    (timeHr < 10 ? "0" : "") +
      timeHr +
      ":" +
      (timeMin + rests < 10 ? "0" : "") +
      (timeMin + rests) +
      ":" +
      (timeSec < 10 ? "0" : "") +
      timeSec
  );
}

Main(4000, 0.6, 5);
Main(2564, 0.7, 5.5);
