function Main(Input) {
    let companies = {};
    while(Input.length > 0) {
        let info = Input.shift().split(' -> ');
        let company = info[0];
        let employeeToAdd = info[1];
        if (companies.hasOwnProperty(company)) {
            if (!companies[company].includes(employeeToAdd)) {
                companies[company].push(employeeToAdd)
            }
        } else {
            companies[company] = [];
            companies[company].push(employeeToAdd);
        }
    }
    for (const [company, employees] of Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]))) {
        console.log(company);
        for (const employee of employees) {
            console.log(`-- ${employee}`);
        }
    }
} 

Main([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])