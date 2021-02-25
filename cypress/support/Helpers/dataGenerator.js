class Generator {

	returnRandomNum(fromNum, toNum) {

		return this.x = Math.floor((Math.random() * (toNum - fromNum + 1)) + fromNum).toString()
	}

	randomString(len, type) {
		type = type && type.toLowerCase()
		let str = '',
			i = 0,
			min = type == 'letters' ? 10 : 0,
			max = type == 'number' ? 10 : 62
		for (; i++ < len;) {
			let r = Math.random() * (max - min) + min << 0
			str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48)
		}
		return str
	}

	randomDate(start, end) {
		return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().substring(0, 10)
	}

	generateCurrentMonthName() {
		const month = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień']
		let date = new Date()
		let currentMonth = month[date.getMonth()]
		return currentMonth.toString()
	}
}


export default Generator