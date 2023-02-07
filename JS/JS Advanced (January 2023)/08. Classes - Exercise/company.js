class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (!name || !salary || !position || !department || salary < 0) {
      throw new Error("Invalid input!");
    }
    if (this.departments.hasOwnProperty(department)) {
      this.departments[department].employees.push({ name, salary, position });
    } else {
      this.departments[department] = {
        avgSalary: 0,
        employees: [],
      };
      this.departments[department].employees.push({ name, salary, position });
    }
    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    let highestSalary = 0;
    let highestDepartment = null;
    let highestDepartmentName = null;
    let output = [];
    for (const [department, departmentInfo] of Object.entries(
      this.departments
    )) {
      departmentInfo.avgSalary =
        departmentInfo.employees.reduce(
          (sum, employee) => sum + employee.salary,
          0
        ) / departmentInfo.employees.length;
      if (departmentInfo.avgSalary > highestSalary) {
        highestSalary = departmentInfo.avgSalary;
        highestDepartment = departmentInfo;
        highestDepartmentName = department;
      }
    }

    output.push(`Best Department is: ${highestDepartmentName}`);
    output.push(`Average salary: ${highestDepartment.avgSalary.toFixed(2)}`);
    highestDepartment.employees
      .sort((a, b) => a.name.localeCompare(b.name))
      .sort((a, b) => b.salary - a.salary)
      .map((e) => output.push(`${e.name} ${e.salary} ${e.position}`));
    return output.join("\n");
  }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());
