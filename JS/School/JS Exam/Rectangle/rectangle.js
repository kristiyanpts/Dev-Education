function Calculate() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);

    if (!Number.isNaN(a) && !Number.isNaN(b)) {
        let area = a * b;
        let circ = (a * 2) + (b * 2);
        document.getElementById("result").value = `Лице: ${area} | Обиколка: ${circ}`;
    }
}