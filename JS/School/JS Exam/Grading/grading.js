function Calculate() {
    let examPoints = Number(document.getElementById("examPoints").value);

    if (!Number.isNaN(examPoints)) {
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