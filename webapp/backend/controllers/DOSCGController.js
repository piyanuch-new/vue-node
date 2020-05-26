var express = require('express')
const getData = (req, res) => {	
	var varZ = 8+2
	var varX = 2-2

	var z = 23+varZ
	var y = 5-2
	var x = y-varX

	var a = 21
	var b = 23 - a
	var c = -21 - a
	res.json({
		xyz: {x,y,z},
		ab: {b,c}
	})
	
	
}

module.exports = {
	getData
}