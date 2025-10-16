// const animais = ["gato", "papagaio", "cachorro", "elefante", "pomba"];
//  console.log(animais); 
//  animais.push("tubarão");//Adicionar item na lista
//  console.log(animais); 
//  animais[1] = "girafa"; //Substituir
//  console.log(animais);  
//  animais.pop()//Tirar o ultimo item da lista
//  console.log(animais);
//  console.log(animais.indexOf("CACHORRO"));//Ver posição
//  console.log(animais.indexOf("CACHORRO".toLowerCase()));


//  //SPLICE-->Adicionar, Remover e Substituir itens da sua array 
//  //SINTAXE
//  //Quantidade -->quantidade de intens da lista
//  //splico(indice, quantidade,);
//  //informação -->opcional


//  const animais = ["gato", "papagaio", "cachorro", "elefante", "pomba"];
//  //splice(indice, quantidade,informação);
//  //splice(2, 2)//Remover itens da lista
//  //const animais =["gato". "cachorro", "pomba"];
//  //slice(2, 0, "cavalo", "baleia"); //Adicionar itens da lista
//  //const.animais = ["gato", "cachorro", "cavalo", "baleia", "pomba"];
//  //splice(1, 2, "cavalo", "baleia");//Subtituir itens na lista
//   //const.animais = ["gato", "cavalo", "baleia", "baleia", "pomba"];


  
//  const animais = ["gato",  "cachorro","papagaio", "elegante", "pomba"];
//  console.log(animais.indexOf("cachorro"));
//  animais.splice(1, 1);//Removendo
//  console.log(animais);
//  animais.splice(1, 0, "cachorro");//Adicionado
//  console.log(animais);
//  animais.splice(3, 1 , "elefante");//Substituindo
//  console.log(animais);

// const marcas = [ "nike", "adidas", "puma", "lacoste", "calvin klein", "tommy hilfiger", "gucci", "prada", "zara", "h&m", "levi's", "diesel", "off-white", "balenciaga", "supreme", "versace", "osklen", "reserva", "colcci", "armani"];

//  console.log(marcas.indexOf("DIESEL".toLowerCase()));
//  marcas.splice(11, 1);
//  console.log(marcas);
//   marcas.push("diesel");
// console.log(marcas);
// marcas.splice(6, 2 , "puma", "rizzi");
// console.log(marcas);
// marcas.splice(7, 1);
// console.log(marcas);

// const array_vazio = [];//Criar array vazio 
// array_vazio.push("teste");//Adicionar item ao final 
// array_vazio.pop();//Remover item do final 
// array_vazio.splice(0, 0, "texte2")//Adiciona: teste2, teste 
// array_vazio.splice(0, 1, "teste2")//Substitui:teste por teste2
// array_vazio.splice(0, 1,)//Remove
// array_vazio.indexOf("teste2")//verifica a posição do item 
Taciane Baitz da Silva
const frutas = ["maçã", "banana", "laranja", "abacaxi"];
console.log(frutas);


function remover_Item() {
  let remover_item = item_input.value;
  const indice = frutas.indexOf(remover_item); //Procura a posição do item da variavel remover_item

    if(indice !== -1){ //Verifica se o item existe no array 
      frutas.splice(indice, 1);
      console.log(frutas);
    }else{
      alert("item não encontrado!");
    }
  }

function add(){
  frutas.push(item_input.value);
  console.log(frutas)
}
 btn.addEventListener("click",add);






 
Emanuelle 

const inp= document.getElementById("inp");
const btn1= document.getElementById("btn1");
const btn = document.getElementById("btn");

const frutas = ["maça", "banana", "laranja", "abacaxi"];
console.log(frutas);

function remover(){
    let remover_item = inp.value; //estar em um input
    const indice = frutas.indexOf(remover_item);
    if(indice !== -1){
        frutas.splice(indice, 1);
        console.log(frutas);
    }else{
        alert("item não encontrado!");
    }

}

btn1.addEventListener("click", remover);

function add(){
    frutas.push(inp.value);
    console.log(frutas);
}

btn.addEventListener("click", add);

//função
//procura a posição do item da variavel remover_item

//verificar se o item existe no array

