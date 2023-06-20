"use strict";
let isRecording = false;
let sequence = [];

export function toggleRecording() {
	if (isRecording) {
		stopRecording();
	} else {
		startRecording();
	}
}

export function startRecording() {
	sequence = [];
	isRecording = true;
}

export function stopRecording() {
	isRecording = false;
}

export function isRecordingActive() {
	return isRecording;
}

export function addToSequence(key) {
	if (isRecording) {
		sequence.push(key);
	}
}

export function getSequence() {
	return sequence;
}
