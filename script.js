const myForm = document.querySelector("#myForm");
myForm.noValidate = true;

myForm.addEventListener('submit', validateForm);

function validateForm(e) {

    const form = e.target;
  
    if (form.checkValidity()) {
  
      // form is valid - make further checks
  
    }
    else {
  
      // form is invalid - cancel submit
      e.preventDefault();
  
    }
  
  };