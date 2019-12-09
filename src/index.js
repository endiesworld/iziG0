import './scss/style.scss';
import './css/izicss.css';
import {showElement, hideNavBarElement  } from './js/mobileView'
import {addBootstrapNavElement} from './js/bigScreenView'

 const header = (width) => {
    let element = document.querySelector(".intro") ;
    element.innerHTML = `Welcome to iziGo.home Page, your window's width is ${width}`;

}
  const reLoadPage = () => {
    let screen =  window.innerWidth ;
    header(screen);
    if (screen <1200) {
        hideNavBarElement() ;
    }
    else {
        addBootstrapNavElement() ;        
    }
}
const eventListenerRegister = () => {
    let element = document.querySelector(".navbarButton");
    element.addEventListener("click", showElement);
    window.addEventListener("resize", reLoadPage);
}
reLoadPage() ;
eventListenerRegister() ;
