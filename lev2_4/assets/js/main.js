/* Aufgabenstellung


Schreibe eine Funktion, die beim Anklicken des Buttons die ausgewählte Farboption auf den Hintergrund des bodys anwendet.
Verwende den Code aus dem Kommentar.
Verwende Befehle:
addEventListener(“click”)
event.preventDefault();
.value
oder .selectedIndex 

Nutze Google, um zu lernen wie man Leerzeichen in Zeichenketten entfernt.
 */

let button = document.querySelector("button");
let select = document.getElementById("farbeAuswahlen");

button.addEventListener("click", (event) => {
	event.preventDefault();
	document.body.style.backgroundColor = select.value.split(" ").join("");
});
