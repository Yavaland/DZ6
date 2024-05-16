const registrationForm = document.getElementById("registrationForm");
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");
const userInfoElement = document.getElementById("userInfo");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const gender = document.getElementById("gender").value;
  const terms = document.getElementById("terms").checked;

  if (username === "") {
    alert("Пожалуйста, введите имя пользователя");
    return;
  }

  if (password === "") {
    alert("Пожалуйста, введите пароль");
    return;
  }

  if (confirmPassword === "") {
    alert("Пожалуйста, подтвердите пароль");
    return;
  }

  if (password !== confirmPassword) {
    alert("Пароли не совпадают");
    return;
  }

  if (gender === "") {
    alert("Пожалуйста, выберите пол");
    return;
  }

  if (!terms) {
    alert("Пожалуйста, согласитесь с условиями");
    return;
  }

  const userData = {
    username: username,
    password: password,
    gender: gender,
  };

  const userInfoElement = document.getElementById("userInfo");
  if (!userInfoElement) {
    const userInfoElement = document.createElement("div");
    userInfoElement.id = "userInfo";
    userInfoElement.style.margin = "20px 0";
    registrationForm.appendChild(userInfoElement);
  }

  userInfoElement.innerHTML = `<h3>Введенные данные:</h3>
  <ul>
    <li>Имя пользователя: ${userData.username}</li>
    <li>Пароль: ${userData.password}</li>
    <li>Пол: ${userData.gender}</li>
  </ul>`;

  registrationForm.reset();

  const successMessage = document.getElementById("successMessage");
  successMessage.textContent = "Регистрация прошла успешно!";
  successMessage.style.display = "block";

  setTimeout(function () {
    successMessage.style.display = "none";
  }, 3000);
});

togglePassword.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  }
});
