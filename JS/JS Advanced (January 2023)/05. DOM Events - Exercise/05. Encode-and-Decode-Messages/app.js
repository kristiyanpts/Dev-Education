function encodeAndDecodeMessages() {
  let buttons = document.getElementsByTagName("button");
  let textarea = document.getElementsByTagName("textarea");
  buttons[0].addEventListener("click", EncodeMessage);
  buttons[1].addEventListener("click", DecodeMessage);

  function EncodeMessage() {
    let text = textarea[0].value;
    text = text.split("");
    for (let i = 0; i < text.length; i++) {
      text[i] = String.fromCharCode(text[i].charCodeAt(0) + 1);
    }
    textarea[1].value = text.join("");
    textarea[0].value = "";
  }

  function DecodeMessage() {
    let text = textarea[1].value;
    text = text.split("");
    for (let i = 0; i < text.length; i++) {
      text[i] = String.fromCharCode(text[i].charCodeAt(0) - 1);
    }
    textarea[1].value = text.join("");
  }
}
