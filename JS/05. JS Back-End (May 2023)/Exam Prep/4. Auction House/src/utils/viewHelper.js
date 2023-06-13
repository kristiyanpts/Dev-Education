exports.generateEditOptions = function (selectedValue) {
  let cryptoOptions = [
    { value: "estate", title: "Real Estate" },
    { value: "vehicles", title: "Vehicles" },
    { value: "furniture", title: "Furniture" },
    { value: "electronics", title: "Electronics" },
    { value: "other", title: "Other" },
  ];

  const options = cryptoOptions.map((c) => ({
    title: c.title,
    value: c.value,
    selected: c.title === selectedValue,
  }));

  return options;
};
