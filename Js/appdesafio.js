
function saudacao(){
  let perguntaNome = prompt('qual seu nome?')
  console.log(`olá ${perguntaNome}`)
}


function contador(){
  let escolhaDesafiante = prompt('me de um numero de 1 a 10:');
  for(i = escolhaDesafiante ;i <= 10; i++){
    console.log(`contagem em ${i}`)
  }
}


/* Desafios
1. Função de saudação: Crie uma função que peça o nome do usuário e exiba uma saudação personalizada na página HTML.

2. Botão de contador: Crie um botão que, ao ser clicado, incremente um contador e exiba o valor atual na página HTML.

3. Validação de formulário: Crie um formulário que peça o nome e e-mail do usuário. Use JavaScript para validar se os campos estão preenchidos corretamente e exibir uma mensagem de erro ou sucesso.

4. Mudança de cor: Crie um botão que, ao ser clicado, mude a cor de fundo da página HTML para uma cor aleatória.

5. Lista de tarefas: Crie uma lista de tarefas que permita ao usuário adicionar e remover itens. Use JavaScript para atualizar a lista em tempo real. */





//Desafio 1: Verificar se um número é par ou ímpar

function imparouPar(numero){
   let par = numero % 2 == 0? 'par' : 'impar';
   console.log(par)
}
imparouPar(8);


//Desafio 2: Encontrar o maior número em um array
let numeros = [7,4,5,95,8,10,1] // defini uma variavel numero com arrays

 function qualMaior(array){ //criei uma funcao q recebe parametro os arrays
   let maior = array[0]; //criei uma variavel que se atribui ao array na posicao 0
   for (let i = 1; i < array.length; i++){
    //para deixar que  iteracao atribuase 1, se i for menor que o numero de elementos no array criado; deixe que iteracao continue
    //pq se i for igual ao array.length o for acaba, se for maior tb acaba
    if(array[i] > maior){ // se o array da iteracao for maior que a variavel com array na posicao 0
        maior = array[i]; // entao, maior vira o array com a iteracao
    }
   }
   return maior; //retornar maior numero
 }
console.log(qualMaior(numeros)); //renomeei o parametro da funcao com a variavel criada la emcima


//Desafio 3: Inverter uma string

let palavraString = 'subi no onibus' // crio a variavel com string
let separarString = palavraString.split('') // separo as letras num array numa variavel nova
let inverso = separarString.reverse(); // reverto as letras do array; se n separar as letras antes, o codigo nao le como function
inverso = inverso.join('') // atribuo o valor da variavel a ela mesma
console.log(`o inverso de ${palavraString} é ${inverso}`)

//Desafio 4: Verificar se uma string é um palíndromo

function verificarPalindromo(string){ // criei funcao com parametro
  let palavra = string.toLowerCase() // minimizei todas as letras maiusculas
  let separarLetras = palavra.split('') // separei as letras em arrays
  let invertido = separarLetras.reverse(); // reverti as letras 
  invertido = invertido.join(''); // inseri com o join, as letras que setei na variavel invertido
  let entao = palavra == invertido? 'é palindromo': 'nao é palindromo'; // criei uma variavel com condicao 
  console.log(`a palvra ${string} ${entao}`) // mostrei no log
}
verificarPalindromo('ovo')

//Desafio 5: Somar os números de um array

function somaNumero(arrayAdicao){ //crio a funcao com parametro renomeavel
  let somas = 0; // setei a variavel com valor 0
  for(i = 0; i < arrayAdicao.length; i++){ // criei um for pra iteracao percorrer ate bater o numero maximo de elementos do array
   somas += arrayAdicao[i]; // vai somar os numeros atuais de cada elemento; += esta atribuindo adicao, adiciona valor de um ao outro
  }
  console.log(somas);
}
let arraySoma = [1,6,25,5,4,4] // crio uma variavel de array
let somas = somaNumero(arraySoma); // crio uma variavel somas e renomeio parametro da funcao


// Desafio 1: Contar o número de vogais em uma string
let wordVogal = 'Distorção'; // dei string a variavel
function verificarVogal(word){ // crio funcao
  let vogais = ['a','e','i','o','u']; // seto as vogais na variavel
  let count = 0; // crio variavel de contagem valor 0
  for(let i = 0; i < word.length; i++){ //crio um for pra funcao
    let resultadoVogal = word[i].toLowerCase(); // crio variavel pra minimizar
    if(vogais.includes(resultadoVogal)){ // condicao e se pra caso a variavel incluir outra
    count++; // a contagem cresce a cada condicao aceita
  } 
}
  console.log(`a palavra ${wordVogal} tem ${count} vogais`);  
}
verificarVogal(wordVogal)

//Desafio 2: Verificar se um número é primo

let eNumeroPrimo = 9

function seraQueEPrimo(){
  let verPrimo = eNumeroPrimo % 2 == 1 ? 'primo' : 'nao é primo';
  console.log(`o ${eNumeroPrimo} ${verPrimo}`)
}

seraQueEPrimo();


//Desafio 3: Encontrar o menor número em um array
let numeral = [5,6,3,4,2,8]
function menorNumero(arrayMeno){
  let menor = arrayMeno[0];
  for(let i = 1; i < arrayMeno.length; i++){
    if(arrayMeno[i] < menor ){
      menor = arrayMeno[i];
    }
  }
  return menor;
}
console.log(menorNumero(numeral));

//Desafio 4: Inverter as palavras em uma string
let wordVert = 'carambolas nao carambolam'
let divWord = wordVert.split('')
let invertWord = divWord.reverse()
 invertWord = invertWord.join('')
 console.log(invertWord)


//Desafio 5: Verificar se dois arrays são iguais

let array1= [2,3,4,5]

let array2= [2,3,4,3]
let saoIguais = JSON.stringify(array1) === JSON.stringify(array2);

let jogoArray = saoIguais ? 'é igual' : 'não é igual';
console.log(`o array ${jogoArray}`)