const cipher = { //essa constante é um objeto, irá conter toda a função de Cifrar  Decifrar, será chamada no index.

  encode: function (offset, text) {
    let textoCriptado = " ";

  for(let i=0; i<text.length; i++){
    let criptado = text.charCodeAt(i);
  if(criptado >=65 && <= 90){
    textoCriptado += String.fromCharCode(((criptado - 65 + offset) %26 ) +65 );
  }
  else if (criptado == 32) {
    textoCriptado += text.charAt(i);
  }
  } 
  return textoCriptado; 
  },


  decode: function (offset, text) {
    let textoDescriptado = " ";

  for(let i=0; i<text.length; i++){
    let descriptado = text.charCodeAt(i);
  if(descriptado >= 65 && <= 90){
    textoDescriptado += String.fromCharCode(((descriptado - 65 + offset) %26 ) +65 );
  }
  else if (descriptado == 32) {
    textoDescriptado += text.charAt(i);
  }
  } 
  return textoDescriptado;
  }

};


export default cipher;
