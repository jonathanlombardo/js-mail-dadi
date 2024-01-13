const resultElement = document.querySelector("#js_result");
const mailInput = document.querySelector("#mail-input");
const pwdInput = document.querySelector("#pwd-input");
const logButton = document.querySelector("#log-button");
const resetButton = document.querySelector("#reset-button");
const logForm = document.querySelector("form");
const mailValidationElement = document.querySelector("#validation-mail");
const pwdValidationElement = document.querySelector("#validation-pwd");
const pwdShowElement = document.querySelector("#show-pwd");
const pwdHideElement = document.querySelector("#hide-pwd");
const pwdViewElement = document.querySelector("#view-pwd");

let pwdShow = false;
let userName;

mailValidationElement.classList.add("d-none");
pwdValidationElement.classList.add("d-none");
mailInput.value = "";

mailInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    logButton.click();
  }
});

pwdInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    logButton.click();
  }
});

pwdViewElement.addEventListener("click", function () {
  if (pwdShow) {
    pwdInput.type = "password";
    pwdHideElement.classList.add("d-none");
    pwdShowElement.classList.remove("d-none");
    pwdShow = false;
  } else {
    pwdInput.type = "text";
    pwdHideElement.classList.remove("d-none");
    pwdShowElement.classList.add("d-none");
    pwdShow = true;
  }
});

logButton.addEventListener("click", function () {
  const credentials = [
    ["jonny@mail.com", "jonny", "Jonathan"],
    ["pincopallo@mail.com", "pincopallo", "PincoPallino"],
    ["ziopeppo@mail.com", "ziopeppo", "ZioPeppo"],
    ["carolina@mail.com", "carolina", "Carolina"],
    ["aisha@mail.com", "aisha", "Aisha"],
    ["leppolpette@mail.com", "leppolpette", "ApplePette"],
    ["okbasta@mail.com", "okbasta", "Stop"],
  ];

  let isValid = false;
  let mailCheck = false;

  const mailValue = mailInput.value.trim().toLowerCase();
  const pwdValue = pwdInput.value;

  for (let i = 0; i < credentials.length; i++) {
    // console.log(i);
    const mail = credentials[i][0];
    const pwd = credentials[i][1];

    if (mail == mailValue && pwd == pwdValue) {
      isValid = true;
      userName = credentials[i][2];
      break;
    } else if (mail == mailValue) {
      mailCheck = true;
      break;
    }
  }

  if (isValid) {
    // logForm.classList.add("d-none");
    // resultElement.innerHTML = "Accesso Consentito";
    sessionStorage.setItem("userName", userName);
    document.location.href = "./dice_game/dicegame.html";
  } else if (mailCheck) {
    mailInput.classList.remove("is-invalid");
    mailValidationElement.classList.add("d-none");

    pwdInput.classList.add("is-invalid");
    pwdValidationElement.classList.remove("d-none");
    pwdInput.value = "";
  } else {
    pwdInput.classList.remove("is-invalid");
    pwdValidationElement.classList.add("d-none");
    pwdInput.value = "";

    mailInput.classList.add("is-invalid");
    mailValidationElement.classList.remove("d-none");
  }
});

pwdInput.addEventListener("input", function () {
  pwdInput.classList.remove("is-invalid");
  pwdValidationElement.classList.add("d-none");
});

mailInput.addEventListener("input", function () {
  mailInput.classList.remove("is-invalid");
  mailValidationElement.classList.add("d-none");
});

resetButton.addEventListener("click", function () {
  mailInput.classList.remove("is-invalid");
  mailValidationElement.classList.add("d-none");
  pwdInput.classList.remove("is-invalid");
  pwdValidationElement.classList.add("d-none");

  pwdInput.value = "";
  mailInput.value = "";
});
