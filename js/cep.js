const cep = document.querySelector('#cep');
const cidade  = document.querySelector('#cidade')
const uf  = document.querySelector('#uf')
const rua  = document.querySelector('#rua')
const numero  = document.querySelector('#numero')


cep.addEventListener('focusout', () => {
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;

    fetch(url)
    .then(response => response.json())
    .then(endereco => {
        cidade.value = endereco.localidade;
        uf.value = endereco.uf;
        rua.value = endereco.logradouro;
        
    })
})