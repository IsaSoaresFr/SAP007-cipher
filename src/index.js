import cipher from './cipher.js';

const bottomEnc = document.getElementById("botaoCifrar");

function textEncrypt() {

let oFfset = Number(document.getElementById("offset").value);
let textValue = document.getElementById("CifrarDecifrar").value;
const encryptingText = cipher.encode(oFfset, textValue);
document.getElementById("resultEncDec").innerHTML = encryptingText;
}
bottomEnc.addEventListener('click', textEncrypt)




const bottomDec = document.getElementById("botaoDecifrar");

function textDecrypt() {

let oFfset = Number(document.getElementById("offset").value);
let textValue = document.getElementById("CifrarDecifrar").value;
const decryptText = cipher.decode(oFfset, textValue);
document.getElementById("resultEncDec").innerHTML = decryptText;
}
bottomDec.addEventListener('click', textDecrypt)




console.log(cipher);

