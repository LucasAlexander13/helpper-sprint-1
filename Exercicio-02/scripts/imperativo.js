// declaração da variável 
let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoananova_lista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
/*----------------------------------------------------------------------------------
------------Código em paradigma Imperativo------------------------------------------
----------------------------------------------------------------------------------*/
// retorna a Bio da lista a partir do id passado como parâmetro
function retornarBio(lista, id) {
    let bio;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i]['id'] === id) {
            bio = lista[i]['bio'];
        }
    }
    return bio;
}
// retorna o Name da lista a partir do id passado como parâmetro
function retornarNome(lista, id) {
    let nome;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i]['id'] === id) {
            nome = lista[i]['name'];
        }
    }
    return nome;
}
//retorna uma nova lista, removendo os itens do id passado
function apagarItem(lista, id) {
    let nova_lista = lista;
    for (let i = 0; i < nova_lista.length; i++) {
        if (nova_lista[i]['id'] === id) {
            nova_lista.splice(i, 1);
        }
    }
    return nova_lista;
}
// retorna uma nova lista com as informações alteradas a partir do id e do tipo de informação
function alterarInfo(lista, id, tipo, nova_info) {
    let nova_lista = lista;
    for (let i = 0; i < nova_lista.length; i++) {
        if (nova_lista[i]['id'] === id) {
            if (tipo === 'name') {
                nova_lista[i]['name'] = nova_info;
            }
            else if (tipo === 'bio') {
                nova_lista[i]['bio'] = nova_info;
            }
        }
    }
    return nova_lista;
}
//# sourceMappingURL=imperativo.js.map