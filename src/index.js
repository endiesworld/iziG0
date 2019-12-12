import './scss/style.scss';
import './css/izicss.css';
import { showElement, hideNavBarElement, addDownloadImages, closeLinks  } from './js/mobileView'
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
        //addDownloadImages() ;
    }
    else {
        addBootstrapNavElement() ;        
    }
}
const eventListenerRegister = () => {
    let navBarCollapse = document.querySelector(".navbarButton");
    let closeLinkItems = document.querySelector(".closebtn") ;
    navBarCollapse.addEventListener("click", showElement);
    closeLinkItems.addEventListener("click", closeLinks) ;
    window.addEventListener("resize", reLoadPage);
}
reLoadPage() ;
eventListenerRegister() ;
