function addClass(element, className) {
    return element.classList.add(className);
}

function createPageLayout() {
    const content = document.getElementById('content');



    let header, headerImgCont, headerImg, headerTextCont, headerName, btnContainer, btnHome, btnMenu, btnAbout, 
    body, footer, footerLink;

    header = document.createElement('div');
    addClass(header, "header");
    content.appendChild(header);

    headerImgCont = document.createElement('div');
    addClass(headerImgCont, "headerImgCont");
    header.appendChild(headerImgCont);

    headerImg = document.createElement('img');
    addClass(headerImg, "headerImg");
    headerImg.src = "../images/headerImage.jpg";
    headerImgCont.appendChild(headerImg);

    headerTextCont = document.createElement('div');
    addClass(headerTextCont, "headerTextCont");
    header.appendChild(headerTextCont);

    headerName = document.createElement('p');
    addClass(headerName, "headerName");
    headerName.textContent = "East Cafe";
    headerTextCont.appendChild(headerName);

    btnContainer = document.createElement('div');
    addClass(btnContainer, "btnContainer");
    headerTextCont.appendChild(btnContainer);

    btnHome = document.createElement('btn');
    btnMenu = document.createElement('btn');
    btnAbout = document.createElement('btn');
    addClass(btnHome, "btnHome");
    addClass(btnMenu, "btnMenu");
    addClass(btnAbout, "btnAbout");
    btnHome.innerHTML = "Home";
    btnMenu.innerHTML = "Menu";
    btnAbout.innerHTML = "About";
    btnContainer.appendChild(btnHome);
    btnContainer.appendChild(btnMenu);
    btnContainer.appendChild(btnAbout);
    
    body = document.createElement('div');
    addClass(body, "body");
    content.appendChild(body);

    footer = document.createElement('div');
    addClass(footer, "footer");
    content.appendChild(footer);

    footerLink = document.createElement('a');
    footerLink.textContent = "Created by Mikhail Y.";
    footerLink.href = "https://github.com/mikhailYu";
    footerLink.target = "_blank";
    footer.appendChild(footerLink);
}

export  {createPageLayout};