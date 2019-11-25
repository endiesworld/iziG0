import './scss/style.scss';
import './css/izicss.css';
import { Mobile } from './js/mobileView'  ;
const header = () => {
    let element = document.querySelector("nav") ;
    let text = window.innerWidth ;
    return element.insertAdjacentHTML("beforebegin", `<div> the width of the browser is ${text} </div>` ) ;
}

const laodAView = () =>{
   //if(window.innerWidth <1200) {
       const view = new mobile(window.innerWidth) ;
       view.addCollapse() ;
       view.addEventListenerToNavBar();
   //}
}
header() ;
//laodAView();