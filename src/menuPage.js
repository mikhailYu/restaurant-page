function addClass(element, className) {
    return element.classList.add(className);
}

function createMenuPage(){
    const body = document.querySelector('.body');

    let menuItemList, menuBodyContainer;

    menuBodyContainer = document.createElement('div');
    addClass(menuBodyContainer, "bodyContainer");
    body.appendChild(menuBodyContainer);

    menuItemList = document.createElement('div');
    addClass(menuItemList, "menuItemList");
    menuBodyContainer.appendChild(menuItemList);

    const ItemBox = function(imgSrc, itemName, descText, price, menuImageClass){

        let menuItemContainer, menuImageContainer, menuImageDiv, menuImage,
        menuTextContainer, menuItemName, menuDesc, menuPrice;

        menuItemContainer = document.createElement('div');
        menuImageContainer = document.createElement('div');
        menuImageDiv = document.createElement('div');
        menuImage = document.createElement('img');
        menuTextContainer = document.createElement('div');
        menuItemName = document.createElement('h1');
        menuDesc = document.createElement('p');
        menuPrice = document.createElement('p');

        addClass(menuItemContainer, "menuItemContainer");
        addClass(menuImageDiv, "menuImageDiv");
        addClass(menuImageContainer, "menuImageContainer");
        addClass(menuImage, menuImageClass);
        addClass(menuTextContainer, "menuTextContainer");
        addClass(menuItemName, "menuItemName");
        addClass(menuDesc, "menuDesc");
        addClass(menuPrice, "menuPrice");

        menuImage.src = imgSrc;
        menuItemName.textContent = itemName;
        menuDesc.textContent = descText;
        menuPrice.textContent = price;

        menuItemList.appendChild(menuItemContainer);
        menuItemContainer.appendChild(menuImageContainer);
        menuImageContainer.appendChild(menuImageDiv);
        menuImageDiv.appendChild(menuImage);
        menuItemContainer.appendChild(menuTextContainer);
        menuTextContainer.appendChild(menuItemName);
        menuTextContainer.appendChild(menuDesc);
        menuTextContainer.appendChild(menuPrice);
    }
    
    const item1 = new ItemBox ("../dist/images/menuBlueBerryMuffins.jpg","Blueberry Muffins", "We make multiple batches a day so they are always nice and warm. You won't find anything else like this around. They go perfectly with our coffees.", "$5", "menuImage-1");
    const item2 = new ItemBox ("../dist/images/menuCoffee.jpg","Coffee", "Classic coffee. Just tell us what you need and we'll make it. Always freshly roasted and nicely grinded. Stop by before work or during lunch break. It is always a nice refresher. You'll be back for more.", "$5.50", "menuImage-2");
    const item3 = new ItemBox ("../dist/images/menuDoughnuts.jpg","Assorted Doughnuts ", "Doughnuts in a variety of flavours. Chocolate, vanilla, mint? We got you covered. Buy a pack of 5 to share with your friends... or not... we won't tell 😉. ",  "$3", "menuImage-3");
    const item4 = new ItemBox ("../dist/images/menuFrenchFries.jpg","French Fries", "Have them on the side or as a main meal. It doesn't matter, they're a staple in anyone's diet. These classic crispy fries will make your day. Ask about our variety of special sauces too. They'll have you craving for more. ",  "$4.50", "menuImage-4");
    const item5 = new ItemBox ("../dist/images/menuHazelChocMuffins.jpg","Hazelnut Choc Muffin", "Sent from heaven, these whopping 1700 Calorie treats will stop your heart and make your loved ones cry. Oops, I mean get one today! Don't be put off by the price, its worth every penny. The chocolate filling melts in your mouth as you wash it down with our coffee. We can super size this for an additional $5.",  "$25", "menuImage-5");
    const item6 = new ItemBox ("../dist/images/menuHotChoc.jpg","Hot Chocolate", "On your annual caffeine detox? Try our Hot Choccy instead. Sweet and smooth, you'll enjoy the taste and the texture. This goes very well with all of our foods and makes for a nice combo.",  "$6", "menuImage-6");
    const item7 = new ItemBox ("../dist/images/menuRaspChocMuffins.jpg","Raspberry Muffins", "A fine mix of raspberry and chocolate, these muffins with make your mouth water. Finely crafted by our top chef, there are a step above anything else on the menu. The frosting is *chef's kiss*.",  "$9", "menuImage-7");
    const item8 = new ItemBox ("../dist/images/menuSandwich.jpg","Sandwich", "Bread, magic, bread. The ingredients to our homemade sandwiches. Using only the finest ingredients, we create the perfect lunch time meal. Healthy and packed with nutrients, we pack these babies up with as much as 2 slices of bread can hold.",  "$10", "menuImage-8");
    const item9 = new ItemBox ("../dist/images/menuMysteryMeat.jpg","Mystery Meat", "Raw meat of a [REDACTED] specimen. We've been advised to disclose no further.",  "?", "menuImage-9");
}

export {createMenuPage};