const inputs = document.forms["userLogin"].querySelectorAll("input");
const patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,12}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.*-?]+)@([a-z\d-?]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$/,
};

function validate(inputElement, regex) {
  if (regex.test(inputElement.value)) {
    inputElement.className = "valid";
    inputElement.nextElementSibling.style.display = "none";
  } else {
    inputElement.className = "invalid";
    inputElement.nextElementSibling.style.display = "block";
  }
}

inputs.forEach((element) => {
  element.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.name]);
  });
});
