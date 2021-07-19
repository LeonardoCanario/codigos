
/*

Ser autenticavel, significa ter o método autenticar

ducky type

*/
export class SistemaAutenticacao{ //polimosfirmo um objeto pode ser tratado de varias formas

    static login(autenticavel, senha) {
        
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){  
            
            return autenticavel.autenticar(senha);
       }
       return false;
    }

    static ehAutenticavel(autenticavel){

      return "autenticar" in autenticavel && 
      
      autenticavel.autenticar instanceof Function // ou cliente ou qualquer outra classe, porém estou verificando se é apenas uma função 
    }

}