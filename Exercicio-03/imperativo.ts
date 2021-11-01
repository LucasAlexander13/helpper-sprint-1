function listarValores (lista: any[]) : number[] {
    // criação da lista vazia para armazenar os valores
    let nova_lista: number[] = [];
    // percorrer a lista e filtrar os numeros para adicionar à nova_lista
    for (let i: number = 0; i < lista.length; i++){
        let item = Number(lista[i]);
        // checar se o item da lista é numérico
        if (isNaN(item)){
            continue;
        } else {
            nova_lista.push(item);
        }
    }
    // declaração das variáveis para percorrer na lista de valores
    let somatoria: number = 0;
    let maior_valor: number = nova_lista[0];
    let menor_valor: number = nova_lista[0];
    // para cada número na lista, encontrar o maior e menor valor, e somar todos os valores
    for (let i: number = 0; i < nova_lista.length; i++){

        if (nova_lista[i] > maior_valor) {
            maior_valor = nova_lista[i];
        }
        else if (nova_lista[i] < menor_valor) {
            menor_valor = nova_lista[i];
        }
        somatoria += nova_lista[i];
    }
    // calcular o valor médio a partir da quantidade de elementos na lista
    let valor_medio = somatoria / nova_lista.length;
    // atribuir o maior, menor e o valor médio na nova_lista
    nova_lista = [maior_valor, menor_valor, valor_medio];
    return nova_lista;
}
