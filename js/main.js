let imie = document.getElementById("i-name");
console.log(imie.value);

let nazwisko = document.getElementById("i-surname");
console.log(nazwisko.value);

let telefon = document.getElementById("i-phone");
console.log(telefon.value)

document.querySelector(`button`).onclick = function() {
    let zawartosc = document.getElementById("name")
    zawartosc.textContent = imie.value
    let zawartosc2 = document.getElementById("surname")
    zawartosc2.textContent = nazwisko.value
    let zawartosc3 = document.getElementById("phone")
    zawartosc3.textContent = telefon.value
}



