class IdGenerator {

	constructor() {

	}

	getValueLetter() {
		this.valueLetter = {
			"A": 10,
			"B": 11,
			"C": 12,
			"D": 13,
			"E": 14,
			"F": 15,
			"G": 16,
			"H": 17,
			"I": 18,
			"J": 19,
			"K": 20,
			"L": 21,
			"M": 22,
			"N": 23,
			"O": 24,
			"P": 25,
			"Q": 26,
			"R": 27,
			"S": 28,
			"T": 29,
			"U": 30,
			"V": 31,
			"W": 32,
			"X": 33,
			"Y": 34,
			"Z": 35
		}
		return this.valueLetter
	}

	geLetterId() {
		this.letterId = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
		return this.letterId
	}

	manyId() {
		let value = document.getElementById("number").value
		let seperator = document.getElementById("seperator").value
		let valueFloor = Math.floor(value)
		let answer = ""
		if (value == 1) {
			seperator = ""
		}

		let message = document.getElementById("feedback")

		if (value >= 1 && value <= 50) {
			for (i = 0; i < valueFloor; i++) {
				answer += generateId() + seperator
			}
			document.getElementById("mainInput").value = answer
			message.textContent = ""
		} else {
			message.textContent = "Wpisz liczbÄ od 1 do 50"
			message.setAttribute("class", "error")
		}
	}

	getControlNumber(number) {
		let sum = number[0] * 7 + number[1] * 3 + number[2] * 1 + number[3] * 7 +
			number[4] * 3 + number[5] * 1 + number[6] * 7 + number[7] * 3
		let controlNumber = sum % 10
		return controlNumber
	}

	generatePrefix() {
		let prefix = "A"
		let letterId = this.geLetterId()
		for (let i = 0; i < 2; i++) {
			let randomNumber = Math.floor(Math.random() * letterId.length)
			prefix += letterId[randomNumber].toString()
		}
		return prefix
	}

	generateNumbers(number) {
		let newNumber = []
		for (let i = 0; i < number; i++) {
			let randomNumber = Math.random() * 10
			randomNumber = Math.floor(randomNumber)
			newNumber.push(randomNumber)
		}
		return newNumber
	}

	generateId() {
		let prefix = this.generatePrefix()
		let valueLetter = this.getValueLetter()
		let prefixValue = [valueLetter[prefix[0]], valueLetter[prefix[1]], valueLetter[prefix[2]]]
		let partOnenumber = prefixValue.concat(this.generateNumbers(5))
		let control_number = this.getControlNumber(partOnenumber)
		partOnenumber.splice(3, 0, control_number)

		let answer = prefix
		for (let i = 3; i < 9; i++) {
			answer += partOnenumber[i]
		}
		return answer
	}

}
export default IdGenerator