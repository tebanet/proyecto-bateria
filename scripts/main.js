"use strict";
import { handleButtonEvents } from "./button.js";
import {
	startRecording,
	stopRecording,
	playSequence,
	addToSequence,
	stopSequence,
} from "./sequence.js";

import {
	crash,
	hihatClose,
	hihatOpen,
	kick,
	ride,
	snare,
	tomHigh,
	tomLow,
	tomMid,
} from "./drums.js";

let isPlaying = false;
let isRecording = false;

let buttonA = document.getElementById("button-a");
handleButtonEvents(buttonA, "A", crash, function () {
	addToSequence("A");
	const image = document.getElementById("image-crash");
	image.classList.remove("shadow-class");
});

let buttonS = document.getElementById("button-s");
handleButtonEvents(buttonS, "S", hihatClose, function () {
	addToSequence("S");
	const image = document.getElementById("image-hihat");
	image.classList.remove("shadow-class");
});

let buttonD = document.getElementById("button-d");
handleButtonEvents(buttonD, "D", hihatOpen, function () {
	addToSequence("D");
	const image = document.getElementById("image-hihat");
	image.classList.remove("shadow-class");
});

let buttonV = document.getElementById("button-v");
handleButtonEvents(buttonV, "V", kick, function () {
	addToSequence("V");
	const image = document.getElementById("image-kick");
	image.classList.remove("shadow-class");
});

let buttonG = document.getElementById("button-g");
handleButtonEvents(buttonG, "G", ride, function () {
	addToSequence("G");
	const image = document.getElementById("image-crash");
	image.classList.remove("shadow-class");
});

let buttonN = document.getElementById("button-n");
handleButtonEvents(buttonN, "N", snare, function () {
	addToSequence("N");
	const image = document.getElementById("image-snare");
	image.classList.remove("shadow-class");
});

let buttonJ = document.getElementById("button-j");
handleButtonEvents(buttonJ, "J", tomHigh, function () {
	addToSequence("J");
	const image = document.getElementById("image-tomhigh");
	image.classList.remove("shadow-class");
});

let buttonK = document.getElementById("button-k");
handleButtonEvents(buttonK, "K", tomLow, function () {
	addToSequence("K");
	const image = document.getElementById("image-tomlow");
	image.classList.remove("shadow-class");
});

let buttonL = document.getElementById("button-l");
handleButtonEvents(buttonL, "L", tomMid, function () {
	addToSequence("L");
	const image = document.getElementById("image-tommid");
	image.classList.remove("shadow-class");
});

let recordButton = document.getElementById("record-button");
handleButtonEvents(recordButton, "R", function () {
	if (!isRecording) {
		isRecording = true;
		recordButton.textContent = "Grabando";
		startRecording();
	}
});

let stopButton = document.getElementById("stop-button");
handleButtonEvents(stopButton, "T", function () {
	if (isRecording) {
		isRecording = false;
		recordButton.textContent = "Grabar";
	}
});

let playButton = document.getElementById("play-button");
handleButtonEvents(playButton, "Y", function () {
	if (!isPlaying) {
		isPlaying = true;
		playButton.textContent = "Parar";
		playSequence();
	} else {
		isPlaying = false;
		playButton.textContent = "Reproducir";
		stopSequence();
		clearSequence();
	}
});
