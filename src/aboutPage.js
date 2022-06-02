function addClass(element, className) {
    return element.classList.add(className);
}

function createAboutPage(){
    const body = document.querySelector('.body');

    let aboutBodyContainer, aboutContent, aboutTextContainer, aboutTopText,
    aboutH1, aboutTopP1, aboutTopP2, aboutH2,
    aboutBottomText, aboutImageContainer, aboutImage;

    aboutBodyContainer = document.createElement('div');
    addClass(aboutBodyContainer, "bodyContainer");
    body.appendChild(aboutBodyContainer);

    aboutContent = document.createElement('div');
    addClass(aboutContent, "aboutContent");
    aboutBodyContainer.appendChild(aboutContent);

    aboutTextContainer = document.createElement('div');
    addClass(aboutTextContainer, "aboutTextContainer");
    aboutContent.appendChild(aboutTextContainer);

    aboutTopText = document.createElement('div');
    addClass(aboutTopText, "aboutTopText");
    aboutTextContainer.appendChild(aboutTopText);

    aboutH1 = document.createElement('h1');
    addClass(aboutH1, "aboutH1");
    aboutH1.textContent= "ABOUT"
    aboutTopText.appendChild(aboutH1);

    aboutTopP1 = document.createElement('p');
    addClass(aboutTopP1, "aboutTopP1");
    aboutTopP1.textContent= "Established in 2004, our cafe is home to the best treats in the city. Our diverse crew comes from every side of the globe, bringing a little flavour from a variety of cultures. Check out our menu or come in for a taste of magic. Try our unique blends of coffee or have a filling lunch. Our friendly staff will make every visit an experience."
    aboutTopText.appendChild(aboutTopP1);

    aboutTopP2 = document.createElement('p');
    addClass(aboutTopP2, "aboutTopP2");
    aboutTopP2.textContent= "This is a demo site. All infomation is fictional, including the contacts. View the readMe for the full list of image credits used on this site. Feedback is greatly appreciated."
    aboutTopText.appendChild(aboutTopP2);

    aboutBottomText = document.createElement('div');
    addClass(aboutBottomText, "aboutBottomText");
    aboutTextContainer.appendChild(aboutBottomText);

    aboutH2 = document.createElement('h2');
    addClass(aboutH2, "aboutH2");
    aboutH2.textContent= "CONTACT US:"
    aboutBottomText.appendChild(aboutH2);

    aboutImageContainer = document.createElement('div');
    addClass(aboutImageContainer, "aboutImageContainer");
    aboutContent.appendChild(aboutImageContainer);

    aboutImage = document.createElement('img');
    addClass(aboutImage, "aboutImage");
    aboutImage.src = "/images/aboutPic.jpg";
    aboutImageContainer.appendChild(aboutImage);

    function aboutContact(text){
        const aboutContact = document.createElement('p');

        aboutContact.textContent = text;
        aboutBottomText.appendChild(aboutContact);
    }

    const aboutContact1 = new aboutContact("Email: eastcafecontact@email.com");
    const aboutContact2 = new aboutContact("Location: 71a East Street, Downtown");
    const aboutContact3 = new aboutContact("Phone: 123-456-789");
    const aboutContact4 = new aboutContact("Open Mon- Fri 7am- 5pm");
}

export {createAboutPage};