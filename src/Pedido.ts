import { Cliente } from "./Cliente";
import { Item } from "./Item";
import { Util } from "./Util";

export class Pedido{
    itens: Item[];
    cliente: Cliente;
    status: string;
    numero: string;

    constructor(cliente: Cliente){
        this.itens = [];
        this.cliente = cliente;
        this.status = "Pendente";
        this.numero = Util.gerarNumeroDePedido()
    }

    cancelarPedido(): void{
        this.status = "Cancelado";
    }

    adicionarItem(item: Item){
        this.itens.push(item);

    }
}