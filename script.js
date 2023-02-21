const chk = document.getElementById('chk')

chk.addEventListener('change',() =>{
    document.body.classList.toggle('dark')
})
// Obtém o elemento HTML que contém todos os outros elementos da página
var meuCorpo = document.getElementById("meuCorpo");

// Cria um novo objeto de áudio com o arquivo de som desejado
var som = new Audio("sound/click.mp3");

// Adiciona um evento de clique a todo o documento (ou ao elemento HTML específico)
meuCorpo.addEventListener("click", function() {
  // Reproduz o arquivo de som quando o evento é acionado
  som.play();
});

