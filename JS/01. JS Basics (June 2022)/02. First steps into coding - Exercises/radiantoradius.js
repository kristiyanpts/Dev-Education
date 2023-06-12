function Main(Input) {
    let radian = Number(Input[0])
    let degree = radian * 180 / Math.PI
    console.log(degree)
}

Main(["3.1416"])