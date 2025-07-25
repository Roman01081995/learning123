function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return sumUAH / currencyValues[i].value;
        }
    }
}

let result = exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 49}], 'EUR');

console.log(result);