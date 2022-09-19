let emailInput = document.getElementById("e-mail") 

document.getElementById("icon-send").addEventListener("click", function (event) {
  event.preventDefault();  
  if(!emailInput.value){
    console.log("Insira o seu melhor e-mail.");
  } else {
    console.log("Obrigado " + emailInput.value + " por assinar nossa newsletter!!");
  }
});
