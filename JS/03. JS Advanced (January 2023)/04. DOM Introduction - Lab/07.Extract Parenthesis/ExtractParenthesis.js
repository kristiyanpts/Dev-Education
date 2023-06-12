function extract(content) {
  let elements = [];
  let text = document.getElementById(content).innerText;
  let pattern = /(\(+)(?<location>(?:[^)]+))(\)+)/g;

  while ((valid = pattern.exec(text)) !== null) {
    elements.push(valid.groups["location"]);
  }

  return elements.join("; ");
}
