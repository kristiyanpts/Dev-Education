function Main(Input) {
  let city = Input[0];
  let sales = Number(Input[1]);

  let percent = 0;

  if (city === "Sofia") {
    if (sales >= 0 && sales <= 500) {
      percent = 0.05;
    } else if (sales > 500 && sales <= 1000) {
      percent = 0.07;
    } else if (sales > 1000 && sales <= 10000) {
      percent = 0.08;
    } else if (sales > 10000) {
      percent = 0.12;
    } else {
      console.log("error");
    }
  } else if (city === "Varna") {
    if (sales >= 0 && sales <= 500) {
      percent = 0.045;
    } else if (sales > 500 && sales <= 1000) {
      percent = 0.075;
    } else if (sales > 1000 && sales <= 10000) {
      percent = 0.1;
    } else if (sales > 10000) {
      percent = 0.13;
    } else {
      console.log("error");
    }
  } else if (city === "Plovdiv") {
    if (sales >= 0 && sales <= 500) {
      percent = 0.055;
    } else if (sales > 500 && sales <= 1000) {
      percent = 0.08;
    } else if (sales > 1000 && sales <= 10000) {
      percent = 0.12;
    } else if (sales > 10000) {
      percent = 0.145;
    } else {
      console.log("error");
    }
  } else {
    console.log("error");
  }

  let output = sales * percent;
  if (output > 0) {
    console.log(output.toFixed(2));
  }
}

Main(["Plovdiv", "499.99"]);
