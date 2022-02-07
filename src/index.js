import cipher from './cipher.js';

document.getElementById("botaoCifrar").addEventListener("click", textEncrypt);

function textEncrypt () {

let textValue = document.getElementById("cifrarDecifrar").value;
let oFfset = document.getElementById("offset").value;
let converter = Number(oFfset);
let resposta = document.getElementById("resultEncDec");
let valorCod = cipher.encode(converter, textValue);

resposta.innerHTML = valorCod;

}


document.getElementById("botaoDecifrar").addEventListener("click",textDecrypt );

function textDecrypt () {

let textValue = document.getElementById("cifrarDecifrar").value;
let oFfset = document.getElementById("offset").value;
let converter = Number(oFfset);
let resposta = document.getElementById("resultEncDec");
let valorDec = cipher.encode(converter, textValue);

resposta.innerText = valorDec;

}