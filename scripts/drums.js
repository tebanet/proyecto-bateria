"use strict";

export function crash() {
	const crash = new Audio("sounds/crash.wav");
	crash.play();
	addShadowToCrash();
}

export function hihatClose() {
	const hihatClose = new Audio("sounds/hihat-close.wav");
	hihatClose.play();
	addShadowToHiHat();
}

export function hihatOpen() {
	const hihatOpen = new Audio("sounds/hihat-open.wav");
	hihatOpen.play();
	addShadowToHiHat();
}

export function kick() {
	const kick = new Audio("sounds/kick.wav");
	kick.play();
	addShadowToKick();
}

export function ride() {
	const ride = new Audio("sounds/ride.wav");
	ride.play();
	addShadowToCrash();
}

export function snare() {
	const snare = new Audio("sounds/snare.wav");
	snare.play();
	addShadowToSnare();
}

export function tomHigh() {
	const tomHigh = new Audio("sounds/tom-high.wav");
	tomHigh.play();
	addShadowToTomHi();
}

export function tomLow() {
	const tomLow = new Audio("sounds/tom-low.wav");
	tomLow.play();
	addShadowToTomLow();
}

export function tomMid() {
	const tomMid = new Audio("sounds/tom-mid.wav");
	tomMid.play();
	addShadowToTomMid();
}

// Añadimos sombras

function addShadowToCrash() {
	const image = document.getElementById("image-crash");
	image.classList.add("shadow-class");
}

function addShadowToHiHat() {
	const image = document.getElementById("image-hihat");
	image.classList.add("shadow-class");
}

function addShadowToKick() {
	const image = document.getElementById("image-kick");
	image.classList.add("shadow-class");
}

function addShadowToSnare() {
	const image = document.getElementById("image-snare");
	image.classList.add("shadow-class");
}

function addShadowToTomHi() {
	const image = document.getElementById("image-tomhigh");
	image.classList.add("shadow-class");
}

function addShadowToTomLow() {
	const image = document.getElementById("image-tomlow");
	image.classList.add("shadow-class");
}

function addShadowToTomMid() {
	const image = document.getElementById("image-tommid");
	image.classList.add("shadow-class");
}
