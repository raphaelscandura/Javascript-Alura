console.log("Arquivo externo de JS carregado com sucesso");

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i]

    var pesoPaciente = paciente.querySelector(".info-peso");
    var peso = pesoPaciente.textContent;

    var alturaPaciente = paciente.querySelector(".info-altura");
    var altura = alturaPaciente.textContent;

    var imcPaciente = paciente.querySelector(".info-imc");

    var alturaValida = validaAltura(altura);
    var pesoValido = validaPeso(peso);

    if(alturaValida && pesoValido){
        var imc = peso / (altura * altura);
        imcPaciente.textContent = imc.toFixed(2);
    } else{
        imcPaciente.textContent = "Valor de Peso ou Altura inválido!";
        paciente.classList.add("paciente-invalido");
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true;
    } else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3){
        return true;
    } else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso/(altura* altura);

    return imc.toFixed(2);
}




