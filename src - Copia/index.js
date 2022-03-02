import cipher from './cipher.js';


const btnReset = document.querySelector('#refresh')

btnReset.addEventListener("click", () => {
    location.reload()
})


document.getElementById("botao-cifrar").addEventListener("click", textEncrypt);

function textEncrypt() {

    let textValue = document.getElementById("cifrar-decifrar").value.toUpperCase();
    let oFfset = document.getElementById("offset").value;
    let converter = Number(oFfset);
    let resposta = document.getElementById("result");
    let valorCod = cipher.encode(converter, textValue);

    resposta.innerHTML = valorCod;
}



document.getElementById("botao-decifrar").addEventListener("click", textDecrypt);

function textDecrypt() {

    let textValue = document.getElementById("cifrar-decifrar").value.toUpperCase();
    let oFfset = document.getElementById("offset").value;
    let converter = Number(oFfset);
    let resposta = document.getElementById("result");
    let valorDec = cipher.decode(converter, textValue);

    resposta.innerText = valorDec;
}



