const form = document.getElementsByTagName("form")[0];

const inputs = form.querySelectorAll('input:not([type="submit"])');

const regEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const errors = {
  'empty': "Field cannot be empty",

  'Email': {
    Invalid: "Must be a valid email address.",
  },
  'Password': {
    Invalid: "Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.",
  },
};

function verifyField(e) {
  const target = e.target;

  let error = target.nextElementSibling;
  while (target) {
    if (error.classList.contains("error")) {
      third = error;
      break;
    }
    error = error.nextElementSibling;
  }

  if(target.validity.valid){
   error.textContent = '';
   target.classList.remove('invalid');
  } else {
   showError(target, error)
  }
}

function showError(target, error){
 target.classList.add('invalid');


 if(target.id === 'password'){
  error.textContent = errors.Password.Invalid;
 }

  if (target.hasAttribute('required') && target.validity.valueMissing) {
   error.textContent = errors.empty;
   target.classList.add('empty')
 } else if(target.validity.typeMismatch){
  if(target.id === 'email'){
   error.textContent = errors.Email.Invalid;
  }
  target.classList.remove('empty');
 }

}

inputs.forEach((e) => e.addEventListener("focusout", verifyField));
inputs.forEach((e) => e.addEventListener("input", verifyField));
