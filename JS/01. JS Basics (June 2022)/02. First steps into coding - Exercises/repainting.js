function Main(Input) {
    let NylonPrice = 1.50;
    let PaintPrice = 14.50;
    let RazreditelPrice = 5.0;
    let TorbichkaPrice = 0.4;

    let Nylon = Number(Input[0]);
    let Paint = Number(Input[1]);
    let Razreditel = Number(Input[2]);
    let Hours = Number(Input[3]);
    
    let NylonSum = (Nylon + 2) * NylonPrice;
    let PaintSum = (Paint + Paint * 0.1) * PaintPrice;
    let RazreditelSum = Razreditel * RazreditelPrice;

    let TotalSum = NylonSum + PaintSum + RazreditelSum + TorbichkaPrice;
    let RabotniciSum = (TotalSum * 0.3) * Hours;
    let FinalSum = TotalSum + RabotniciSum;

    console.log(FinalSum);
}

Main(["10", "11", "4", "8"]);