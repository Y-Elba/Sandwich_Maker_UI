var SandwichMaker = (function(maker) {

    var condimentPrices = {
        "Mustard": 0.15,
        "Mayo": 0.15,
        "Chiptole Sauce": 0.15,
        "Horseradish": .15,
        "Basil Pesto": 0.20,
    };

    let condiments = Object.create(null);

    condiments.returnCondimentNames = function() {
        let condiments = [];
        for (key in condimentPrices) {
            condiments.push(key);
        }
        return condiments;
    };

    condiments.addCondiment = function(ingredientSelected) {
        return condimentPrices[ingredientSelected];
    };

    maker.Condiments = condiments;
    return maker;

})(SandwichMaker || {});


