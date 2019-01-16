function controladoraMenu() {
  var botao = document.getElementById('btn-menu').checked;
  viewMenu(botao);
}

function viewMenu(botao) {
  if (botao == true) {
    document.getElementById('menu-responsivo').style.display="flex";
  }
  else {
    document.getElementById('menu-responsivo').style.display="none";
  }
}

function controladoraQuiz() {
  var c1 = document.getElementById('c1').checked;
  var a2 = document.getElementById('a2').checked;
  var c3 = document.getElementById('c3').checked;
  var d4 = document.getElementById('d4').checked;
  var acertos = modeloQuiz(c1,a2,c3,d4);
  viewQuiz(acertos);
}

function modeloQuiz(resp1,resp2,resp3,resp4) {
  var contador = 0;
  if (resp1 == true) {
    contador = contador + 1;
  }
  if (resp2 == true) {
    contador = contador + 1;
  }
  if (resp3 == true) {
    contador = contador + 1;
  }
  if (resp4 == true) {
    contador = contador + 1;
  }
  return contador;
}

function viewQuiz(numeroacertos) {
  document.getElementById('acertos').innerHTML="Você acertou: "+numeroacertos+" questões!"
}
