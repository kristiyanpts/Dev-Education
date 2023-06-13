exports.generateEditOptions = function (selectedValue) {
  let cryptoOptions = [
    { value: "crypto-wallet", title: "Crypto Wallet" },
    { value: "credit-card", title: "Credit Card" },
    { value: "debit-card", title: "Debit Card" },
    { value: "paypal", title: "PayPal" },
  ];

  const options = cryptoOptions.map((c) => ({
    title: c.title,
    value: c.value,
    selected: c.value === selectedValue,
  }));

  return options;
};
