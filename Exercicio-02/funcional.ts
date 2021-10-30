// declaração da interface para a lista
interface Pessoa {
    id: number,
    name: string,
    bio: string
}
// declaração da variável 
let lista: Array<Pessoa> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoananova_lista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];
/*----------------------------------------------------------------------------------
------------Código em paradigma Funcional-------------------------------------------
----------------------------------------------------------------------------------*/

// encontra a Bio da lista a partir do id passado como parâmetro
function retornarBio(id: number): string {
    return lista.find((pessoa: Pessoa) => pessoa.id === id).bio;
}
// encontra o Name da lista a partir do id passado como parâmetro
function retornarNome(id: number): string {
    return lista.find((pessoa: Pessoa) => pessoa.id === id).name;
}
//filtra a lista removendo os itens do id passado
function apagarItem(id: number): Array<Pessoa> {
    return lista.filter((pessoa: Pessoa) => pessoa.id !== id);
}
// altera informações a partir do id e do tipo de informação
function alterarInfo(id:number, tipo: string, info: string): boolean {
    if (tipo === 'name') {
        lista.find((pessoa: Pessoa) => pessoa.id === id).name = info;
        return true;
    }
    else if (tipo === 'bio') {
        lista.find((pessoa: Pessoa) => pessoa.id === id).bio = info;
        return true;
    }
    else { 
        return false 
    }
}
