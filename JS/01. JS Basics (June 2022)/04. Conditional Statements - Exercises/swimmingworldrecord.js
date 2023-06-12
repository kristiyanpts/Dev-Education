function Main(Input) {
    let currentRecord = Number(Input[0])
    let distance = Number(Input[1])
    let distancePerSecond = Number(Input[2])

    let time = distance * distancePerSecond
    time = time + (Math.floor((distance / 15)) * 12.5)
    
    if (time < currentRecord)
    {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    }
    else
    {
        console.log(`No, he failed! He was ${(time - currentRecord).toFixed(2)} seconds slower.`);
    }
}

Main(["55555.67",

"3017",

"5.03"])