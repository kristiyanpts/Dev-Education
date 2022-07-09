function Main(Input) {
    let resto = Number(Input[0]);
    var stotinki = (resto+"").split(".")[1];
    let coins = 0;

    let shouldStop = false;

    while (shouldStop === false)
    {
        if (resto > 1 && resto < 2)
        {
            resto -= 1;
            coins++;
        }
        else if (resto >= 2)
        {
            resto -= 2;
            coins++;
        }

        if (stotinki >= 50)
        {
            stotinki -= 50;
            coins++;
        }
        else if (stotinki >= 20)
        {
            stotinki -= 20;
            coins++;
        }
        else if (stotinki >= 10)
        {
            stotinki -= 10;
            coins++;
        }
        else if (stotinki >= 5)
        {
            stotinki -= 5;
            coins++;
        }
        else if (stotinki >= 2)
        {
            stotinki -= 2;
            coins++;
        }
        else if (stotinki >= 1)
        {
            stotinki -= 1;
            coins++;
        }

        if (stotinki === 0 || resto === 0)
        {
            shouldStop = true;
        }
    }

    console.log(coins);
}

Main(["2.73"])