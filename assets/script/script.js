//Criação de introdução e tomada de decisão.

let iniciarJogo = prompt(
  "Olá, caro usuário!\nGostaria de jogar?"
).toLowerCase();

function verificaInicio() {
  if (iniciarJogo === "sim") {
    iniciaJogo();
  }
  if (iniciarJogo === "nao" || iniciarJogo !== "sim") {
    console.log("Entendido.");
    return;
  }
}

function iniciaJogo() {
  console.clear()
  const alternativasInicio = [
    "(1) Gerar frase",
    "(2) Créditos",
    "(3) Fechar o Jogo",
  ];
  console.log(alternativasInicio.join("\n"));
  menus();
}

//Interação com menus e escolhas.

//Escolhe a frase por sortear um index
function escolheFrase() {
  let rand = Math.random() * 3;
  let retorno = Math.floor(rand);
  return retorno;
}

function menus() {
  const selecao = prompt("Digite a sua opção:");

  let arrayFrases = [
    "Apressa-te a viver bem e pensa que cada dia é, por si só, uma vida.",
    "A riqueza não consiste em ter grandes posses, mas em ter poucas necessidades.",
    "Você tem poder sobre sua mente – não sobre eventos externos. Perceba isso e você encontrará a sua força",
  ];

  //Logica para prosseguir ao sistema
  if (parseInt(selecao) === 1) {
    console.log(`A Frase é: ${arrayFrases[escolheFrase(1)]}`);
    iniciaJogo()
    
  } else if (parseInt(selecao) === 2) {
    console.log(`EUquipe: \n Roteiro: Igor \n Produção: Igor`)
    iniciaJogo()
  } else if (parseInt(selecao) === 3) {
    console.log("Entendido.");
    return;
  }


}

verificaInicio();
