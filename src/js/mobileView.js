


export const showElement = () => {
    let element = document.querySelector(".navbarResponsive");
    element.style.display = "block" ;
    element.classList.remove = ("collapse" , "navbar-collapse" );
    //element.classList.add = ("sidepanel") ;
}

export const hideNavBarElement = () => {
    let element = document.querySelector(".navbarResponsive");
    element.style.display = "none" ;
    element.classList.remove = ("collapse" , "navbar-collapse" );
}