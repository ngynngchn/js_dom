/* Aufgabenstellung


In dieser Übung werden wir die getElementsByTagName-Methode lernen.
Schreibe eine Funktion, die beim Anklicken des “Change me”-Buttons die Button- und Hintergrundfarbe der einzelnen Elemente ändert.
Hinweise:
Nutze die Methode getElementById
Nutze die Methode getElementsByTagName
Farben: #f6c89f, #ffe7d1, #4b8e8d, #396362, #666, #333
Denk an den index[]
 */
let button = document.getElementById("navChange");
let navLinks = document.getElementsByTagName("li");

let colors = ["#f6c89f", "#ffe7d1", "#4b8e8d", "#396362"];

button.addEventListener("click", () => {
	navLinks[0].style.backgroundColor = `${colors[0]}`;
	navLinks[1].style.backgroundColor = `${colors[1]}`;
	navLinks[2].style.backgroundColor = `${colors[2]}`;
	button.classList.remove("active");
	navLinks[3].style.backgroundColor = `${colors[3]}`;
});

console.log(Array.from(navLinks)[3]);
