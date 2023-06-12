function Main(Input) {
  let towns = [];
  for (let info of Input) {
    info = info.split("|");
    info = info.filter((n) => n);

    towns.push({
      Town: info[0].trim(),
      Latitude: Number(Number(info[1].trim()).toFixed(2)),
      Longitude: Number(Number(info[2].trim()).toFixed(2)),
    });
  }
  towns.splice(0, 1);
  console.log(JSON.stringify(towns));
}

Main([
  "| Town | Latitude | Longitude |",

  "| Sofia | 42.696552 | 23.32601 |",

  "| Beijing | 39.913818 | 116.363625 |",
]);

Main([
  "| Town | Latitude | Longitude |",

  "| Veliko Turnovo | 43.0757 | 25.6172 |",

  "| Monatevideo | 34.50 | 56.11 |",
]);
