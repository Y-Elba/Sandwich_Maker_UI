const ingredientsOutput = document.getElementById("ingredients"),
    priceOutput = document.getElementById("display-box");

// dynamically places checkboxes and labels into the document based on ingredient/price objects on ingredient modules
function putSectionBoxesInDom() {
    let ingredientObject = {
        "Breads": SandwichMaker.Bread.returnBreadNames(),
        "Meats": SandwichMaker.Meats.returnMeatNames(),
        "Cheese": SandwichMaker.Cheese.returnCheeseNames(),
        "Veggies": SandwichMaker.Veggies.returnVeggieNames(),
        "Condiments": SandwichMaker.Condiments.returnCondimentNames()
    }
    for(var key in ingredientObject) {
        let toStickInDom = document.createElement('div');
        toStickInDom.innerHTML =
            `<label class="head-label">${key}</label>
			<section id="${key.toLowerCase()}-chooser">
				<checkboxcontainer><input type="checkbox" name="${key}" class="checkbox"><label>${ingredientObject[key][0]}</label></checkboxcontainer>
				<checkboxcontainer><input type="checkbox" name="${key}" class="checkbox"><label>${ingredientObject[key][1]}</label></checkboxcontainer>
				<checkboxcontainer><input type="checkbox" name="${key}" class="checkbox"><label>${ingredientObject[key][2]}</label></checkboxcontainer>
				<checkboxcontainer><input type="checkbox" name="${key}" class="checkbox"><label>${ingredientObject[key][3]}</label></checkboxcontainer>
				<checkboxcontainer><input type="checkbox" name="${key}" class="checkbox"><label>${ingredientObject[key][4]}</label></checkboxcontainer>
			</section>`;
        ingredientsOutput.appendChild(toStickInDom);

    }
}

// listens for the change in value of any number input box, sends information to the calculator to calculate final price in real time
document.addEventListener("input", function() {
    if(event.target.hasAttribute('placeholder') && event.target.value >= 0) {
        let ingredientType = event.target.parentNode.parentNode.parentNode.firstChild.innerHTML;
        let ingredientSubType = event.target.nextSibling.nextSibling.innerHTML;
        switch(event.target.parentNode.parentNode.id) {
            case "meats-chooser":
                SandwichMaker.Calc.quantityMultiplier(SandwichMaker.Meats.addMeat(ingredientSubType),
                    event.target.value, ingredientType, ingredientSubType);
                break;
            case "veggies-chooser":
                SandwichMaker.Calc.quantityMultiplier(SandwichMaker.Veggies.addVeggie(ingredientSubType),
                    event.target.value, ingredientType, ingredientSubType);
                break;
            case "cheese-chooser":
                SandwichMaker.Calc.quantityMultiplier(SandwichMaker.Cheese.addCheese(ingredientSubType),
                    event.target.value, ingredientType, ingredientSubType);
                break;
            case "condiments-chooser":
                SandwichMaker.Calc.quantityMultiplier(SandwichMaker.Condiments.addCondiment(ingredientSubType),
                    event.target.value, ingredientType, ingredientSubType);
                break;
            case "breads-chooser":
                SandwichMaker.Calc.quantityMultiplier(SandwichMaker.Bread.addBread(ingredientSubType),
                    event.target.value, ingredientType, ingredientSubType);
                break;
            default:
                console.log("error identifying ingredient");
        };
        adjustPriceDisplay();

    }

})

// uses the final price to update the documents display box
function adjustPriceDisplay() {
    let priceToAppend = document.createElement('p'),
        displayText = document.createElement('h3');
    priceToAppend.setAttribute("class", "price")
    priceOutput.innerHTML = "";
    displayText.innerHTML = `<h3>Final Sandwich Price:</h3>`;
    priceToAppend.innerHTML = `$${SandwichMaker.Calc.getPrice()}`;
    priceOutput.append(displayText, priceToAppend);
}

// Listens for a checkbox to be checked. If checked, inserts an ingredient quantity box next to the checked selection.
// If unchecked, removes the number input box
ingredientsOutput.addEventListener("change", function() {
    if(event.target.hasAttribute("name")) {
        if(event.target.checked) {
            let howMany = document.createElement('input');
            howMany.defaultValue = 0;
            howMany.setAttribute('type', "number");
            howMany.setAttribute('class', "howManyBox");
            howMany.setAttribute('placeholder', "Portions?")
            event.target.parentNode.insertBefore(howMany, event.target);
        } else if (event.target.previousSibling.hasAttribute('class') && event.target.previousSibling.classList.contains('howManyBox')) {
            let ingredientType = event.target.parentNode.parentNode.parentNode.firstChild.innerHTML;
            let ingredientSubType = event.target.nextSibling.innerHTML;
            SandwichMaker.Calc.quantityMultiplier(0, 0, ingredientType, ingredientSubType);
            event.target.previousSibling.remove();
            adjustPriceDisplay();
        }
    }
})

putSectionBoxesInDom();
adjustPriceDisplay();

