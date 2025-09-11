import { describe, expect, it } from "@jest/globals"
import { Conta } from "./Conta";


describe("Quando depositar", () => {
    it("", () => {
        // Cenário
        const conta: Conta = new Conta();
        conta.saldo = 0
        // Execução
        conta.deposito(150);
        // Validação
        expect(conta.saldo).toBe(150)
    })

    it("Deve gerar um erro se o depósito for negativo", () => {
        // Cenário
        const conta: Conta = new Conta();
        conta.saldo = 1000;
        // Execução Validação (Juntos em caso de teste de erro)
        expect(() => {
            conta.deposito(-100)
        }
    ).toThrow()
    })
})

describe("Quando depositar", () => { 
    it("Deve alterar o saldo se deposito for positivo", () => {
        const conta: Conta = new Conta();
        conta.saldo = 1000;

        conta.saque(500);

        expect(conta.saldo).toBe(500);
    })

    it("Não deve realizar o saque se o valor do saque for maior que o do saldo", () => {
        const conta: Conta = new Conta();
        conta.saldo = 100;

        conta.saque(200)

        expect(conta.saldo).toBe(100)
    })
 })

// test("", () => {})