function listarValores(lista) {
    // criação da lista vazia para armazenar os valores
    let nova_lista = [];
    // percorrer a lista e filtrar os numeros para adicionar à nova_lista
    for (let indice = 0; indice < lista.length; indice++) {
        let item = Number(lista[indice]);
        // checar se o item da lista é numérico
        if (isNaN(item)) {
            continue;
        }
        else {
            nova_lista.push(item);
        }
    }
    // declaração das variáveis para percorrer na lista de valores
    let somatoria = 0;
    let maior_valor = nova_lista[0];
    let menor_valor = nova_lista[0];
    // para cada número na lista, encontrar o maior e menor valor, e somar todos os valores
    for (let indice = 0; indice < nova_lista.length; indice++) {
        if (nova_lista[indice] > maior_valor) {
            maior_valor = nova_lista[indice];
        }
        else if (nova_lista[indice] < menor_valor) {
            menor_valor = nova_lista[indice];
        }
        somatoria += nova_lista[indice];
    }
    // calcular o valor médio a partir da quantidade de elementos na lista
    let valor_medio = somatoria / nova_lista.length;
    // atribuir o maior, menor e o valor médio na nova_lista
    nova_lista = [maior_valor, menor_valor, valor_medio];
    return nova_lista;
}
//# sourceMappingURL=imperativo.js.map