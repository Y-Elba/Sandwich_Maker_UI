var SandwichMaker = (function(maker) {

    // Private variable to store the price
    var totalPrice = 0;

    var pendingPrices = {
        meats: {},
        cheese: {},
        veggies: {},
        breads: {},
        condiments: {}
    };

    let calculator = Object.create(null);

    // Iterates over pendingPrices and adjusts the total price based on user selection
    function getTotalPrice() {
        let arrayMaker = Object.values(pendingPrices);
        let getValues = arrayMaker.reduce(function(acc, cur) {
            return acc.concat(Object.values(cur));
        },[])
        let getTotal = getValues.reduce(function(acc, cur) {
            return acc + cur;
        })
        totalPrice = getTotal.toFixed(2);
        console.log(totalPrice);
    }

    // adjust the pending prices based on quantity selected
    calculator.quantityMultiplier = function(price, quantity, ingredientType, ingredientSubType) {
        let multipliedPrice = price * quantity;
        switch(ingredientType) {
            case "Meats":
                pendingPrices.meats[ingredientSubType] = parseFloat(multipliedPrice.toFixed(2));
                break;
            case "Cheese":
                pendingPrices.cheese[ingredientSubType] = parseFloat(multipliedPrice.toFixed(2));
                break;
            case "Veggies":
                pendingPrices.veggies[ingredientSubType] = parseFloat(multipliedPrice.toFixed(2));
                break;
            case "Breads":
                pendingPrices.breads[ingredientSubType] = parseFloat(multipliedPrice.toFixed(2));
                break;
            case "Condiments":
                pendingPrices.condiments[ingredientSubType] = parseFloat(multipliedPrice.toFixed(2));
        }
        getTotalPrice();
    }

    calculator.getPrice = function() {
        return totalPrice;
    }

    maker.Calc = calculator;
    return maker

})(SandwichMaker || {});

