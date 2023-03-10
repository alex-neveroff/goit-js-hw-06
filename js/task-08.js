const form = document.querySelector(".login-form");
form.addEventListener("submit", touchSubmit);

function touchSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Усі поля повинні бути заповнені");
  }

  const loginForm = { email: email.value, password: password.value };
  console.log(loginForm);
  event.currentTarget.reset();
}
