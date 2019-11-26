export const header = (width) => {
    let element = document.querySelector(".intro") ;
    element.innerHTML = `Welcome to iziGo.home Page, your window's width is ${width}`;

}


export const showElement = () => {
    let element = document.querySelector(".navbarResponsive");
    element.style.display = "block" ;
}
