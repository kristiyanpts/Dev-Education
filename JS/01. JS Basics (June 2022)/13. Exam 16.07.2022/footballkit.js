function Main(Input)
{
    let shirtPrice = Number(Input[0]);
    let priceGoal = Number(Input[1]);
    let shorts = shirtPrice * 0.75;
    let socks = shorts * 0.2;
    let shoes = (shirtPrice + shorts) * 2;
    let totalPrice = shirtPrice + shorts + socks + shoes;
    totalPrice -= totalPrice * 0.15;

    if (totalPrice >= priceGoal)
    {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${totalPrice.toFixed(2)} lv.`);
    }
    else
    {
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${(priceGoal - totalPrice).toFixed(2)} lv. more.`);
    }
}

Main(["59.99",
"500"])