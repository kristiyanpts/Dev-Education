function Main(pies, fPie, sPie) {
  let newArr = [];
  let shouldAdd = false;
  for (let i = 0; i < pies.length; i++) {
    if (pies[i] === fPie) {
      shouldAdd = true;
    }
    if (shouldAdd) {
      newArr.push(pies[i]);
    }
    if (pies[i] === sPie) {
      shouldAdd = false;
    }
  }
  return newArr;
}

Main(
  [
    "Pumpkin Pie",

    "Key Lime Pie",

    "Cherry Pie",

    "Lemon Meringue Pie",

    "Sugar Cream Pie",
  ],

  "Key Lime Pie",

  "Lemon Meringue Pie"
);
Main(
  [
    "Apple Crisp",
    "Mississippi Mud Pie",
    "Pot Pie",
    "Steak and Cheese Pie",
    "Butter Chicken Pie",
    "Smoked Fish Pie",
  ],
  "Pot Pie",
  "Smoked Fish Pie"
);
