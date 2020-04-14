function solve() {
	const input = document.querySelector('#input').value;
	const result = document.getElementById('resultOutput');

	let num = input.split('').map(Number).reduce((x, y) => x + +y);
	while (num > 9) {
		num = num.toString().split('').map(Number).reduce((x, y) => x + +y);
	}	
	
	let reducedInput = input.substring(num, input.length - num);
	const binarryArray = [];
	
	for (let i = 0; i < reducedInput.length; i += 8) {
		binarryArray.push(reducedInput.slice(i, i + 8));		
	} 

	const text = [];
	binarryArray.forEach(element => {
		let number = parseInt(element, 2);
		const currentLetter = String.fromCharCode(number);
		let re = /[A-Za-z ]/;

		if (re.test(currentLetter)) {
			text.push(currentLetter);
		}
	});

	result.textContent = text.join('')
}