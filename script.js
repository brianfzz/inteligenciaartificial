const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
  {
    enunciado:
      "Brianna vai ingressar no mercado de trabalho e se depara com uma nova proposta do senado, a redução da jornada de trabalho, de 44horas para 36horas, o fim da escala 6x1. O que Brianna pensa sobre isso?",
    alternativas: ["Isso é péssimo. Isso poderia levar à redução de salários e a demissões em massa.", "Isso é maravilhoso. Mais tempo livre melhora a saúde mental e a qualidade de vida."],
  },
  {
    enunciado:
      "Com a descoberta desta nova proposta, Brianna ouve alguns de seus amigos discutindo sobre o assunto e decide intervir antes que eles comecassem a discutir. Oque Brianna fala?",
    alternativas: [
      "Pessoal, vamos parar de brigar e olhar para o lado positivo. A redução da jornada de trabalho não é só sobre ter mais folga. É uma chance de termos uma vida mais equilibrada, com tempo para nós mesmos e para a família. Para mim, a jornada de 6x1 é exaustiva e essa mudança já devia ter acontecido.",
      "Gente, calma! Eu sei que a ideia de trabalhar menos é tentadora, mas será que essa mudança não vai prejudicar a economia? A escala 6x1 pode não ser perfeita, mas tem mantido as coisas funcionando. Mudar isso agora é um risco muito grande.",
    ],
  },
  {
    enunciado:
      "Nessa conversa Brianna escuta um colega perguntando “O fim da escala 6x1 e a adoção de um modelo com mais dias de descanso contribuiriam para o aumento da produtividade?” o que Brianna responde?",
    alternativas: [
      "Sim, pessoas mais descansadas e felizes são mais criativas e focadas. O bem-estar físico e mental reduz o esgotamento e aumenta a qualidade do trabalho, elevando a produtividade.",
      "Não necessariamente. A mudança pode aumentar os custos para as empresas, ou fazer com que exijam o mesmo trabalho em menos tempo, gerando mais estresse. Isso pode levar a quedas na eficiência e até demissões, em vez de mais produtividade.",
    ],
  },
  {
    enunciado:
      "Ao final da discussão, Brianna precisou voltar ao trabalho e ficou com a dúvida “será que essa será a melhor decisão do senado pra mim?” e acaba compartilhando esse pensamento com seu chefe. Oque ele deve responder ?",
    alternativas: [
      "que ele vê a mudança como uma oportunidade para melhorar a vida e a produtividade de Brianna, prometendo apoio e planejamento na transição.",
      "expressa preocupação com os desafios operacionais e a incerteza da mudança, alertando sobre possíveis impactos negativos na rotina de trabalho.",
    ],
let atual = 0;
let perguntaAtual;
let historiaFinal = "Em 2049, Brianna...
Em 2049, Briana celebra a decisão de 2024 de acabar com a escala 6x1 como um marco na história dos direitos trabalhistas. Ela entende que a mudança permitiu uma melhoria significativa na saúde mental e na qualidade de vida de sua geração. Hoje, ela tem uma agenda de trabalho flexível, com quatro dias de trabalho por semana, e isso lhe dá tempo para se dedicar a seus hobbies, estudos e, o mais importante, passar tempo de qualidade com sua família.";


function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
mostraPergunta();
}
function mostraAlternativas() {}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}
