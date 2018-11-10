// we'll replace this code when we have a UI
var harp = 
	"<h3>Strings (A-G, 3 octaves):</h3>" + 
	"<div id=\"harp-strings\">" + 
		"<div id=\"A1\" class=\"harp-string\"></div>" +
		"<div id=\"B1\" class=\"harp-string\"></div>" +
		"<div id=\"C1\" class=\"harp-string\"></div>" +
		"<div id=\"D1\" class=\"harp-string\"></div>" +
		"<div id=\"E1\" class=\"harp-string\"></div>" +
		"<div id=\"F1\" class=\"harp-string\"></div>" +
		"<div id=\"G1\" class=\"harp-string\"></div>" +
		"<div id=\"A2\" class=\"harp-string\"></div>" +
		"<div id=\"B2\" class=\"harp-string\"></div>" +
		"<div id=\"C2\" class=\"harp-string\"></div>" +
		"<div id=\"D2\" class=\"harp-string\"></div>" +
		"<div id=\"E2\" class=\"harp-string\"></div>" +
		"<div id=\"F2\" class=\"harp-string\"></div>" +
		"<div id=\"G2\" class=\"harp-string\"></div>" +
		"<div id=\"A3\" class=\"harp-string\"></div>" +
		"<div id=\"B3\" class=\"harp-string\"></div>" +
		"<div id=\"C3\" class=\"harp-string\"></div>" +
		"<div id=\"D3\" class=\"harp-string\"></div>" +
		"<div id=\"E3\" class=\"harp-string\"></div>" +
		"<div id=\"F3\" class=\"harp-string\"></div>" +
		"<div id=\"G3\" class=\"harp-string\"></div>" +
		"<div id=\"A4\" class=\"harp-string\"></div>" +
		"<div id=\"B4\" class=\"harp-string\"></div>" +
		"<div id=\"C4\" class=\"harp-string\"></div>" +
		"<div id=\"D4\" class=\"harp-string\"></div>" +
		"<div id=\"E4\" class=\"harp-string\"></div>" +
		"<div id=\"F4\" class=\"harp-string\"></div>" +
		"<div id=\"G4\" class=\"harp-string\"></div>" +
		"<div id=\"A5\" class=\"harp-string\"></div>" +
	"</div>" +
	"<div id=\"harp-pedals\">" + 
		"<h3>PEDALS:</h3>" +
		"A: <input type=\"range\" min=\"-5\" max=\"5\" value=\"0\" id=\"A-pedal\" class=\"harp-pedal\">" +
		"B: <input type=\"range\" min=\"-5\" max=\"5\" value=\"0\" id=\"B-pedal\" class=\"harp-pedal\">" +
		"C: <input type=\"range\" min=\"-5\" max=\"5\" value=\"0\" id=\"C-pedal\" class=\"harp-pedal\">" +
		"D: <input type=\"range\" min=\"-5\" max=\"5\" value=\"0\" id=\"D-pedal\" class=\"harp-pedal\">" +
		"E: <input type=\"range\" min=\"-5\" max=\"5\" value=\"0\" id=\"E-pedal\" class=\"harp-pedal\">" +
		"F: <input type=\"range\" min=\"-5\" max=\"5\" value=\"0\" id=\"F-pedal\" class=\"harp-pedal\">" +
		"G: <input type=\"range\" min=\"-5\" max=\"5\" value=\"0\" id=\"G-pedal\" class=\"harp-pedal\">" +
	"</div>"

$("#harp").append(harp);
