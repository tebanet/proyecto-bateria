"use strict";
let sequence = [];

export function startRecording() {
	sequence = []; // Limpiar la secuencia al comenzar la grabación
}

export function stopRecording() {
	// No se requiere ninguna acción especial al detener la grabación
}

export function playSequence() {
	let index = 0;

	function simulateKeyPress() {
		if (index < sequence.length) {
			let key = sequence[index];
			let eventObj = new KeyboardEvent("keydown", {
				key: key,
			});

			document.dispatchEvent(eventObj);

			setTimeout(function () {
				let eventObj = new KeyboardEvent("keyup", {
					key: key,
				});

				document.dispatchEvent(eventObj);

				index++;
				setTimeout(simulateKeyPress, 300); // Esperar 300ms entre pulsaciones
			}, 150); // Mantener presionado durante 150ms
		}
	}

	simulateKeyPress();
}

export function stopSequence() {
	sequence = [];
	isPlaying = false;
}

export function addToSequence(key) {
	sequence.push(key);
}
