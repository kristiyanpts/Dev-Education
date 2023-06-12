function Main(num) {
    console.log(`Odd sum = ${oddSum(num)}, Even sum = ${evenSum(num)}`);

    function oddSum(num) {
        let sum = 0; 
        while (num > 0) {
            let digit = num % 10;
            num = Math.floor(num / 10);
    
            if (digit % 2 !== 0) {
                sum += digit;
            }
        }
    
        return sum;
    }
    
    function evenSum(num) {
        let sum = 0; 
        while (num > 0) {
            let digit = num % 10;
            num = Math.floor(num / 10);
    
            if (digit % 2 === 0) {
                sum += digit;
            }
        }
    
        return sum;
    }
}

Main(1000435)