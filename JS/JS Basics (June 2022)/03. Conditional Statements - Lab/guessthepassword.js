function Main(Input) {
    let password = Input[0]

    if (password === "s3cr3t!P@ssw0rd")
    {
        console.log("Welcome")
    }
    else {
        console.log("Wrong password!")
    }
}

Main(["s3cr3t!P@ssw0rd"])