principal()
function principal()
{   var escolha = parseFloat(prompt("Escolha uma opção de 1 a 11\n1) Cadastro de estudantes\n2) Array de planetas do sitema solar\n3) Array de frutas da minha escolha"));

    switch(escolha){

            case 1:
        cadastroDeEstudantes();
        break;
            case 2:
        listaPlanetas();
        break;
            case 3:
        listaFrutas();
        default:
    }
}





function listaFrutas(){
    var frutas = ["Maracuja", "Kiwi", "Laranja", "Lixia", "Romã"];
alert("A lista de frutas é: " + frutas.join(", "));
var continuar = true;

while (continuar) {
  var fruta = prompt("Digite o nome de uma fruta para remover da lista ou PARE para encerrar");

  if (fruta == "PARE") {
    continuar = false;
  } else {
    if (frutas.indexOf(fruta) == -1) {
      alert("Fruta indisponível no nosso mercado");
      principal();

      
    } else {
      frutas.splice(frutas.indexOf(fruta), 1);
      alert("Fruta foi retirada da lista");
      principal();

    }
  }

  if (frutas.length == 0) {
    continuar = false;
    alert("Lista de compras finalizada");
    principal();

  }
}

}





function listaPlanetas(){
    var planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno", "terra", "marte", "plutão", "vênus", "júpiter", "saturno"];

var planeta = prompt("Digite o nome de um planeta");

if (planetas.indexOf(planeta) == -1) {
  
  alert("O planeta " + planeta + " não está na lista");
  principal();

} else {
  
  alert("O planeta " + planeta + " está na lista");
  principal();
}
}




function cadastroDeEstudantes() {

var estudantes = [];


var continuar = true;

while (continuar) {

  var nome = prompt("Digite o nome do estudante ou PARE para encerrar");

  if (nome == "PARE") {

    continuar = false;
  } else {
    
    estudantes.push(nome);
  }
}

alert("Você cadastrou " + estudantes.length + " estudantes");

alert("A lista de estudantes é: " + estudantes.join(", "));

principal();

}