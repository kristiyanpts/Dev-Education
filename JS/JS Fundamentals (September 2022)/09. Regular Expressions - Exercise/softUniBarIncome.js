// function Main(Input) {
//   let pattern =
//     /%(?<name>[A-Z][a-z]*)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<quantity>\d+)\|[^|$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/g;
//   let i = 0;
//   let totalIncome = 0;

//   while (Input[i] !== "end of shift") {
//     while ((valid = pattern.exec(Input[i])) !== null) {
//       let price = valid.groups["quantity"] * valid.groups["price"];
//       totalIncome += price;
//       console.log(
//         `${valid.groups["name"]}: ${valid.groups["product"]} - ${price.toFixed(
//           2
//         )}`
//       );
//     }
//     i++;
//   }
//   console.log(`Total income: ${totalIncome.toFixed(2)}`);
// }

// Main([
//   "%InvalidName%<Croissant>|2|10.3$",

//   "%Peter%<Gum>1.3$",

//   "%Maria%<Cola>|1|2.4",

//   "%Valid%<Valid>valid|10|valid20$",

//   "end of shift",
// ]);

let a = 10;
let b = 20;
let c = a > b ? a : b;
console.log(c);
