var importarPacientes = document.querySelector("#importar-paciente");
importarPacientes.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.send();

    
        xhr.addEventListener("load", function(){
            var spanErro = document.querySelector(".paciente-invalido-form.invisivel");
            if(xhr.status == 200){
                spanErro.classList.add("invisivel");
                var resposta = xhr.responseText;
                var pacientes = JSON.parse(resposta);
                pacientes.forEach(function(paciente) {
                    adicionarNaTabela(paciente);
                });
            }else{                
                spanErro.classList.remove("invisivel");

            }     
        })
    

    })