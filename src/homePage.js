function addClass(element, className) {
    return element.classList.add(className);
}

function createHomePage(){
    const body = document.querySelector('.body');

    let homeBodyContainer, homeContentContainer, homeImageContainer,
    homeImage, homeTextContainer, homeTextH1, homeTextP1, homeTextP2,
    homeTextP3;

    homeBodyContainer = document.createElement('div');
    addClass(homeBodyContainer, "bodyContainer");
    body.appendChild(homeBodyContainer);

    homeContentContainer = document.createElement('div');
    addClass(homeContentContainer, "homeContentContainer");
    homeBodyContainer.appendChild(homeContentContainer);

    homeImageContainer = document.createElement('div');
    addClass(homeImageContainer, "homeImageContainer");
    homeContentContainer.appendChild(homeImageContainer);

    homeImage = document.createElement('img');
    addClass(homeImage, "homeImage");
    homeImage.src = "../images/homePageCoffee.jpg";
    homeImageContainer.appendChild(homeImage);

    homeTextContainer = document.createElement('div');
    addClass(homeTextContainer, "homeTextContainer");
    homeContentContainer.appendChild(homeTextContainer);

    homeTextH1 = document.createElement('h1');
    addClass(homeTextH1, "homeTextH1");
    homeTextH1.textContent = "Welcome To Our Little Cafe!"
    homeTextContainer.appendChild(homeTextH1);

    homeTextP1 = document.createElement('p');
    addClass(homeTextP1, "homeTextP1");
    homeTextP1.textContent = "Tucked away downtown, you'll find our wonderful Cafe. Filled with a variety of yummy treats and freshly roasted coffee, anyone will find what they are looking for."
    homeTextContainer.appendChild(homeTextP1);

    homeTextP2 = document.createElement('p');
    addClass(homeTextP2, "homeTextP2");
    homeTextP2.textContent = "Let’s start with the treats. Perfectly flaky croissants, indulgent pain au chocolat, seasonal fruit danishes and a rotating selection of flavoured eclairs. Other must-haves include matcha croissants, kumara sourdough, cream buns and flawless French baguettes. We’re drooling just thinking about it."
    homeTextContainer.appendChild(homeTextP2);

    homeTextP3 = document.createElement('p');
    addClass(homeTextP3, "homeTextP3");
    homeTextP3.textContent = "Open MON-FRI 7am- 5pm"
    homeTextContainer.appendChild(homeTextP3);

}

export {createHomePage};