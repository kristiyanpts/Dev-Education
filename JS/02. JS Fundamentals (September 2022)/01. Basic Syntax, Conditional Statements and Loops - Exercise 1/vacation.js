function Main(ppl, type, day) {
  let totalPrice = 0;
  let costFor1Person = 0;
  switch (type) {
    case "Students":
      if (day === "Friday") {
        costFor1Person = 8.45;
        totalPrice = ppl * costFor1Person;
      } else if (day === "Saturday") {
        costFor1Person = 9.8;
        totalPrice = ppl * costFor1Person;
      } else if (day === "Sunday") {
        costFor1Person = 10.46;
        totalPrice = ppl * costFor1Person;
      }
      break;
    case "Business":
      if (day === "Friday") {
        costFor1Person = 10.9;
        totalPrice = ppl * costFor1Person;
      } else if (day === "Saturday") {
        costFor1Person = 15.6;
        totalPrice = ppl * costFor1Person;
      } else if (day === "Sunday") {
        costFor1Person = 16;
        totalPrice = ppl * costFor1Person;
      }
      break;
    case "Regular":
      if (day === "Friday") {
        costFor1Person = 15;
        totalPrice = ppl * costFor1Person;
      } else if (day === "Saturday") {
        costFor1Person = 20;
        totalPrice = ppl * costFor1Person;
      } else if (day === "Sunday") {
        costFor1Person = 22.5;
        totalPrice = ppl * costFor1Person;
      }
      break;
    default:
      break;
  }

  if (ppl >= 30 && ppl < 100 && type === "Students") {
    totalPrice = totalPrice - (totalPrice * 0.15);
  } else if (ppl >= 100 && type === "Business") {
    totalPrice = totalPrice - (10 * costFor1Person);
  } else if (ppl >= 10 && ppl <= 20 && type === "Regular") {
    totalPrice = totalPrice - (totalPrice * 0.05);
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

Main(40,

    "Regular",
    
    "Saturday");
