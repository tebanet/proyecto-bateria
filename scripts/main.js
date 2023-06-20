"use strict";
import { handleButtonEvents } from "./button.js";
import {
	startRecording,
	stopRecording,
	playSequence,
	addToSequence,
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

let buttonA = document.getElementById("button-a");
handleButtonEvents(buttonA, "A", crash, null, function () {
	addToSequence("A");
});

let buttonS = document.getElementById("button-s");
handleButtonEvents(buttonS, "S", hihatClose, null, function () {
	addToSequence("S");
});

let buttonD = document.getElementById("button-d");
handleButtonEvents(buttonD, "D", hihatOpen, null, function () {
	addToSequence("D");
});

let buttonV = document.getElementById("button-v");
handleButtonEvents(buttonV, "V", kick, null, function () {
	addToSequence("V");
});

let buttonG = document.getElementById("button-g");
handleButtonEvents(buttonG, "G", ride, null, function () {
	addToSequence("G");
});

let buttonN = document.getElementById("button-n");
handleButtonEvents(buttonN, "N", snare, null, function () {
	addToSequence("N");
});

let buttonJ = document.getElementById("button-j");
handleButtonEvents(buttonJ, "J", tomHigh, null, function () {
	addToSequence("J");
});

let buttonK = document.getElementById("button-k");
handleButtonEvents(buttonK, "K", tomLow, null, function () {
	addToSequence("K");
});

let buttonL = document.getElementById("button-l");
handleButtonEvents(buttonL, "L", tomMid, null, function () {
	addToSequence("L");
});
