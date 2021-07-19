import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./Funcionario/SistemaAutenticacao.js";


const diretor = new Diretor("Fernando", 10000, 1234567800);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Bernardo", 5000, 1987654321);
gerente.cadastrarSenha("123456");



const cliente = new Cliente("VERINHO", 565656564 , "1234"); 
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "1234");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);


