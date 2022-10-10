function Main(Input) {
    let nums = Input.split(' ');
    let sum = 0;
    let avg = 0;
    let numbersBiggerThanAvg = [];
    for (let i = 0; i < nums.length; i++) {
        sum += Number(nums[i]);
    }
    avg = sum / nums.length;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > avg) {
            numbersBiggerThanAvg.push(Number(nums[i]));
        }
    }

    if (numbersBiggerThanAvg.length === 0) {
        console.log("No");
    } else {
        numbersBiggerThanAvg.sort((a, b) => b - a);

        while (numbersBiggerThanAvg.length > 5) {
            numbersBiggerThanAvg.pop();
        }

        console.log(numbersBiggerThanAvg.join(" "));
    }
}

Main('-1 -2 -3 -4 -5 -6')