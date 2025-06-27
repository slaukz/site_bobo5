
const paginas = [
  {
    titulo: "🌙 1º Capítulo: O dia em que te conheci",
    texto: `Eu ainda lembro como se fosse ontem...
    Era feriado de Carnaval...
Estavamos jogando, e por acaso caímos juntos...
Bobo eu de pensar que meus dias continuariam iguais...
Desde então, nada foi o mesmo — ainda bem!
Comecei a viver algo que nunca havia vivido antes...
Sentido o que jamais tinha sentido antes...
Comecei a fazer coisas para demonstrar o que sentia...
Para minha felicidade, era recíproco!`
  },
  {
    titulo: "🎀 2º Capítulo: O processo",
    texto: `Não é segredo para ninguém que tudo aconteceu muito rápido...
    Aconteceu rápido, mas de forma natural...
    Estava eu prestes a viajar para praia, quando você ficou comigo até eu partir...
    Você já era proprietária do meu coração, mas desde esse momento eu tive a certeza que era a dona dele, eu sabia disso, queria que soubesse também... 
    E as coisas foram acontecendo, se completando...
    Semelhante a peças de um quebra cabeça...
    Me apaixonei antes mesmo de qualquer coisa, de qualquer toque...
    Em um dia estávamos combinando sobre você vir para cá...
    De repente, estava eu indo aí para te ver...
    Diante o primeiro abraço... - Eu estava viajando, acima das nuvens...`
  },
  {
    titulo: "💫 3º Capítulo: Sinto esses arrepios / O futuro",
    texto: `Toda vez que penso em você, e o que você significa para mim, sinto meu corpo arrepiar - Surreal!.
    Ter você na minha vida é a melhor coisa que poderia ter acontecido, o fato de poder estar contigo, poder te amar, te ajudar, te sentir, te ter como um todo...
    Quando sonho contigo, sempre acordo feliz, é fato! E fico feliz o resto do meu dia, e falar contigo torna tudo mais leve, meu estresse vai embora, minhas preocupações não existem, e quando te abraço então, PARAÍSO!
Eu prometo: estar do seu lado sempre, em qualquer ocasião, quando o mundo todo estiver contra você, eu estarei ao seu lado, te apoiando, te motivando, se você cair, vou fazer de tudo para te levantar.
Quero você para o meu hoje, para o meu amanhã, para o meu depois de amanhã, quero você para o meu todo sempre, independentemente das circunstâncias e dificuldades que possam vir a surgir, juntos tudo é possível, e eu realmente não vejo meu futuro sem você, quero realizar todos meus sonhos e ambições ao seu lado, e realizar os tuas também, com você ao meu lado!`
  },
  {
    titulo: "💝 4º Capítulo: Considerações finais",
    texto: `Por fim, gostaria de agradecer por tudo que fez por mim até hoje, sou imensamente grato por tudo, obrigado por ser quem você é comigo, obrigado por confiar em mim, obrigado por se adaptar ao meu jeito. Obrigado por me fazer feliz, do jeito que sou hoje!
    Eu te amo muito, muito, muito!
    Eu não sei como explicar o quanto eu te amo, mas é muito muito muito e muito, simplesmente não é possivel explicar esse amor, mas vai muito além de tudo, nem o universo inteiro conseguiria descrever esse sentimento.
    Enfim, espero que tenha gostado desse pequeno diário, foi bem complexo escrever tudo bonitinho, mas como foi para você, eu fiz com muito amor e carinho...
    Eu te amo minha sombrinha!`
  },
  {
    titulo: "Fim",
    texto: `Escrito por: Lukas
    Dedicado à: Luana
    
    Data: 27/06/2025
    
    "All for the love..."`
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
