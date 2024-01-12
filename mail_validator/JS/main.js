const resultElement = document.querySelector("#js_result");
const mailInput = document.querySelector("#mail-input");
const mailButton = document.querySelector("#mail-button");
const logForm = document.querySelector("form");
const mailValidationElement = document.querySelector("#validation-mail");

mailValidationElement.classList.add("d-none");

mailButton.addEventListener("click", function () {
  const mails = ["bellazio@mail.com", "wewe@mail.com", "jayjay@mail.com", "jonny@mail.com", "cuccuruccu@mail.com", "esaaaaaatto@mail.com"];
  let mailCheck;
  const mailValue = mailInput.value.trim().toLowerCase();

  //   # METODO MIGLIORE
  //   mailCheck = mails.includes(mailValue);

  //   # METODO RICHIESTO OTTIMIZZATO
  //   for (let i = 0; i < mails.length; i++) {
  //     const mail = mails[i];
  //     console.log(i);
  //     if (mail == mailValue) {
  //       mailCheck = true;
  //       break;
  //     }
  //   }

  //   # METODO RICHIESTO
  for (let i = 0; i < mails.length; i++) {
    const mail = mails[i];
    if (mail == mailValue) {
      mailCheck = true;
    }
  }

  if (mailCheck) {
    logForm.classList.add("d-none");
    resultElement.innerHTML = "Accesso Consentito";
  } else {
    mailInput.classList.add("is-invalid");
    mailValidationElement.classList.remove("d-none");
  }
});
