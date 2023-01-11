function Main(speed, area) {
  switch (area) {
    case "city":
      if (speed <= 50) {
        console.log(`Driving ${speed} km/h in a 50 zone`);
      } else {
        console.log(
          `The speed is ${
            speed - 50
          } km/h faster than the allowed speed of 50 - ${ReturnStatus(
            speed - 50
          )}`
        );
      }
      break;
    case "residential":
      if (speed <= 20) {
        console.log(`Driving ${speed} km/h in a 20 zone`);
      } else {
        console.log(
          `The speed is ${
            speed - 20
          } km/h faster than the allowed speed of 20 - ${ReturnStatus(
            speed - 20
          )}`
        );
      }
      break;
    case "interstate":
      if (speed <= 90) {
        console.log(`Driving ${speed} km/h in a 90 zone`);
      } else {
        console.log(
          `The speed is ${
            speed - 90
          } km/h faster than the allowed speed of 90 - ${ReturnStatus(
            speed - 90
          )}`
        );
      }
      break;
    case "motorway":
      if (speed <= 130) {
        console.log(`Driving ${speed} km/h in a 130 zone`);
      } else {
        console.log(
          `The speed is ${
            speed - 130
          } km/h faster than the allowed speed of 130 - ${ReturnStatus(
            speed - 130
          )}`
        );
      }
      break;
    default:
      break;
  }

  function ReturnStatus(speed) {
    if (speed <= 20) {
      return "speeding";
    } else if (speed <= 40) {
      return "excessive speeding";
    } else {
      return "reckless driving";
    }
  }
}

Main(40, "city");
Main(21, "residential");
Main(120, "interstate");
Main(200, "motorway");
