function Main(Input) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    console.log(days[Input - 1] || "Invalid day!");
}

Main(2)