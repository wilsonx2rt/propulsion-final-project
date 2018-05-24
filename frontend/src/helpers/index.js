export const showValidationMessage = () => {
  const validationElement = document.querySelectorAll('.generic-validation-message')[0];
  validationElement.classList.remove('hidden-element');
}

export const hideValidationMessage = () => {
  const validationElement = document.querySelectorAll('.generic-validation-message')[0];
  validationElement.classList.add('hidden-element');
}

export const hideNavBar = () => {
  const navBar = document.querySelectorAll('.nav-bar')[0];
  navBar.classList.add('hidden-element');
}

export const showNavBar = () => {
  const navBar = document.querySelectorAll('.nav-bar')[0];
  navBar.classList.remove('hidden-element');
}

export const highlightTableRow = (e) => {
  // console.log(e.target.parentNode.childNodes);
  e.target.parentNode.childNodes.forEach(tdElement => {
    tdElement.classList.add('generic-feature-list__table__td--highlighted');
  })
}

export const unhighlightTableRow = (e) => {
  e.target.parentNode.childNodes.forEach(tdElement => {
    tdElement.classList.remove('generic-feature-list__table__td--highlighted');
  })
}