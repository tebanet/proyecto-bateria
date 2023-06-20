// Función para agregar la clase "clicked"
function addClickedClass(button) {
	button.classList.add("clicked");
}

// Función para remover la clase "clicked"
function removeClickedClass(button) {
	button.classList.remove("clicked");
}

// Función para manejar los eventos del botón
export function handleButtonEvents(button, key, actionDown, actionUp) {
	button.addEventListener("mousedown", function () {
		addClickedClass(button);
		if (actionDown) {
			actionDown();
		}
	});

	button.addEventListener("mouseup", function () {
		removeClickedClass(button);
		if (actionUp) {
			actionUp();
		}
	});

	document.addEventListener("keydown", function (event) {
		if (event.key.toLowerCase() === key.toLowerCase()) {
			addClickedClass(button);
			if (actionDown) {
				actionDown();
			}
		}
	});

	document.addEventListener("keyup", function (event) {
		if (event.key.toLowerCase() === key.toLowerCase()) {
			removeClickedClass(button);
			if (actionUp) {
				actionUp();
			}
		}
	});
}
