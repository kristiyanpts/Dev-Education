function Main(Input) {
    let journal = Input.shift().split(', ');
    let command = Input.shift().split(' - ');

    while (command[0] !== "Craft!") {
        switch (command[0]) {
            case "Collect":
                if (!journal.includes(command[1])) {
                    journal.push(command[1]);
                }
                break;
            case "Drop":
                if (journal.includes(command[1])) {
                    journal.splice(journal.indexOf(command[1]), 1);
                }
                break;
            case "Combine Items":
                let oldItem = command[1].split(':')[0];
                let newItem = command[1].split(':')[1];
                if (journal.includes(oldItem)) {
                    journal.splice(journal.indexOf(oldItem) + 1, 0, newItem);
                }
                break;
            case "Renew":
                if (journal.includes(command[1])) {
                    let item = journal.splice(journal.indexOf(command[1]), 1);
                    journal.push(item);
                }
                break;
            default:
                break;
        }

        command = Input.shift().split(' - ');
    }

    console.log(journal.join(", "));
}

Main([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]
  )