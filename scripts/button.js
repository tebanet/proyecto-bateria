"use strict";
export function handleButtonEvents(button, key, onPress, onHold) {
	let isPressed = false;
	let holdTimer;

	function pressButton() {
		if (!isPressed) {
			isPressed = true;
			button.classList.add("pressed");
			if (onPress) {
				onPress();
			}
			holdTimer = setTimeout(holdButton, 500);
		}
	}

	function releaseButton() {
		if (isPressed) {
			isPressed = false;
			button.classList.remove("pressed");
			clearTimeout(holdTimer);
		}
	}

	function holdButton() {
		if (isPressed && onHold) {
			onHold();
		}
	}

	button.addEventListener("mousedown", pressButton);
	button.addEventListener("mouseup", releaseButton);
	button.addEventListener("mouseleave", releaseButton);

	document.addEventListener("keydown", function (event) {
		if (event.key === key && !isPressed) {
			pressButton();
		}
	});

	document.addEventListener("keyup", function (event) {
		if (event.key === key) {
			releaseButton();
		}
	});
}
