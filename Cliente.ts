export class Cliente{
    nome: string;
    telefone: string;

    /**
     * Método especial que executa apenas
     * uma vez, que é ao criar o objeto
     */
    constructor(){
        this.nome = "";
        this.telefone = "";
    }

    criarCliente(nome: string, telefone: string): Cliente {
        if(nome.length < 3){
            throw new Error("Nome inválido");
        }
        this.nome = nome;
        this.telefone = telefone;
        return this;
    }
}