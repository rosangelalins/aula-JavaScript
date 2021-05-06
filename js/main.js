//-------TEXTOS E NÚMEROS
/*
//no js ele ja entende quando não é declarado o tipo da variável
var nome ="Rosângela Lins";
var n1 =5;
var n2 = 3;
var frase ="Eu gosto de sorvete";

//gera um pop up na tela, uma janela com mensagem
//como não possui somente números ele faz a concatenação e não uma soma
//se colocar entre aspas ele se transforma em String

//alert(nome + " tem "+ idade + " anos.");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);

//comando para modificar textos ou números
console.log(frase.replace("sorvete", "pipoca"));
*/


//-------ARRAYS

//var lista = ["maçã", "pera", "laranja"];

//adicionar na lista
//lista.push("uva"); 

//remover o ultimo item da lista
//lista.pop();

//console.log(lista[1]);
//console.log(lista);

//toString mostra somente os itens da lista, sem mostrar o formato de Array
//console.log(lista.toString());

//imprime a primeira letra do primeiro item da lista
//console.log(lista.toString()[0]);

//modifica a separação dos itens da lista, acrescenta algo entre eles
//ele também transforma em String, mas você consegue adicionar o que você quiser
//console.log(lista.join(" - "));

//ver tamanho da lista
//console.log(lista.length);

//trazer os elementos ao contrario na lista
//console.log(lista.reverse());

//lista de dicionário fruta
/*var frutas =[{nome: "maçã", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
console.log(frutas);
console.log(frutas[1].nome);*/

//-------CONDICIONAIS, LAÇOS DE REPETIÇÃO E DATE

//CONDICIONAIS

/*var idade =18;
if(idade >= 18){
    alert("maior de idade");     
}else{
    alert("menor de idade");
};
*/

//mostra uma janela para informar um valor
/*var idade = prompt("qual a sua idade?");
if(idade >= 18){
    alert("maior de idade");     
}else{
    alert("menor de idade");
};
*/

//LAÇOS DE REPETIÇÃO

/*
var count = 0;
while(count <= 5){
    console.log(count);
    count = count  +1
};
*/
/*
//mesma coisa
var count = 0;
while(count <= 5){
    console.log(count);
   // alert(count);
    count++; //ele recebe ele mesmo +1
};
*/
/*
var count;
for(count=0; count<=5; count++){
    alert(count);
}
*/

//-------DATE
/*
var d = new Date();
alert(d);
*/
/*
var d = new Date();
// o Month sempre vai começar do zero, 
//então deve-se acrescentar o +1 para mostrar o mês certo
alert(d.getMonth()+1);
*/
/*
var d = new Date();
alert(d.getMinutes());
*/

//-------FUNÇÕES
/*
function soma(n1, n2){
    return n1 + n2;
}
function setReplace(frase, nome, novo_nome){
   return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var validar; //variável validada globalmente
function validaIdade(idade) {
    //variável validada localmente na função
    var validar;
    if (idade >= 18) {
        var validar = true;

    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/

function clicou(){
//alert("obrigado por clicar")
//podemos manipular vário elementos do html
//aqui podemos chamar o ID e inserir um elemento do html que nesse caso foi um texto h3
//podemos colocar qualquer coisa
document.getElementById("agradecimento").innerHTML="Obrigado por clicar";
//console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    //abre em outra janela quando clica
    window.open("https://www.globo.com/");
    //tem outra forma também, porem não é mais função, porem abre na mesma janela
    window.location.href = "https://www.globo.com/";
}

/*
function trocar(){
    //quando passar o mouse em cima ele vai mudar o texto
    document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
//alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML="passe o mouse aqui";
}
*/

//ou pode fazer passando um elemento para ser mais específico

function trocar(elemento){
    //quando passar o mouse em cima ele vai mudar o texto
  elemento.innerHTML="Obrigado por passar o mouse";
}

function voltar(elemento){
        //quando passar o mouse em cima elevai voltar o texto antes
 elemento.innerHTML="passe o mouse aqui";
}

function load(){
    alert("Página recarregada!");
}

//aqui ele vai puxar todos os valores que cadastramos no html
function funcaoChange(elemento){
    console.log(elemento.value);

}