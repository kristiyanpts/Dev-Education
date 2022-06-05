function Main(Input) {
    let pages = Number(Input[0])
    let pagesPerHour = Number(Input[1])
    let daysToRead = Number(Input[2])

    let hours = (pages / pagesPerHour) / daysToRead

    console.log(hours)
}

Main(["212", "20", "2"])