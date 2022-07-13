console.log("Segitiga Pertama");
function st1(b) {
    let hasil = "";

    for (let i = 0; i < b; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += "*";
        }
        hasil += "\n";
    }
    return hasil;
}
console.log(st1(6));

console.log("Segitiga Kedua");
function st2(b) {
    let hasil = "";

    for (let i = 1; i <= b; i++) {
        for (let j = b - 1; j >= i; j--) {
            hasil += " ";
        }
        for (let k = 1; k <= i; k++) {
            hasil += "*";
        }
        hasil += "\n";
    }
    return hasil;
}
console.log(st2(5));
