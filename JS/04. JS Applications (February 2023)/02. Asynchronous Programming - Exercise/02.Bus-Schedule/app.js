function solve() {
  let currentStation = "depot";
  let info = document.getElementsByClassName("info")[0];
  let buttonDepart = document.getElementById("depart");
  let buttonArrive = document.getElementById("arrive");
  async function depart() {
    try {
      let response = await fetch(
        `http://localhost:3030/jsonstore/bus/schedule/${currentStation}`
      );
      let data = await response.json();
      info.textContent = "Next stop " + data.name;
      buttonArrive.disabled = false;
      buttonDepart.disabled = true;
    } catch (error) {
      info.textContent = "Error";
      buttonArrive.disabled = true;
      buttonDepart.disabled = true;
    }
  }

  async function arrive() {
    try {
      let response = await fetch(
        `http://localhost:3030/jsonstore/bus/schedule/${currentStation}`
      );
      let data = await response.json();
      info.textContent = "Arriving at " + data.name;
      currentStation = data.next;
      buttonDepart.disabled = false;
      buttonArrive.disabled = true;
    } catch (error) {
      info.textContent = "Error";
      buttonArrive.disabled = true;
      buttonDepart.disabled = true;
    }
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
