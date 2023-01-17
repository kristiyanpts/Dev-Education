function Main(Input) {
  let res1 = 0;
  let res2 = 0;
  let res3 = "";
  for (let i = 0; i < Input.length; i++) {
    res1 += Input[i];
    res2 += 1 / Input[i];
    res3 += Input[i].toString();
  }
  console.log(res1);
  console.log(res2);
  console.log(res3);
}

Main([2, 4, 8, 16]);
