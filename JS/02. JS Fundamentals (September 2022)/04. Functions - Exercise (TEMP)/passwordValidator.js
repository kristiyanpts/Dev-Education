function Main(pass) {
    let passIsValid = true;
    if (pass.length < 6 || pass.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        passIsValid = false;
    }
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(pass)) {
        console.log("Password must consist only of letters and digits");
        passIsValid = false;
    }
    let digitsCount = 0;
    for (let i = 0; i < pass.length; i++) {
        if (Number(pass[i])) {
            digitsCount++;
        }
    }
    if (digitsCount < 2) {
        console.log("Password must have at least 2 digits");
        passIsValid = false;
    }

    if (passIsValid) {
        console.log("Password is valid");
    }
}

Main('Pa$s$s')