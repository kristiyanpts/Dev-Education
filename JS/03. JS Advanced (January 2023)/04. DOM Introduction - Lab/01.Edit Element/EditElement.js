function editElement(element, textToReplace, replaceWith) {
  let currentText = element.innerText;

  while (currentText.includes(textToReplace)) {
    currentText = currentText.replace(textToReplace, replaceWith);
  }

  element.innerText = currentText;
}
