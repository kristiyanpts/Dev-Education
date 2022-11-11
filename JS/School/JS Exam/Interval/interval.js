function Calculate() {
    let min = Number(document.getElementById("min").value);
    let max = Number(document.getElementById("max").value);
    let numberSearchingFor = Number(document.getElementById("searchingFor").value);

    if (!Number.isNaN(min) && !Number.isNaN(max) && !Number.isNaN(numberSearchingFor) && HasAnyValue()) {
        if (numberSearchingFor >= min && numberSearchingFor <= max) {
            document.getElementById("result").value = "Принадлежи";
        } else {
            document.getElementById("result").value = "Не ринадлежи";
        }
    }
}

function HasAnyValue() {
    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;
    let numberSearchingFor = document.getElementById("searchingFor").value;

    if (min === "" && max === "" && numberSearchingFor === "") {
        return false;
    } else {
        return true;
    }
}