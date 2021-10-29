let lista: Array<Object> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

function retornarBio(lista: Array<Object>, id: number): string {
    let bio: string;

    for(let i: number = 0; i < lista.length; i++) {
        if (lista[i]['id'] === id) {
            bio = lista[i]['bio'];
        }
    }
    return bio;
}

function retornarNome(lista: Array<Object>, id: number): string {
    let nome: string;

    for(let i: number = 0; i < lista.length; i++) {
        if (lista[i]['id'] === id) {
            nome = lista[i]['name'];
        }
    }
    return nome;
}

function apagarItem(lista: Array<Object>, id: number): Array<Object> {

    for(let i: number = 0; i < lista.length; i++) {
        if (lista[i]['id'] === id) {
            lista.splice(i, 1);
        }
    }
    return lista;
}

function alterarInfo(lista: Array<Object>, id: number, tipo: string, nova_info: string): Array<Object> {

    for(let i: number = 0; i < lista.length; i++) {
        if (lista[i]['id'] === id) {
            if (tipo === 'name') { lista[i]['name'] = nova_info } 
            else if (tipo === 'bio') { lista[i]['bio'] = nova_info }
        }
    }
    return lista;
}