function Main(year, month, day) {
    var Day = new Date(`${month.toString()} ${day.toString()}, ${year.toString()}`);
    console.log(Day);
    var NextDay = new Date(Day);
    NextDay.setDate(Day.getDate() + 1);
    console.log(NextDay);
}

Main(2016, 9, 30)