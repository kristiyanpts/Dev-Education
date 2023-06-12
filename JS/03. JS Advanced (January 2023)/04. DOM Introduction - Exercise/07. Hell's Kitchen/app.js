function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let restaurants = {};
    let data = JSON.parse(document.getElementsByTagName("textarea")[0].value);

    for (let i = 0; i < data.length; i++) {
      let tempData = data[i].split(" - ");
      let employees = tempData[1].split(", ");
      let name = tempData[0];
      let workers = [];

      for (let emp of employees) {
        emp = emp.split(" ");
        workers.push({ name: emp[0], salary: Number(emp[1]) });
      }

      if (restaurants.hasOwnProperty(name)) {
        workers = workers.concat(restaurants[name].employees);
      }

      workers.sort((a, b) => b.salary - a.salary);
      let avgSalary =
        workers.reduce((sum, worker) => sum + worker.salary, 0) /
        workers.length;
      let highestSalary = workers[0].salary;

      restaurants[name] = {
        employees: workers,
        avgSalary,
        highestSalary,
      };
    }
    let best = undefined;
    let bestAvgSalary = 0;
    for (const rest in restaurants) {
      if (restaurants[rest].avgSalary > bestAvgSalary) {
        bestAvgSalary = restaurants[rest].avgSalary;
        best = { rest, ...restaurants[rest] };
      }
    }
    document.getElementsByTagName("p")[0].textContent = `Name: ${
      best.rest
    } Average Salary: ${best.avgSalary.toFixed(
      2
    )} Best Salary: ${best.highestSalary.toFixed(2)}`;
    document.getElementsByTagName("p")[1].textContent = best.employees
      .map((e) => `Name: ${e.name} With Salary: ${e.salary}`)
      .join(" ");
  }
}
