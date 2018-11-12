
/*  I spent a lot of time deliberating whether to create objects that represent the harp/strings. 
	I ultimately decided the application is simplest if the tuning system and pedal states are 
	stored in simple objects, and a string's pitch is calculated everytime it sounds. 
	The only problem this poses is that it may be complicated to dynamicly reflect pedal shifts
	in already sounding strings */

let	tuningSystem = tuningSystems["Pythagorean"],
	pedalStates = {
		A: {interval: 1},
		B: {interval: 1},
		C: {interval: 1},
		D: {interval: 1},
		E: {interval: 1},
		F: {interval: 1},
		G: {interval: 1}
	};
//  this pedalStates object is essentially a placeholder atm

tuningSystem.concertPitch = 440;

function calcSoundingPitch(noteName) {

	const note = getNoteIntervals(noteName),
		  lowA = tuningSystem.concertPitch / 4;
	
	// calculate default frequency relative to Low A then shift according to pedal
	return lowA * note.defaultDistanceFromLowA * note.pedalPitchShift;
}

function getNoteIntervals(noteName) {
	const pitchClass = noteName[0],
		  octaveMultiplier = Math.pow(2, noteName[1]);

	return {
		defaultDistanceFromLowA: octaveMultiplier * tuningSystem[pitchClass],
		pedalPitchShift: pedalStates[pitchClass].interval
	}
}

var polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster();

$(".harp-string").each(function() {
	this.addEventListener("mouseover", e => {
		e.preventDefault();

		let string = $(this).attr('id');
		let stringFrequency = calcSoundingPitch(string);
		polySynth.triggerAttackRelease(stringFrequency, "2n");
		polySynth.triggerAttackRelease(stringFrequency, "2n");
		/*
		var stringIsSounding = true;
		var element = document.getElementByID(string[0] + ) {
				
			}
		setTimeout(function(){ stringIsSounding = false }, 1000);
		if stringIsSounding {

		}
		*/
	});
});

$(".harp-pedal").each(function() {
	let pedal = $(this);
	let pitchClass = pedal.attr('id')[0];

	pedal.change(function() {
		// all pedal accidentals temporarily set to 72 EDO
		let interval = Math.pow(2, pedal.val()/72);
		pedalStates[pitchClass].interval = interval;
		pedal.next(".cents").html(ratioToCents(interval).toFixed(2) + "¢");
	});
});

function ratioToCents(ratio) {
	return 1200 * 3.322038403 * Math.log(ratio);
}
