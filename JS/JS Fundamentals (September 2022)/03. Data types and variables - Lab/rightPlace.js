function Main(notFullString, symbol, fullString) {
    notFullString = notFullString.replace('_', symbol);

    if (notFullString == fullString) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}

Main("Str_ng", "o", "Strong")