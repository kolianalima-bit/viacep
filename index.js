console.log("JavaScript carregou!");
function buscarEndereco(cep) {
    if (validaCEP(cep)) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(resposta => resposta.json())
            .then(json => {
                if (json.erro) {
                    alert("CEP invalido");
                    return;
                }
                let logradouro = document.querySelector("#logradouro");
                let bairro = document.querySelector("#bairro");
                let localidade = document.querySelector("#localidade");
                let estado = document.querySelector("#estado");
                logradouro.value = json.logradouro;
                bairro.value = json.bairro;
                localidade.value = json.localidade;
                estado.value = json.estado;

                console.log(json);

            })
            .catch(error => alert("CEP invalido"))
    }
}
/**
 *  @param {String} cep
 * @returns
 */
function validaCEP(cep) {
    return cep.length === 8;
}

