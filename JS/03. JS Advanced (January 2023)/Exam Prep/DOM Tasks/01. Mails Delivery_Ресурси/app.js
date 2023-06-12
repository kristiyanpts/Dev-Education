function solve() {
  let inputFields = Array.from(document.getElementsByTagName("input"));
  let message = document.getElementById("message");
  let buttonAdd = document.getElementById("add");
  let buttonReset = document.getElementById("reset");
  let mailList = document.getElementById("list");
  let sendList = document.getElementsByClassName("sent-list")[0];
  let deleteList = document.getElementsByClassName("delete-list")[0];

  buttonAdd.addEventListener("click", AddMail);
  buttonReset.addEventListener("click", ResetMail);

  function AddMail(e) {
    e.preventDefault();
    let [recipient, title] = inputFields.map((e) => `${e.value}`);
    messageText = message.value;

    if (recipient == "" || title == "" || messageText == "") {
      return;
    }

    let li = document.createElement("li");
    li.innerHTML = `<h4>Title: ${title}</h4><h4>Recipient Name: ${recipient}</h4><span>${messageText}</span>`;
    let actions = document.createElement("div");
    actions.setAttribute("id", "list-action");
    let buttonSend = document.createElement("button");
    buttonSend.setAttribute("id", "send");
    buttonSend.setAttribute("type", "submit");
    buttonSend.textContent = "Send";
    let buttonDelete = document.createElement("button");
    buttonDelete.setAttribute("id", "delete");
    buttonDelete.setAttribute("type", "submit");
    buttonDelete.textContent = "Delete";
    buttonSend.addEventListener("click", SendMessage);
    buttonDelete.addEventListener("click", DeleteMessage);
    actions.appendChild(buttonSend);
    actions.appendChild(buttonDelete);
    li.appendChild(actions);
    mailList.appendChild(li);
    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }
    message.value = "";

    function SendMessage() {
      li.remove();
      li.innerHTML = `<span>To: ${recipient}</span><span>Title: ${title}</span>`;
      actions.setAttribute("id", "");
      actions.setAttribute("class", "btn");
      buttonDelete.setAttribute("id", "");
      buttonDelete.setAttribute("class", "delete");
      buttonSend.remove();
      li.appendChild(actions);
      sendList.appendChild(li);
    }

    function DeleteMessage() {
      li.remove();
      li.innerHTML = `<span>To: ${recipient}</span><span>Title: ${title}</span>`;
      actions.remove();
      deleteList.appendChild(li);
    }
  }

  function ResetMail(e) {
    e.preventDefault();
    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }
    message.value = "";
  }
}
solve();
