function Main(input) {
    const twoCriteriaSort = (cur, next) => cur.length - next.length || cur.localeCompare(next);
    input.sort(twoCriteriaSort);
    console.log(input.join('\n'));
}

Main(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])