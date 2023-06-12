function Main(Input) {
    let favBook = Input[0];
    let i = 1;
    let found = false;

    while (Input[i] !== "No More Books")
    {
        if (Input[i] === favBook)
        {
            found = true;
            break;
        }
        i++;
    }

    if (found === false)
    {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${i - 1} books.`);
    }
    else
    {
        console.log(`You checked ${i - 1} books and found it.`);
    }
}

Main(["Bourne",

"True Story",

"Forever",

"More Space",

"The Girl",

"Spaceship",

"Strongest",

"Profit",

"Tripple",

"Stella",

"The Matrix",

"Bourne"])