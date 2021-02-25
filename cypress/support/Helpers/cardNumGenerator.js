class CardNumGenerator {


    generateNumbers(number) {
        let newNumber = "";
        for (let i = 0; i < number; i++) {
            let randomNumber = Math.random() * 10;
            randomNumber = Math.floor(randomNumber);
            newNumber += randomNumber;
        }
        return newNumber;
    }

    getControlNumber(value) {
        let numbers = value.slice(0, 15);
        let sum = 0;
        for (let x = numbers.length; x > 0; x -= 1) {
            let number = parseInt(numbers[x - 1]);
            if ((x + 1) % 2 == 0) {
                let num = number * 2;
                if (num >= 10) {
                    sum += parseInt(num.toString().substring(0, 1)) + parseInt(num.toString().substring(1, 2));
                } else {
                    sum += number * 2;
                }
            } else {
                sum += number * 1;
            }
        }
        if (sum % 10 == 0) {
            return sum % 10;
        } else {
            return (10 - (sum % 10));
        }
    }

    generateCardNumber(selectValue = 'random') {
        let type;
        if (selectValue == 'random') {
            type = (Math.floor(Math.random() * 2) + 4).toString();
        } else if (selectValue == 'visa') {
            type = 4
        } else if (selectValue == 'masterCard') {
            type = 5
        } else {
            error.log('Something went wrong! Choose card type.')
        }
        let number = this.generateNumbers(14)
        let controlNumber = this.getControlNumber(type + number);
        return type + number + controlNumber;

    }


}

export default CardNumGenerator
