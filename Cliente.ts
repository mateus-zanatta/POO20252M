export class Cliente{
    nome: string;
    telefone: string;

    /**
     * Método especial que executa apenas
     * uma vez, que é ao criar o objeto
     */
    constructor(nomeCliente: string){
        this.nome = nomeCliente;
        this.telefone = "";
    }
}