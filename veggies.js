var SandwichMaker = (function(maker) {

    var veggiesPrices = {
        "Banana Peppers" : 0.25,
        "Lettuce" : 0.25,
        "Tomatoes" : 0.25,
        "Onions" : 0.10,
        "Pickles" : .10
    };

    let veggies = Object.create(null);

    veggies.returnVeggieNames = function() {
        let veggiesList = [];
        for (key in veggiesPrices) {
            veggiesList.push(key);
        }
        return veggiesList;
    };

    veggies.addVeggie = function(ingredientSelected) {
        return veggiesPrices[ingredientSelected];
    };

    maker.Veggies = veggies;
    return maker;

})(SandwichMaker || {});


