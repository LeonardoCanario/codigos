import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    
    static numeroDeContas = 0;
   
    //#saldo = 0; //podemos deixar a variavel privada colocando o _ na frente, ver artigo -> https://github.com/tc39/proposal-class-fields#private-fields
 
    constructor(cliente, agencia){
        super(0, cliente, agencia);//chamando o construtor da classe conta
        ContaCorrente.numeroDeContas += 1;

    }

   //sobreescrevendo o comportamento de sacar
sacar(valor) {

        let taxa = 1.1;
       return this._sacar(valor, taxa);
       //return super._sacar(valor, taxa); MESMO RESULTADO
    }



    
}
