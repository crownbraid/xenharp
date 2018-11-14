const tuningSystems = {

	"Just Intonation": {
		name: "Just Intonation",
		A: 1,
		B: 9/8,
		C: 6/5,
		D: 27/20,
		E: 3/2,
		F: 8/5,
		G: 9/5
	},

	"Pythagorean": {
		name: "Pythagorean",
		A: 1,
		B: 9/8,
		C: 32/27,
		D: 4/3,
		E: 3/2,
		F: 128/81,
		G: 16/9
	},

	"31 EDO": {
		name: "31 EDO",
		A: 1,
		B: Math.pow(2, 5/31),
		C: Math.pow(2, 8/31),
		D: Math.pow(2, 13/31),
		E: Math.pow(2, 18/31),
		F: Math.pow(2, 21/31),
		G: Math.pow(2, 26/31)
	},

	"17 EDO": {
		name: "17 EDO",
		A: 1,
		B: Math.pow(2, 3/17),
		C: Math.pow(2, 6/17),
		D: Math.pow(2, 7/17),
		E: Math.pow(2, 10/17),
		F: Math.pow(2, 13/17),
		G: Math.pow(2, 16/17)
	},


	"14 EDO": {
		name: "14 EDO",
		A: 1,
		B: Math.pow(2, 2/14),
		C: Math.pow(2, 3/14),
		D: Math.pow(2, 5/14),
		E: Math.pow(2, 7/14),
		F: Math.pow(2, 8/14),
		G: Math.pow(2, 11/14)
	}
}

/*  will later set the pedalShiftIntervals inside the tuning system 
    structred as objects that contain interval name, 
	multiplier, maybe sagittal character code. 
 	will map these objects onto the pedalStates */
const pedalShiftIntervals = {
	1: 'temp',
	2: 'temp',
	3: 'temp',
	4: 'temp',
	5: 'temp'
}