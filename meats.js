var SandwichMaker = (function(maker) {

    var meatPrices = {
        "Bacon" : 1.50,
        "Turkey" : .90,
        "Ham" : .90,
        "Roast Beef" : 1.15,
        "Salami" : 1.00
    };

    let meat = Object.create(null);

    meat.returnMeatNames = function() {
        let meats = [];
        for (key in meatPrices) {
            meats.push(key);
        }
        return meats;
    };

    meat.addMeat = function(IngredientSelected) {
        return meatPrices[IngredientSelected];
    };

    maker.Meats = meat;
    return maker;

})(SandwichMaker || {});


