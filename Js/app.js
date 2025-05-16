//1-criar uma funcao pro botao funcionar
//2-colocar a lista de imagens na funcao pra ela trocar sempre q apertado
//3-estilizar o botao


let imagemAtual = 0; //criar variavel imagem atual e dar valor de 0
let imagens = document.querySelectorAll('.apresentacao__imagens img'); //crio variavel imagens e uso queryselectorall pra pegar toda img dentro da classe criada
let botaoAnterior = document.getElementById('anterior'); //crio variavel q recebe o id do botao anterior
let botaoProximo = document.getElementById('próximo'); // e o proximo

botaoAnterior.addEventListener('click', () => { //crio um EVENTO de CLICK no botao ANTERIOR
  imagemAtual--; // subtrai o valor imagem atual em 1, ou seja, -1
  if(imagemAtual< 0){ // verifica SE o valor de imagematual é MENOR QUE 0
    imagemAtual = imagens.length - 1; // se sim, define o valor dele como o ultimo item/imagem no caso
  }
  atualizarimagem(); //chama funcao atualizar imagem
}) 

botaoProximo.addEventListener('click', () => {
  imagemAtual++;
  if(imagemAtual >= imagens.length){ //quando imagematual for maior ou igual ao tanto de imagem
    imagemAtual = 0; //volta pra primeira imagem
  }
  atualizarimagem();
})


function atualizarimagem(){
  imagens.forEach((imagem, indice) => {
    imagem.style.display = indice === imagemAtual ? 'block' : 'none';
  });

}


























