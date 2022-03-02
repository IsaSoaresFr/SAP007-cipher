const cipher = { //essa constante é um objeto, irá conter toda a função de Cifrar  Decifrar, será chamada no index.

  encode: function (offset, string)


    {if (typeof offset !== "number" || typeof string !== "string") {
      throw new TypeError
    }

    let resultadoEncode = ""
    let quantidadeDeLetras = string.length

    for (let i = 0; i < quantidadeDeLetras; i++) {
      let valorTabelaAscii = string.charCodeAt(i)
      let codPrimeiraLetra = 65
      let codMinuscula = 97

      if (valorTabelaAscii >= 65 && valorTabelaAscii <= 90) {
        let valorCodificado = ((valorTabelaAscii - codPrimeiraLetra + offset) % 26) + codPrimeiraLetra;
        resultadoEncode = resultadoEncode.concat(String.fromCharCode(valorCodificado))

      } else if (valorTabelaAscii >= 97 && valorTabelaAscii <= 122) {
        let valorCodificado = ((valorTabelaAscii - codMinuscula + offset) % 26) + codMinuscula;
        resultadoEncode = resultadoEncode.concat(String.fromCharCode(valorCodificado))
      }
    }
    return resultadoEncode;
  },




  decode: function (offset, stringg) {
    if (typeof offset !== "number" || typeof stringg !== "string") {
      throw new TypeError
    }

    let resultadoDecode = ""
    let quantidadeDeLetras2 = stringg.length

    for (let i = 0; i < quantidadeDeLetras2; i++) {
      let valorTabelaAscii2 = stringg.charCodeAt(i)
      let codUltimaLetra = 90
      let codUltimaMinuscula = 122

      if (valorTabelaAscii2 >= 65 && valorTabelaAscii2 <= 90) {
        let valorDecodificado = ((valorTabelaAscii2 - codUltimaLetra - offset) % 26) + codUltimaLetra;
        resultadoDecode = resultadoDecode.concat(String.fromCharCode(valorDecodificado))
      }
      else if (valorTabelaAscii2 >= 97 && valorTabelaAscii2 <= 122){
        let valorDecodificado = ((valorTabelaAscii2 - codUltimaMinuscula - offset) % 26) + codUltimaMinuscula;
        resultadoDecode = resultadoDecode.concat(String.fromCharCode(valorDecodificado))
      }
    }
    return resultadoDecode;
  }
}

export default cipher;
