function Main(string) {
    let firstHalf = ""; 
    let secondHalf = "";
    for (let i = 0; i < string.length / 2; i++) {
        firstHalf += string[i];
    }
    for (let i = string.length / 2; i < string.length; i++) {
        secondHalf += string[i];
    }
    firstHalf = firstHalf.split('');
    secondHalf = secondHalf.split('');
    console.log(firstHalf.reverse().join(""));
    console.log(secondHalf.reverse().join(""));
}

Main('tluciffiDsIsihTgnizamAoSsIsihT')