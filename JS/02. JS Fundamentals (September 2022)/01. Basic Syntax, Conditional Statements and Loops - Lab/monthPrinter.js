function Main(month) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let foundMonth = false;
    for (let i = 0; i < months.length; i++) {
        if (month == i + 1) {
            console.log(months[i]);
            foundMonth = true;
            break;
        }
    }

    if (!foundMonth) {
        console.log(`Error!`);
    }
}

Main(1)