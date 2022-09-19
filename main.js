var listEmails = JSON.parse(localStorage.getItem("listEmails"));
var currentEmail = JSON.parse(localStorage.getItem("currentEmail"));

if (!listEmails && !currentEmail) {
  listEmails = [];
  currentEmail = "";
}

let emailInput = document.getElementById("e-mail");

document
  .getElementById("icon-send")
  .addEventListener("click", function (event) {
    event.preventDefault();

    if (!emailInput.value) {
      console.log("Insira o seu melhor e-mail.");
      document.getElementById("responsesend").innerHTML = "Insira o seu melhor e-mail.";
    } else {
      console.log(
        "Obrigado " + emailInput.value + " por assinar nossa newsletter!!"
      );
      document.getElementById("responsesend").innerHTML = "Obrigado " + emailInput.value + " por assinar nossa newsletter!!";

      currentEmail = emailInput.value;
      listEmails.push(currentEmail);
      
      localStorage.setItem("currentEmail", JSON.stringify(currentEmail));
      localStorage.setItem("listEmails", JSON.stringify(listEmails));

      emailInput.value = "";
    }
  });
