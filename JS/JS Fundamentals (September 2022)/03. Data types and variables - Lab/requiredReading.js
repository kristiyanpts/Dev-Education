function Main(pages, pgPerHour, days) {
    let ttlHours = pages / pgPerHour;
    let hoursPerDay = ttlHours / days;
    console.log(hoursPerDay);
}

Main(212, 20, 2)