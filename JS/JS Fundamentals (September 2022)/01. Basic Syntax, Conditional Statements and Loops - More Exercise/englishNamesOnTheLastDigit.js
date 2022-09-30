function Main(number) {
    let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    let digit = number % 10;
    console.log(numbers[digit - 1]);
}

Main(3)