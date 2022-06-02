import _ from 'lodash';

import {createPageLayout} from "./pageLayout";
import {createHomePage} from "./homePage";
import {createMenuPage} from "./menuPage";
import {createAboutPage} from "./aboutPage";


createPageLayout();
createHomePage();
let btnHome = document.querySelector(".btnHome"),
btnMenu = document.querySelector(".btnMenu"),
btnAbout = document.querySelector(".btnAbout"),
bodyContainer;



btnHome.addEventListener("click", homeSelect);
btnMenu.addEventListener("click", menuSelect);
btnAbout.addEventListener("click", aboutSelect);

function removeBody(){
    bodyContainer = document.querySelector(".bodyContainer");
    bodyContainer.remove();
}

function homeSelect(){
    removeBody();
    createHomePage();
}

function menuSelect(){
    removeBody();
    createMenuPage();
}

function aboutSelect(){
    removeBody();
    createAboutPage();
}