export class Conta {
    saldo: number = 0;

    saque(valor: number) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
    }

    deposito(valor: number) {
        if (valor < 0) {
            throw new Error("Valor de depósito inválido");
        }
        this.saldo += valor;
    }

    extrato(): number {
        return this.saldo;
    }
}