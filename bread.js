var SandwichMaker = (function(maker) {

    var breadPrices = {
        "Ciabatta" : 0.40,
        "Whole Grain" : 0.25,
        "Honey Wheat" : 0.25,
        "White" : 0.25,
        "Rye" : .35
    };

    let bread = Object.create(null);

    bread.returnBreadNames = function() {
        let breads = [];
        for (key in breadPrices) {
            breads.push(key);
        }
        return breads;
    };

    bread.addBread = function(ingredientSelected) {
        return breadPrices[ingredientSelected];
    };

    maker.Bread = bread;
    return maker;

})(SandwichMaker || {});


