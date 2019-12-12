
let getQuerySelectorElement = (element) => {
    return document.querySelector(element);
}

export const showElement = () => {
    let element = getQuerySelectorElement(".navbarResponsive");
    element.classList.remove("collapse", "navbar-collapse");
    let closeButton = getQuerySelectorElement(".closebtn") ;
    element.style.width = "50%";
    closeButton.style.display = "block" ;
}

export const hideNavBarElement = () => {
    let element = getQuerySelectorElement("#navbarSupportedContent");
    element.classList.remove("collapse", "navbar-collapse");
    let navbarImages = getQuerySelectorElement(".appStoreImages");
    navbarImages.style.display = "none";
    if (!element.classList.contains("navbarResponsive")) {
    element.className +=" navbarResponsive";
    }  
}

export const closeLinks = ()=> {
    let element = getQuerySelectorElement(".navbarResponsive");
    //element.style.display = "none";
    element.style.width = "0";
}