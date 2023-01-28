function Main(...arguments) {
  let argCount = {};

  for (const argument of arguments) {
    console.log(`${typeof argument}: ${argument}`);
    argCount[typeof argument] !== undefined
      ? argCount[typeof argument].amount++
      : (argCount[typeof argument] = { amount: 1 });
  }

  for (const [arg, argInfo] of Object.entries(argCount).sort(
    (a, b) => b[1].amount - a[1].amount
  )) {
    console.log(`${arg} = ${argInfo.amount}`);
  }
}

Main({ name: "bob" }, 3.333, 9.999);
