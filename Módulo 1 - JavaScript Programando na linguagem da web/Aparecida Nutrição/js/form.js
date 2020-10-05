var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");

    var paciente = pegarPacienteDoForm(form);

    var erros = validaPaciente(paciente);

    var alerta = document.querySelector(".mensagens-erro");

    if(erros.length > 0 ){
        exibirMensagensDeErro(erros);
        return;
    } else{
        alerta.textContent = "Paciente adicionado com sucesso!";
        alerta.classList.add("paciente-valido-form");
    }

    adicionarNaTabela(paciente);

    form.reset();

});

function adicionarNaTabela(paciente){
    var pacienteTr = criarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}


function pegarPacienteDoForm(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function validaPaciente(paciente){

    var erro = [];

    if(paciente.nome.length == 0){
        erro.push("O nome do paciente não pode estar em branco");
    }

    if(paciente.gordura.length == 0){
        erro.push("A porcentagem de gordura do paciente não pode estar em branco");
    }

    if(paciente.altura.length == 0){
        erro.push("A altura do paciente não pode estar em branco");
    }

    if(paciente.peso.length == 0){
        erro.push("O peso do paciente não pode estar em branco");
    }

    if(!validaPeso(paciente.peso)){
        erro.push("Peso inválido, por favor, revise os dados antes de submete-los!");
    } 
    if(!validaAltura(paciente.altura)){
        erro.push("Altura inválida, por favor, revise os dados antes de submete-los!");
    }

    return erro;
}

function exibirMensagensDeErro(erros){
    var alerta = document.querySelector(".mensagens-erro");
    alerta.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        li.classList.add("paciente-invalido-form");
        alerta.appendChild(li);
    })
    return;
}   

function criarTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(criarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criarTd(paciente.peso, "infopeso"));
    pacienteTr.appendChild(criarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criarTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function criarTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
