import { describe, expect, test } from "@jest/globals";
import { Cliente } from "./Cliente";

describe("Quando manipular um cliente", () => {

    test("deve validar corretamente um número de telefone com 11 dígitos", () => {
        // Cenário
        const cliente: Cliente = new Cliente();
        cliente.nome = "Edécio";

        //Execução
        const ehTelefoneValido:boolean = cliente.validarTelefone("53981560341");

        //Validação
        expect(ehTelefoneValido).toBeTruthy()
    })
    test("deve lançar um erro ao tentar atualizar com um telefone inválido",() => {
        const cliente: Cliente = new Cliente();
        cliente.telefone = "53981560340"

        expect(() => cliente.atualizarTelefone("98153034")).toThrow();
    })
})