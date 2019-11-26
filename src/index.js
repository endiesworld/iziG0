import './scss/style.scss';
import './css/izicss.css';
import { header, showElement } from './js/mobileView'


const screeWidth = () =>{
    return window.innerWidth ;
  }
  const reLoadPage = () => {
    header(window.innerWidth);
}
const eventListenerRegister = () => {
    let element = document.querySelector(".navbarButton");
    element.addEventListener("click", showElement);
    window.addEventListener("resize", reLoadPage);
}
reLoadPage() ;
eventListenerRegister() ;
