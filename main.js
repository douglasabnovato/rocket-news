var listaEmails = [];
var currentEmail = "";

let listaEmailsString = localStorage.getItem('listaEmails');
listaEmails = (JSON.parse(listaEmailsString));

let emailInput = document.getElementById("e-mail");

document
  .getElementById("icon-send")
  .addEventListener("click", function (event) {
    event.preventDefault();

    if (!emailInput.value) {
      console.log("Insira o seu melhor e-mail.");
    } else {
      console.log(
        "Obrigado " + emailInput.value + " por assinar nossa newsletter!!"
      );

      currentEmail = emailInput.value;
      localStorage.setItem("currentEmail", JSON.stringify(emailInput.value));
     
      emailInput.value = "";

      listaEmails.push(currentEmail)
      localStorage.setItem("listaEmails", JSON.stringify(listaEmails));
    }

    console.log("LocalStorage listaEmails in", listaEmails);
    console.log("LocalStorage currentEmail in", currentEmail);
  });
