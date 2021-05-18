
 jQuery(document).ready(function() {
     // Exibe ou oculta o botão
     jQuery(window).scroll(function() {
         if (jQuery(this).scrollTop() > 400) {
             jQuery("#botao-topo").fadeIn(500);
         } else {
             jQuery("#botao-topo").fadeOut(500);
         }
    });
    
     // Faz animação para subir
     jQuery("#botao-topo").click(function(event) {
         event.preventDefault();
         jQuery('html, body').animate({scrollTop: 0}, 1000);
   })
});


function VerificaCPF() {
    strCpf = document.getElementById('cpf').value;
    
    var soma = 0;
    var resto;
    
    
    if (strCpf == "00000000000" || strCpf.length != 11) {
        alert("CPF Inválido");
        return false;
    }
    
    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }
    
    resto = soma % 11;
    
    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    
    if (resto != parseInt(strCpf.substring(9, 10))) {
        alert("CPF Válido");
        return false;
    }
    
    soma = 0;
    
    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }
    
    resto = soma % 11;
    
    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    
    if (resto != parseInt(strCpf.substring(10, 11))) {
        alert("CPF Inválido");
        
        return false;
    }
    alert("CPF VÁLIDO");
    return true;
    }
  
 


    