

import iPhoneLogo from "../images/mobileApple2.png";
import androidLogo from "../images/mobileGoogle2.png";

let getQuerySelectorElement = (element) => {
    return document.querySelector(element);
}

export const showElement = () => {
    let element = getQuerySelectorElement("#navbarSupportedContent");
    element.classList.remove("collapse", "navbar-collapse");
    //element.style.width = "50%";
    // element.style.display = "block" ;
    //element.classList.remove("navbarResponsive" );
    //element.className+= " sidepanel" ;
}

export const hideNavBarElement = () => {
    let element = getQuerySelectorElement("#navbarSupportedContent");
    let navbarImages = getQuerySelectorElement(".appStoreImages");
    navbarImages.style.display = "none";
    //element.style.width = "0";
    element.classList.remove("collapse", "navbar-collapse");
}