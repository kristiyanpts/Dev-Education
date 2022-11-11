function Calculate() {
    let examPoints = Number(document.getElementById("examPoints").value);

    if (!Number.isNaN(examPoints) && HasAnyValue()) {
        let resultBox = document.getElementById("result");
        if (examPoints <= 50) {
            resultBox.value = "Ниска";
        } else if (examPoints > 50 && examPoints <= 80) {
            resultBox.value = "Средна";
        } else {
            resultBox.value = "Висока";
        }
    }
}

function HasAnyValue() {
    let examPoints = document.getElementById("examPoints").value;

    if (examPoints === "") {
        return false;
    } else {
        return true;
    }
}