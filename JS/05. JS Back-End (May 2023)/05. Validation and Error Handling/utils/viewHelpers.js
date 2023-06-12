exports.generateDifficultyOptionsViewData = function (difficultyLevel) {
  const titles = [
    "Very Easy",
    "Easy",
    "Medium  (Standard 3x3)",
    "Intermidiate",
    "Expert",
    "Hardcore",
  ];

  const options = titles.map((t, index) => ({
    title: `${index + 1} - ${t}`,
    value: index + 1,
    selected: Number(difficultyLevel) === index + 1,
  }));

  return options;
};
