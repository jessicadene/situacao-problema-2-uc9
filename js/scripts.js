/* Script do Menu */
/* Quando o usuário clica no botão, 
alterna entre ocultar e mostrar o conteúdo suspenso */

function menu() {
    document.getElementById("myDropdown").classList.toggle("show");
  }    
  // Fecha a lista suspensa se o usuário clicar fora dela  
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    let myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

/* Script do Login */ 
function enviar{
  var email = meuemail@email.com;
var senha = 1234;
let email = document.getElementById("emailid");
if (email.value != email){
  alert (Email Inválido!);
}
let password=documento.getElementById("passwordid");
if (senha.value !=senha){
  alert (senha Inválida);
}
}

 