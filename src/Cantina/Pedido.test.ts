import { expect, test } from "@jest/globals";
import { Pedido } from "./Pedido";
import { Cliente } from "./Cliente";
import { Item } from "./Item";

test("deve ser criado com o status 'Pendente' por padrão",() => {
    const cliente: Cliente = new Cliente();
    cliente.nome = "Edécio";

    const pedido: Pedido = new Pedido(cliente);

    expect(pedido.status).toBe("Pendente")
})

test("deve remover um item do pedido pelo seu código", () => {

    const cliente: Cliente = new Cliente();
    cliente.nome = "Edécio";
    const pedido: Pedido = new Pedido(cliente);
    const item1: Item = new Item();
    item1.codigo = "1";
    item1.nome = "Ampola de botox";
    const item2: Item = new Item();
    item2.codigo = "2";
    item2.nome = "Colgate total white";
    pedido.adicionarItem(item1);
    pedido.adicionarItem(item2);

    pedido.removerItem("1");

    expect(pedido.itens.length).toBe(1);


})