/* Aufgabenstellung


Schreibe eine Funktion, die beim Anklicken der Buttons die Hintergrundfarben aller Elemente ändert.

HTML- und CSS-Code findest du im Kommentarbereich.
Nutze zum Beispiel
getElementsByClassName
for loop
length
Bonus: Wenn man nochmal den Button anklickt, ändert sich die Hintergrundfarbe wieder zurück.
 */

let elements = document.getElementsByClassName("example");
function myFunction() {
	Array.from(elements).forEach((element) => {
		element.classList.toggle("bg");
	});
}
