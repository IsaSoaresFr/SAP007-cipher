const cipher = { //essa constante é um objeto, irá conter toda a função de Cifrar  Decifrar, será chamada no index.

  encode: function (offset, string) {
    let resultadoEncode = " "
    let quantidadeDeLetras = string.length
    
  for(let i=0; i<string.length; i++){
   let valorTabelaAscii = string.charCodeAt(i)

   let codigoLetraA = 65
   let valorCodificado = ((valorTabelaAscii - codigoLetraA + offset)% 26) + codigoLetraA;

   resultadoEncode = resultadoEncode.concat(String.fromCharCode(valorCodificado))

  }
  return resultadoEncode;
  },


  decode: function (offset, stringg) {
    let resultadoDecode = " "
    let quantidadeDeLetras = stringg.length

  for(let i=0; i<stringg.length; i++){
  let valorTabelaAscii2 = stringg.charCodeAt(i)

  let codigoLetraA2 = 90
  let valorDecodificado = ((valorTabelaAscii2 - codigoLetraA2 - offset)% 26) + codigoLetraA2;

  resultadoDecode = resultadoDecode.concat(String.fromCharCode(valorDecodificado))

  }  
  return resultadoDecode;
  }
  }  
  
  export default cipher;
