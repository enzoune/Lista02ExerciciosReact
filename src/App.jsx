import Exercicio01 from './components/Exercicio01.jsx';
import Exercicio02 from './components/Exercicio02.jsx';
import Exercicio03 from './components/Exercicio03.jsx';
import Exercicio04 from './components/Exercicio04.jsx';
import Exercicio05 from './components/Exercicio05.jsx';
import Exercicio06 from './components/Exercicio06.jsx';
import Exercicio07 from './components/Exercicio07.jsx';
import Exercicio08 from './components/Exercicio08.jsx';
import Exercicio09 from './components/Exercicio09.jsx';
import Exercicio10 from './components/Exercicio10.jsx';
import Exercicio11 from './components/Exercicio11.jsx';
import Exercicio12 from './components/Exercicio12.jsx';
import Exercicio13 from './components/Exercicio13.jsx';
import Exercicio14 from './components/Exercicio14.jsx';
import Exercicio15 from './components/Exercicio15.jsx';

function App() {
  const frutas = ["Maçã", "Banana", "Uva"];
  const numeros = [10, 20, 30];
  let soma = numeros[0]+numeros[1];
  const nomes = ["Enzinho", "Gatchusco", "Titi"];
  const cidades = ["São Paulo", "Rio", "Curitiba"];
  const precos = [10, 25, 40];
  const cores = ["Azul", "Vermelho", "Verde"];
  const idades = [18, 21, 30];
  let somaIdades = idades[0]+idades[1];
  const jogos = ["Minecraft", "FIFA", "GTA"];
  const comidas = ["Pizza", "Hambúrguer", "Sushi"];
  const filmes = ["Matrix", "Batman", "Avatar", "Interestelar"];
  let quantidadeFilmes = filmes.length;
  const linguagens = ["JavaScript", "Python", "Java", "C#"];
  const valores = [2, 4, 6];
  let somaValores = valores[0]+valores[1]+valores[2];
  const tarefas = ["Estudar React", "Fazer exercícios", "Praticar código"];

  return(
    <>
      <h1>Exercícios Lista 02</h1>
      <br/>
      <Exercicio01 fruta1 = {frutas[0]}/>
      <br/>
      <Exercicio02 fruta2 = {frutas[1]} fruta3 = {frutas[2]}/>
      <br/>
      <Exercicio03 numero1 = {numeros[0]} numero2 = {numeros[1]}/>
      <br/>
      <Exercicio04 soma = {soma}/>
      <br/>
      <Exercicio05 nome1 = {nomes[0]} nome2 = {nomes[1]} nome3 = {nomes[2]}/>
      <br/>
      <Exercicio06 cidade = {cidades[1]}/>
      <br/>
      <Exercicio07 preco1 = {precos[0]} preco2 = {precos[1]}/>
      <br/>
      <Exercicio08 cor1 = {cores[0]} cor2 = {cores[1]} cor3 = {cores[2]}/>
      <br/>
      <Exercicio09 somaIdade = {somaIdades}/>
      <br/>
      <Exercicio10 jogo = {jogos[0]}/>
      <br/>
      <Exercicio11 comida = {comidas[1]}/>
      <br/>
      <Exercicio12 totalFilmes = {quantidadeFilmes}/>
      <br/>
      <Exercicio13 linguagem1 = {linguagens[0]} linguagem2 = {linguagens[3]}/>
      <br/>
      <Exercicio14 resultado = {somaValores}/>
      <br/>
      <Exercicio15 tarefa1 = {tarefas[0]} tarefa2 = {tarefas[1]} tarefa3 = {tarefas[2]}/>
    </>
  )
}

export default App