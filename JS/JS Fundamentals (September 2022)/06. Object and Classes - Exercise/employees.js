function Main(Input) {
    let employees = [];
    for (let i = 0; i < Input.length; i++) {
        let tempEmployee = {
            "name": Input[i],
            "personalNumber": Input[i].length
        }
        employees.push(tempEmployee);
    }
    for (let i = 0; i < employees.length; i++) {
        console.log(`Name: ${employees[i].name} -- Personal Number: ${employees[i].personalNumber}`);
    }
}

Main([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])