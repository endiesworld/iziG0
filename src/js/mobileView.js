
export class Mobile {
    constructor (screenSize){
        this.screenSize = screenSize ;
    }

 addCollapse () {
   let element = document.getElementById("navbarSupportedContent") ;
   element.classList.add("collapse") ; 
}

 addEventListenerToNavBar (){
    let element = document.getElementById("collapseButton") ;
    element.addEventListener("click", event => {
        document.getElementsByClassName("collapse").style.width = "250px" ;
    }) ;
}

 

}