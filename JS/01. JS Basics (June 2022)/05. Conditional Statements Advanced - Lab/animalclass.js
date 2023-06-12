function Main(Input) {
  let day = Input[0];

  switch (day) {
    case "dog":
      console.log("mammal");
      break;
    case "crocodile":
    case "tortoise":
    case "snake":
      console.log("reptile");
      break;
    default:
      console.log("unknown");
      break;
  }
}
