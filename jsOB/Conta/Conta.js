//Classe abstrata
export class Conta {



    //construtor
    constructor(saldoInicial, cliente, agencia){
        
        if (this.constructor == Conta){
            throw new Error ("Você não deveria instaciar um objeto do tipo conta, pois é uma classe abstrata.");
        }        
        
        
        
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

    }



    //parametrização dos valores a se receber
    set cliente(novoValor){

        if(novoValor instanceof Cliente){

            this._cliente = novoValor; 
        }
    } 

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    
    //Método abstrato
    sacar(valor) {

        throw new Error ("O método Sacar da conta é abstrato");
    }


    _sacar(valor , taxa){

        const valorSacado = taxa * valor;
                        
        if (this._saldo < valorSacado) {

            console.log("Não pode Sacar");
            return 0;

        }
        else {
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }


    depositar(valor){

        if(valor>0){

            this._saldo += valor;
            return valor;

        }
        else{

            console.log("Não é possivel depositar");
        }
    }


    transferir(valor, conta){

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);


    }


    


}