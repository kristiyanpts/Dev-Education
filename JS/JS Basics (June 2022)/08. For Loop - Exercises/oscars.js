function Main(Input) {
    let actor = Input[0];
    let startingPts = Number(Input[1]);
    let evaluatingAmt = Number(Input[2]);

    let finalPts = startingPts;

    for (let i = 0; i < evaluatingAmt * 2; i += 2) {
        let name = Input[i + 3];
        let pts = Number(Input[i + 4]);

        finalPts += (name.length * pts) / 2;
        
        if (finalPts > 1250.5)
        {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${finalPts.toFixed(1)}!`);
            finalPts = -1;
            break;
        }
    }

    if (finalPts > 1250.5)
    {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${finalPts.toFixed(1)}!`);
    }
    else if (finalPts <= 1250.5 && finalPts >= 0)
    {
        console.log(`Sorry, ${actor} you need ${(1250.5 - finalPts).toFixed(1)} more!`);
    }
}

Main(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])