function listarValores(lista) {
    // filtragem dos valores numéricos para uma nova lista
    const nova_lista = lista.filter(valor => !isNaN(valor)).map(Number);
    // filtra o menor número dentro da lista numérica e armazena no menor_valor
    const menor_valor = nova_lista.reduce((valor, auxiliar) => Math.min(valor, auxiliar));
    // filtra o maior número dentro da lista numérica e armazena no maior_valor
    const maior_valor = nova_lista.reduce((valor, auxiliar) => Math.max(valor, auxiliar));
    // criação de uma função que retorna a soma entre os valores recebidos
    const somatorio = (valor, auxiliar) => { return valor + auxiliar; };
    // realiza a soma de todos os valores e divide pela quantidade de valores
    const valor_medio = (nova_lista.reduce(somatorio, 0)) / nova_lista.length;
    // retorna a lista formatada nos padrões pedidos
    return [maior_valor, menor_valor, valor_medio];
}
//# sourceMappingURL=funcional.js.map