function Main(numberOne, numberTwo, numberThree) {
    let nums = [numberOne, numberTwo, numberThree];

    for (let i = 0; i < nums.length; i++) {
        for (let k = 1; k < nums.length; k++) {
            if (nums[i] < nums[k]) {
                let tempNum = nums[i];
                nums[i] = nums[k];
                nums[k] = tempNum;
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
    }
}

Main(2, 1, 3)