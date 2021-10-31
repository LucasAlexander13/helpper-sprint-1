function numVogais (palavra: string) : number {
  // guarda na variável vogais uma expressão regular contendo as vogais 
  const vogais = /[aáàãâäeéèêëiíìîïoóòõôöuúùûü]/gi;
  // realiza um match entre a palavra e as vogais, retornando o número de ocorrencias
  const num_vogais: number = (palavra.match(vogais) || []).length;
  // retorna o valor de vogais na palavra
  return num_vogais;
}

// mostra o funcionamento da função no console
console.log(`Lucas possui ${numVogais("Lucas")} vogais`)
console.log(`Alexander possui ${numVogais("Alexander")} vogais`)

// declara a variável que será usada no laço de repetição
let continuar: boolean = true;

while (continuar === true) {
  // recebe uma palavra por meio de um prompt
  let palavra: string = window.prompt('Digite uma palavra: ');
  console.log(palavra);
  // mostra o número de vogais por meio de um alert
  window.alert(`O número de vogais da palavra é: ${numVogais(palavra)}`);
  console.log(numVogais(palavra));
  // altera a variável usada como mudança de estado do laço de repetição 
  continuar = window.confirm("Deseja inserir outra palavra?");
}
