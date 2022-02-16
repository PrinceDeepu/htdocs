String.prototype.sort = function() {
    return this.split('').sort().join('');
};

const getDictionary = text => {
    const factorial = (numbers) => {
        let fact = 1;
        for (let number = 1; number <= numbers; number++) {
            fact *= number;
        }
    
        return fact;
    }
    
    const sName = text.sort();
    const nameLength = sName.length;
    let rank = 1;
    let desiredChars = [];

    console.log(sName);

    for (let index = 0; index < nameLength; index++) {
        
        if(sName[index] !== text[index]) {
            rank += factorial(nameLength - index);
        } else {

        }
    }

    return rank;
}

console.log(getDictionary('aspire'));