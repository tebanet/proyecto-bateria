"use strict";
import { handleButtonEvents } from "./button.js";
import {
	startRecording,
	stopRecording,
	playSequence,
	addToSequence,
} from "./sequence.js";

let buttonA = document.getElementById("button-a");
handleButtonEvents(buttonA, "A", null, function () {
	addToSequence("A");
});

let buttonS = document.getElementById("button-s");
handleButtonEvents(buttonS, "S", null, function () {
	addToSequence("S");
});

let buttonD = document.getElementById("button-d");
handleButtonEvents(buttonD, "D", null, function () {
	addToSequence("D");
});

let buttonV = document.getElementById("button-v");
handleButtonEvents(buttonV, "V", null, function () {
	addToSequence("V");
});

let buttonG = document.getElementById("button-g");
handleButtonEvents(buttonG, "G", null, function () {
	addToSequence("G");
});

let buttonN = document.getElementById("button-n");
handleButtonEvents(buttonN, "N", null, function () {
	addToSequence("N");
});

let buttonJ = document.getElementById("button-j");
handleButtonEvents(buttonJ, "J", null, function () {
	addToSequence("J");
});

let buttonK = document.getElementById("button-k");
handleButtonEvents(buttonK, "K", null, function () {
	addToSequence("K");
});

let buttonL = document.getElementById("button-l");
handleButtonEvents(buttonL, "L", null, function () {
	addToSequence("L");
});
