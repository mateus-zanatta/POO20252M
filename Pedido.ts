import { Cliente } from "./Cliente";
import { Item } from "./Item";

export class Pedido{
    produtos: Item[];
    cliente: Cliente;

    constructor(cliente: Cliente){
        this.produtos = [];
        this.cliente = cliente;
    }
}