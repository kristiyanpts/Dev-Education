function attachEvents() {
  let btnLoad = document.getElementById("btnLoad");
  let btnCreate = document.getElementById("btnCreate");
  let phonebook = document.getElementById("phonebook");

  btnLoad.addEventListener("click", loadContacts);
  btnCreate.addEventListener("click", createContact);
  phonebook.addEventListener("click", deleteContact);

  async function loadContacts() {
    phonebook.innerHTML = "";
    let response = await fetch("http://localhost:3030/jsonstore/phonebook");
    let contacts = await response.json();

    for (const [contactId, contactInfo] of Object.entries(contacts)) {
      console.log(contactId, contactInfo);
      let li = document.createElement("li");
      li.textContent = `${contactInfo.person}: ${contactInfo.phone}`;
      li.innerHTML += `<button data-id="${contactId}">Delete</button>`;
      phonebook.appendChild(li);
    }
  }

  async function deleteContact(event) {
    if (event.target.tagName == "BUTTON") {
      if (event.target.getAttribute("data-id")) {
        let id = event.target.getAttribute("data-id");
        let response = await fetch(
          "http://localhost:3030/jsonstore/phonebook/" + id,
          {
            method: "DELETE",
          }
        );
        loadContacts();
      }
    }
  }

  function createContact() {
    let person = document.getElementById("person").value;
    let phone = document.getElementById("phone").value;
    let response = fetch("http://localhost:3030/jsonstore/phonebook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ person, phone }),
    });
    loadContacts();
  }
}

attachEvents();
