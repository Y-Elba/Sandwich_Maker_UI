var SandwichMaker = (function(maker) {

    var cheesePrices = {
        "Cheddar": 0.50,
        "Swiss": 0.50,
        "American": .25,
        "Bleu": .50,
        "Mozzarella": .50
    };

    let cheese = Object.create(null);

    cheese.returnCheeseNames = function() {
        let cheeses = [];
        for (key in cheesePrices) {
            cheeses.push(key);
        }
        return cheeses;
    };

    cheese.addCheese = function(ingredientSelected) {
        return cheesePrices[ingredientSelected];
    };

    maker.Cheese = cheese;
    return maker;

})(SandwichMaker || {});


