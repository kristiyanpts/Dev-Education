function Calculate() {
    let monthIndex = Number(document.getElementById("monthIndex").value);

    if (!Number.isNaN(monthIndex)) {
        let months = ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"];
        document.getElementById("result").value = months[monthIndex - 1] !== undefined ? months[monthIndex - 1] : "Грешка!";
    }
}