/* Aufgabenstellung


In dieser Übung werden wir DOM Elements kennenlernen.
Schreibe eine Funktion, die beim Anklicken des “Change me” Buttons den Home Button ändert.
Der Code befindet sich im Kommentar.
Nutze:
onclick
getElementById
 */

let button = document.getElementById("navChange");

let home = document.getElementById("navHome");
button.addEventListener("click", () => {
	home.innerHTML = "emoH";
	home.style.backgroundColor = "pink";
	home.style.color = "black";
});
