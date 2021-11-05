function listarValores (lista: any[]) : number[] {
    // filtragem dos valores numéricos para uma nova lista
    const nova_lista: number[] = lista.filter(valor => !isNaN(valor)).map(Number);
    // filtra o menor número dentro da lista numérica e armazena no menor_valor
    const menor_valor: number = nova_lista.reduce((valor, auxiliar) => Math.min(...nova_lista));
    // filtra o maior número dentro da lista numérica e armazena no maior_valor
    const maior_valor: number = nova_lista.reduce((valor, auxiliar) => Math.max(...nova_lista));
    // criação de uma função que retorna a soma entre os valores recebidos
    const somatorio = (valor: number, auxiliar: number) => valor + auxiliar;
    // realiza a soma de todos os valores e divide pela quantidade de valores
    const valor_medio: number = (nova_lista.reduce(somatorio, 0)) / nova_lista.length
    // retorna a lista formatada nos padrões pedidos
    return [maior_valor, menor_valor, valor_medio];
}
