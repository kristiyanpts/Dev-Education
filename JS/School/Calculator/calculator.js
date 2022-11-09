let numbers = [];

function ClickedNumber(number) {
    if (document.getElementById("main-input").value.length <= 15) {
        document.getElementById("main-input").value = document.getElementById("main-input").value + number;
    } else {
        Notify("Max Length Reached!", 2000, 'red');
    }
}

function OperationClicked(operator) {
    let input = document.getElementById("main-input").value;
    let number = Number(input);
    switch (operator) {
        case "+":
            document.getElementById("main-input").value = "";
            numbers.push(number || 0);
            numbers.push("+");
            break;
        case "-":
            document.getElementById("main-input").value = "";
            numbers.push(number || 0);
            numbers.push("-");
            break;
        case "*":
            document.getElementById("main-input").value = "";
            numbers.push(number || 0);
            numbers.push("*");
            break;
        case "/":
            document.getElementById("main-input").value = "";
            numbers.push(number || 0);
            numbers.push("/");
            break;
        case "=":
            document.getElementById("main-input").value = "";
            numbers.push(number || 0);
            CalculateEverything();
            break;
        default:
            console.log("here");
            Notify("Something went wrong...", 2000, "red")
            break;
    }
}

function CalculateEverything() {
    let outputNum = 0;
    let outputHistory = "";
    let tempNum = 0;
    let noshit = false;
    console.log(numbers);
    for (let i = 0; i < numbers.length; i += 2) {
        if (i % 2 === 0) {
            tempNum = numbers[i];
            console.log(i, outputNum);

            if (numbers[i + 1] !== undefined) {
                switch (numbers[i + 1]) {
                    case "+":
                        outputNum = outputNum + tempNum;
                        outputHistory = outputHistory !== "" ? + " + " : "" + tempNum;
                        break;
                    case "-":
                        outputNum = outputNum - tempNum > 0 ? tempNum : tempNum;
                        outputHistory = outputHistory !== "" ? + " - " : "" + tempNum;
                        break;
                    case "*":
                        outputNum = outputNum > 0 ? outputNum : 1 * tempNum;
                        outputHistory = outputHistory !== "" ? + " * " : "" + tempNum;
                        break;
                    case "/":
                        outputNum = outputNum > 0 ? outputNum : numbers[0] / numbers[1];
                        outputHistory = outputHistory !== "" ? + " / " : "" + tempNum;
                        break;
                    default:
                        noshit = true;
                        Notify("Something went wrong...", 2000, "red")
                        break;
                }
            } else {
                switch (numbers[i - 1]) {
                    case "+":
                        outputNum = outputNum + tempNum;
                        outputHistory = outputHistory + " + " + tempNum;
                        break;
                    case "-":
                        console.log(outputNum - tempNum);
                        outputNum = outputNum - tempNum;
                        outputHistory = outputHistory + " - " + tempNum;
                        break;
                    case "*":
                        outputNum = outputNum * tempNum;
                        outputHistory = outputHistory + " * " + tempNum;
                        break;
                    case "/":
                        outputNum = outputNum > 0 ? outputNum : numbers[0] / tempNum;
                        outputHistory = outputHistory + " / " + tempNum;
                        break;
                    default:
                        Notify("Something went wrong...", 2000, "red")
                        noshit = true;
                        break;
                }
            }
        }
    }
    if (!noshit) {
        numbers = [];
        document.getElementById("main-input").value = outputNum;
        console.log(document.getElementById("calc-history").innerHTML.length);
        let child = document.createElement('div');
        child.setAttribute("class", "calc-history-item");
        let date = new Date();
        child.innerHTML = outputHistory + " = " + outputNum + " | " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        document.getElementById("actual-history").appendChild(child);
    }
}

function ConvertNumber() {
    let number = Number(document.getElementById("main-input").value)
    if (document.getElementById("main-input").value !== "" && number) {
        document.getElementById("main-input").value = number > 0 ? -number : number;
    } else {
        Notify("No number entered!", 2000, 'red');
    }
}

function OtherFunctions(functionReceived) {
    let number = Number(document.getElementById("main-input").value)

    if (number) {
        switch (functionReceived) {
            case "percentageof":
                document.getElementById("main-input").value = number / 100;
                break;
            case "divideone":
                document.getElementById("main-input").value = 1 / number;
                break;
            case "square":
                document.getElementById("main-input").value = number * number;
                break;
            case "squareof":
                let squareofNum = 0;
                for (let i = 0; i <= number; i++) {
                    console.log(i);
                    if (i * i === number) {
                        squareofNum = i;
                    }
                }
                if (squareofNum !== 0) {
                    document.getElementById("main-input").value = squareofNum;
                } else {
                    Notify("No real square for the given number!", 2000, 'red');
                }
                break;
            default:
                break;
        }
    } else {
        Notify("No number entered!", 2000, 'red');
    }
}

function Delete(everything) {
    if (everything) {
        numbers = [];
        document.getElementById("main-input").value = "";
    } else {
        document.getElementById("main-input").value = "";
    }
}

function DeleteIndex() {
    let arr = Array.from(document.getElementById("main-input").value);
    arr.pop();
    document.getElementById("main-input").value = arr.join("");
}

function Notify(text, time, color) {
    document.getElementById("alert-text").innerText = text;
    document.getElementById("alert").style.backgroundColor = color;
    document.getElementById("alert").style.opacity = 1;
    setTimeout(() => {
        document.getElementById("alert").style.opacity = 0;
    }, time)
}

let currentPage = "History";

function SwitchPage(page, button) {
    HideOtherPages();
    document.getElementById(button).style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    document.getElementById(page).style.display = "block";
}

function HideOtherPages() {
    document.getElementById('calc-history').style.display = "none";
    document.getElementById('calc-settings').style.display = "none";
    document.getElementById('info-settings').style.display = "none";
    document.getElementById('history-button').style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    document.getElementById('settings-button').style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    document.getElementById('info-button').style.backgroundColor = "rgba(255, 255, 255, 0.1)";
}

function CheckShit(elementId) {
    let alegedColor = document.getElementById(elementId).value;

    switch (elementId) {
        case 'bcolor':
            document.body.style.backgroundColor = alegedColor;
            break;
        case 'tcolor':
            var all = document.getElementsByTagName("*");
            for (var i=0, max=all.length; i < max; i++) {
                all[i].style.transition = "0.5s";
                all[i].style.color = alegedColor;
            }
            break;
        default:
            break;
    }
}

function ClearHistory() {
    document.getElementById('actual-history').innerHTML = "";
}