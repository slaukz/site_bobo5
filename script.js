
const paginas = [
  {
    titulo: "🌙 1º Capítulo: O Dia em que Te Conheci",
    texto: `Eu ainda lembro como se fosse ontem...
Meu coração, que costumava ser punk, ficou todo cor-de-rosa quando você chegou. 💜
Desde então, nada foi o mesmo — ainda bem.`
  },
  {
    titulo: "🎀 2º Capítulo: O Que Eu Amo em Você",
    texto: `Amo seu jeitinho bobo, sua voz, seus olhares, até quando você me irrita só pra me ver brava...
Kuromi pode ser rebelde, mas por você ela vira puro açúcar (quase).`
  },
  {
    titulo: "💫 3º Capítulo: Nosso Futuro Juntos",
    texto: `Eu sonho com dias cheios de risadas, madrugadas assistindo besteira e momentos em silêncio que dizem tudo.
Prometo: vou estar do seu lado, com minha tiara de caveirinha e um coração que só cresce por você.`
  }
];

let atual = 0;

const pagina = document.getElementById("pagina");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function atualizarPagina() {
  pagina.innerHTML = `
    <h2>${paginas[atual].titulo}</h2>
    <p>${paginas[atual].texto.replace(/\n/g, "<br>")}</p>
  `;
}

prev.addEventListener("click", () => {
  if (atual > 0) {
    atual--;
    atualizarPagina();
  }
});

next.addEventListener("click", () => {
  if (atual < paginas.length - 1) {
    atual++;
    atualizarPagina();
  }
});

atualizarPagina();
