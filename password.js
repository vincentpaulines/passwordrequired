function getValue() {
	let givenanswer = eval(document.inputbox.elements[0].value)
	let trueanswer = 71/6
	if (givenanswer == trueanswer) {
		console.log("true")
		window.location = "https://chillsome.carrd.co/#literallyasuka"
		event.preventDefault()
	} else {
		console.log("false")
	} 
}

