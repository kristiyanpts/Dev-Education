function Calculate() {
    let min = Number(document.getElementById("min").value);
    let max = Number(document.getElementById("max").value);
    let numberSearchingFor = Number(document.getElementById("searchingFor").value);

    if (!Number.isNaN(min) && !Number.isNaN(max) && !Number.isNaN(numberSearchingFor)) {
        if (numberSearchingFor >= min && numberSearchingFor <= max) {
            document.getElementById("result").value = "Принадлежи";
        } else {
            document.getElementById("result").value = "Не ринадлежи";
        }
    }
}