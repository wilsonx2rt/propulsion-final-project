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