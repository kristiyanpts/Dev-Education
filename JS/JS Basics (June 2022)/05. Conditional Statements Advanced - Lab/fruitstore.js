function Main(Input) {
  let fruit = Input[0];
  let dayOfTheWeek = Input[1];
  let amount = Number(Input[2]);

  let price = 0;

  if (
    dayOfTheWeek === "Monday" ||
    dayOfTheWeek === "Tuesday" ||
    dayOfTheWeek === "Wednesday" ||
    dayOfTheWeek === "Thursday" ||
    dayOfTheWeek === "Friday"
  ) {
    if (fruit === "banana") {
      price += amount * 2.5;
    } else if (fruit === "apple") {
      price += amount * 1.2;
    } else if (fruit === "orange") {
      price += amount * 0.85;
    } else if (fruit === "grapefruit") {
      price += amount * 1.45;
    } else if (fruit === "kiwi") {
      price += amount * 2.7;
    } else if (fruit === "pineapple") {
      price += amount * 5.5;
    } else if (fruit === "grapes") {
      price += amount * 3.85;
    }
  } else if (dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday") {
    if (fruit === "banana") {
      price += amount * 2.7;
    } else if (fruit === "apple") {
      price += amount * 1.25;
    } else if (fruit === "orange") {
      price += amount * 0.9;
    } else if (fruit === "grapefruit") {
      price += amount * 1.6;
    } else if (fruit === "kiwi") {
      price += amount * 3;
    } else if (fruit === "pineapple") {
      price += amount * 5.6;
    } else if (fruit === "grapes") {
      price += amount * 4.2;
    }
  }

  if (price != 0) {
    console.log(price.toFixed(2));
  } else {
    console.log("error");
  }
}

Main(["apple", "Tuesday", "2"]);
