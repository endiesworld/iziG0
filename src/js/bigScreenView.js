export const addBootstrapNavElement = () => {
  let element = document.querySelector("#navbarSupportedContent");
  let navbarImages = document.querySelector(".appStoreImages");
  let closeBottun = document.querySelector(".closebtn");
  navbarImages.style.display = "block";
  closeBottun.style.display = "none";
  element.classList.remove("navbarResponsive");
  if (!element.classList.contains("collapse")) {
    element.className += " collapse navbar-collapse"; // To ensure that the normal attains normal bootstrap navbar behavior
  }
  //element.style.display = "block";
}