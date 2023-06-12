async function getInfo() {
  let busStop = document.getElementById("stopId").value;
  let stopName = document.getElementById("stopName");
  let buses = document.getElementById("buses");
  buses.innerHTML = "";
  try {
    let response = await fetch(
      `http://localhost:3030/jsonstore/bus/businfo/${busStop}`
    );
    let data = await response.json();
    stopName.textContent = data.name;
    for (let [bus, time] of Object.entries(data.buses)) {
      buses.innerHTML += `<li>Bus ${bus} arrives in ${time} minutes.</li>`;
    }
  } catch (error) {
    stopName.textContent = "Error";
  }
}
