function numVogais(palavra) {
    // guarda na variável vogais uma expressão regular contendo as vogais 
    const vogais = /[aáàãâäeéèêëiíìîïoóòõôöuúùûü]/gi;
    // realiza um match entre a palavra e as vogais, retornando o número de ocorrencias
    const num_vogais = (palavra.match(vogais) || []).length;
    // retorna o valor de vogais na palavra
    return num_vogais;
}
//# sourceMappingURL=numVogais.js.map