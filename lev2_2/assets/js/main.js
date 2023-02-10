/* Aufgabenstellung


In dieser Übung werden wir DOM Elements und Forms Value kennenlernen.
Schreibe eine Funktion, die beim Anklicken des Button die Werte in der Konsole ausgibt.
Der Code befindet sich im Kommentar.
Nutze
getElementById
.value;
 */

let fname = document.getElementById("vorname");
let lname = document.getElementById("nachname");
let country = document.getElementById("land");

function getInfo() {
	console.log(`Full name: ${fname.value} ${lname.value}, ${country.value}`);
}
