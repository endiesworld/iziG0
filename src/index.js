import './scss/style.scss';
import './css/izicss.css';
import { header, showElement } from './js/mobileView'

const reLoadPage = () => {
    header();
}
const eventListenerRegister = () => {
    let element = document.querySelector(".navbarButton");
    element.addEventListener("click", showElement);
    window.addEventListener("resize", reLoadPage);
}
header(window.innerWidth) ;
eventListenerRegister() ;
