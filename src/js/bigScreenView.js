export const addBootstrapNavElement = () => {
  let element = document.querySelector("#navbarSupportedContent");
  if (!element.classList.contains("collapse")) {
    element.className += " collapse navbar-collapse"; // To ensure that the normal attains normal bootstrap navbar behavior
  }
  //element.style.display = "block";
}