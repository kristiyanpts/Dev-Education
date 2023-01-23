function generateReport() {
  let tbody = Array.from(document.querySelectorAll("table tbody tr"));
  let inputs = Array.from(document.querySelectorAll("table thead tr th input"));
  let report = [];

  for (let i = 0; i < tbody.length; i++) {
    let object = {};
    Array.from(tbody[i].querySelectorAll("td")).forEach((x, i) => {
      if (inputs[i].checked) {
        object[inputs[i].name] = x.innerText;
      }
    });
    report.push(object);
  }

  document.getElementById("output").innerText = JSON.stringify(report);

  console.log(report);
}
