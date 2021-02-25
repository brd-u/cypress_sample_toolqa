class PeselGenerator {

	getMonthOffsetForPesel(century) {
		switch (century) {
			case 18:
				return 80
			case 19:
				return 0
			case 20:
				return 20
			case 21:
				return 40
			case 22:
				return 60
		}
	}

	computePeselControlDigit(rawPesel) {
		let peselDigits = rawPesel.split('').map(function (d) {
			return +d
		})
		let weigths = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3]
		let sum1 = 0
		for (let i = 0; i < weigths.length; i += 1) {
			sum1 += weigths[i] * peselDigits[i]
		}
		sum1 = (10 - (sum1 % 10)) % 10
		return sum1
	}
	generatePesel() {
		let rand = (min, max) => {
			return min + Math.floor((max - min) * Math.random())
		}
		let last2Digits = (number) => {
			return ('00' + Math.floor(number % 100).toString(10)).slice(-2)
		}
		let daysInMonth = (year, month) => {
			return new Date(year, month + 1, 0).getDate()
		}
		let birthYear = rand(1800, 2018)
		let birthMonth = rand(1, 13)
		let monthOffset = this.getMonthOffsetForPesel(Math.floor(birthYear / 100))
		let birthDay = rand(1, daysInMonth(birthYear, birthMonth) + 1)
		let fourRandomDigits = ('0000' + rand(0, 10000).toString(10)).slice(-4)
		let rawPesel = last2Digits(birthYear) + last2Digits(birthMonth + monthOffset) + last2Digits(birthDay) + fourRandomDigits
		let controlDigit = this.computePeselControlDigit(rawPesel)
		return rawPesel + controlDigit
	}
}


export default PeselGenerator