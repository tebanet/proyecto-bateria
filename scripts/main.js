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

let buttonA = document.getElementById("button-a");
handleButtonEvents(buttonA, "A", crash, function () {
  addToSequence("A");
});

let buttonS = document.getElementById("button-s");
handleButtonEvents(buttonS, "S", hihatClose, function () {
  addToSequence("S");
});

let buttonD = document.getElementById("button-d");
handleButtonEvents(buttonD, "D", hihatOpen, function () {
  addToSequence("D");
});

let buttonV = document.getElementById("button-v");
handleButtonEvents(buttonV, "V", kick, function () {
  addToSequence("V");
});

let buttonG = document.getElementById("button-g");
handleButtonEvents(buttonG, "G", ride, function () {
  addToSequence("G");
});

let buttonN = document.getElementById("button-n");
handleButtonEvents(buttonN, "N", snare, function () {
  addToSequence("N");
});

let buttonJ = document.getElementById("button-j");
handleButtonEvents(buttonJ, "J", tomHigh, function () {
  addToSequence("J");
});

let buttonK = document.getElementById("button-k");
handleButtonEvents(buttonK, "K", tomLow, function () {
  addToSequence("K");
});

let buttonL = document.getElementById("button-l");
handleButtonEvents(buttonL, "L", tomMid, function () {
  addToSequence("L");
});

let recordButton = document.getElementById("record-button");
handleButtonEvents(recordButton, "R", startRecording);

let stopButton = document.getElementById("stop-button");
handleButtonEvents(stopButton, "T", stopRecording);

let playButton = document.getElementById("play-button");
handleButtonEvents(playButton, "Y", function () {
  if (!isPlaying) {
    isPlaying = true;
    playButton.textContent = "Parar";
    playSequence();
    console.log(sequence);
  } else {
    isPlaying = false;
    playButton.textContent = "Reproducir";
    stopSequence();
    clearSequence();
  }
});
