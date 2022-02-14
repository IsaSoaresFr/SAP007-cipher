import cipher from './cipher.js';

const btnReset = document.querySelector('#refresh')

btnReset.addEventListener("click", () =>{
 location.reload()
})


document.getElementById("botaoCifrar").addEventListener("click", textEncrypt);

function textEncrypt () {

let textValue = document.getElementById("cifrarDecifrar").value.toUpperCase();
let oFfset = document.getElementById("offset").value;
let converter = Number(oFfset);
let resposta = document.getElementById("resultEncDec");
let valorCod = cipher.encode(converter, textValue);

resposta.innerHTML = valorCod;
}



document.getElementById("botaoDecifrar").addEventListener("click",textDecrypt );

function textDecrypt () {

let textValue = document.getElementById("cifrarDecifrar").value.toUpperCase();
let oFfset = document.getElementById("offset").value;
let converter = Number(oFfset);
let resposta = document.getElementById("resultEncDec");
let valorDec = cipher.decode(converter, textValue);

resposta.innerText = valorDec;
}


