// declaração da lista como Array de objetos Pessoa
let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
/*----------------------------------------------------------------------------------
------------Criação da Tabela de Cientistas-----------------------------------------
----------------------------------------------------------------------------------*/
//-----------------------------------------------------------
// cria a estrutura principal HTML de <tr> e <th> do conteúdo
//-----------------------------------------------------------
function estruturarTabela(lista) {
    let estrutura = "";
    // para cada propriedade num objeto Pessoa qualquer...
    for (let tipoInfo in lista[0]) {
        // adiciona a propriedade à estrutura da tabela
        estrutura += `<th>${tipoInfo}</th>`;
    }
    // retorna a estrutura dentro de uma table row
    return `<tr class=\"table\">${estrutura}</tr>`;
}
//--------------------------------------------------------
// adiciona os dados da lista como <td> dentro de uma <tr>
//--------------------------------------------------------
function adicionarDados(lista) {
    let conteudo = "";
    // para cada objeto na lista passada...
    for (let cientista of lista) {
        // cria uma nova table row ao conteúdo
        conteudo += "<tr class=\"content\">";
        // para cada propriedade no objeto da lista...
        for (let tipoInfo in cientista) {
            // adiciona a informação do objeto da lista na table data
            conteudo += `<td>${cientista[tipoInfo]}</td>`;
        }
        // fecha a table row criada
        conteudo += "</tr>";
    }
    // retorna a estrutura com os dados da lista
    return conteudo;
}
//------------------------------------------------------------------------
// executa estruturarTabela e adicionarDados usando a lista como parâmetro
//------------------------------------------------------------------------
function criarTabela(lista) {
    let tabela = estruturarTabela(lista) + adicionarDados(lista);
    // atualiza a tabela com a variábel criada
    document.querySelector('#tabela').innerHTML = tabela;
}
//------------------------------------------------------
// carrega a função de criar tabela ao carregar a página
//------------------------------------------------------
window.onload = function () {
    criarTabela(lista);
};
/*----------------------------------------------------------------------------------
------------Funções de manipulação da Tabela----------------------------------------
----------------------------------------------------------------------------------*/
//----------------------------------------------
// apaga um item da tabela conforme o id passado
//----------------------------------------------
function apagarItem() {
    // declaração de constantes a partir do getElementById do formulário e do id
    const formulario = document.getElementById("formulario");
    const idInserido = Number(document.getElementById("fApagarItem").value);
    // verifica se o id inserido existe, retornando -1 caso contrário
    const indice = lista.findIndex(lista => lista.id === idInserido);
    const idInexistente = -1;
    if (indice !== idInexistente) {
        // reseta a tabela, filtrando pelo id se ele for existente
        document.querySelector('#tabela').innerHTML = "";
        lista = lista.filter((pessoa) => pessoa.id !== idInserido);
        criarTabela(lista);
    }
    else {
        window.alert("Insira um id válido");
    }
    // limpa os valores inseridos no formulário
    formulario.reset();
}
//------------------------------------------------------
// altera uma informação da tabela conforme o id passado
//------------------------------------------------------
function alterarItem() {
    // declaração de constantes a partir do getElementById do formulário e do id
    const formulario = document.getElementById("formulario");
    const idInserido = Number(document.getElementById("fAlterarItem").value);
    // recebe os valores a partir do preenchimento do formulário pelo HTMLInputElement
    const novoNome = document.getElementById("fAlterarNome").value;
    const novaBio = document.getElementById("fAlterarBio").value;
    // verifica se o id inserido existe, retornando -1 caso contrário
    const indice = lista.findIndex(lista => lista.id === idInserido);
    const idInexistente = -1;
    if (indice !== idInexistente) {
        // reseta a tabela, se o id for encontrado
        document.querySelector('#tabela').innerHTML = "";
        // altera os valores da lista caso encontre um novo valor
        if (novoNome)
            lista[indice].name = novoNome;
        if (novaBio)
            lista[indice].bio = novaBio;
        // recria a tabela com a lista atualizada
        criarTabela(lista);
    }
    else {
        window.alert("Insira um id válido");
    }
    // limpa os valores inseridos no formulário e recria a tabela
    formulario.reset();
}
//# sourceMappingURL=script.js.map