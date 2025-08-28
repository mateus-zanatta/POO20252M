export class Item{
    nome: string;
    preco: number;
    categoria: string;
    codigo: string;

    constructor(){
        this.nome = "";
        this.preco = 0;
        this.categoria = "";
        this.codigo = "";
    }

    aplicarDesconto(percentual: number): number{
        const desconto = (this.preco * (percentual/100))
        const valorComDesconto = this.preco - desconto;

        return valorComDesconto;
    }
}