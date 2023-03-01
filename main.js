const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){ 
    let formEValido = false;
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const menssagemSucesso = 'Montante é de: ${valorDeposito.value} para o Cliente - ${nomeBeneficiario.value} Conta - ${numeroContaBeneficiario.value}'

    formEValido = validaNome(nomeBeneficiario.value)
    if(formEValido){
        alert(menssagemSucesso)

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value ='';
        valorDeposito.value = '';
    }else{
        alert("Nome invalido")
    }
})

console.log(form)