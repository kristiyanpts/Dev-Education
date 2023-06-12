function attachEvents() {
  let buttonSend = document.getElementById("submit");
  let buttonRefresh = document.getElementById("refresh");
  let messages = document.getElementById("messages");

  buttonRefresh.addEventListener("click", GetMessages);
  buttonSend.addEventListener("click", SendMessage);

  async function GetMessages(event) {
    messages.innerHTML = "";
    event.preventDefault();
    let response = await fetch("http://localhost:3030/jsonstore/messenger");
    let data = await response.json();
    let newMessages = [];

    for (const [msgId, msgInfo] of Object.entries(data)) {
      newMessages.push(`${msgInfo.author}: ${msgInfo.content}`);
    }
    messages.innerHTML = newMessages.join("\n");
  }

  async function SendMessage(event) {
    event.preventDefault();
    let author = document.querySelector("input[name=author]").value;
    let content = document.querySelector("input[name=content]").value;
    let response = await fetch("http://localhost:3030/jsonstore/messenger", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author, content }),
    });
  }
}

attachEvents();
