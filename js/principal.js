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
        imcPaciente.textContent = imc.toFixed(2);
    } else{
        imcPaciente.textContent = "Valor de Peso ou Altura inválido!";
        paciente.classList.add("paciente-invalido")
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);


});



