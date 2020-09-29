console.log("Arquivo externo de JS carregado com sucesso");

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiroPaciente");

var pesoPaciente = paciente.querySelector(".info-peso");
var peso = pesoPaciente.textContent;

var alturaPaciente = paciente.querySelector(".info-altura");
var altura = alturaPaciente.textContent;

var imcPaciente = paciente.querySelector(".info-imc");

var alturaValida = true;
var pesoValido = true;

if(peso <= 0 || peso >= 1000){
    pesoValido = false;
}

if(altura <= 0 || altura >= 5){
    alturaValida = false;
}

if(alturaValida && pesoValido){
    var imc = peso / (altura * altura);
    imcPaciente.textContent = imc;
} else{
    imcPaciente.textContent = "Valor de Peso ou Altura inválido!"
}
