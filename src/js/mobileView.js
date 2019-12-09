import iPhoneLogo from "../images/mobileApple2.png" ;
import androidLogo from "../images/mobileGoogle2.png" ;

let getQuerySelectorElement =(element) => {
    return document.querySelector(element) ;
} 

export const showElement = () => {
    let element = getQuerySelectorElement(".navbarResponsive");
    element.style.display = "block" ;
    element.classList.remove("collapse" );
    //element.classList.add = ("sidepanel") ;
}

export const hideNavBarElement = () => {
    let element = getQuerySelectorElement(".navbarResponsive");
    let navbarImages = getQuerySelectorElement(".appStoreImages") ;
    navbarImages.style.display = "none" ;
    element.style.display = "none" ;
    element.classList.remove = ("collapse" , "navbar-collapse" );
}

