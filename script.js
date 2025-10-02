const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "Brianna vai ingressar no mercado de trabalho e se depara com uma nova proposta do senado, a redução da jornada de trabalho, de 44horas para 36horas, o fim da escala 6x1. O que Brianna pensa sobre isso?",
    alternativas: [
    {
      texto: "Isso é péssimo. Isso poderia levar à redução de salários e a demissões em massa." ,
      afirmacao: "ela achou péssimo pois acha que a aprovação do projeto levaria a população a uma grande taxa de desemprego"
    },
    {
       texto: "Isso é maravilhoso. Mais tempo livre melhora a saúde mental e a qualidade de vida.",
       afirmacao: "ela achou maravilhoso pois a proposta melhoraria a saúde mental e física dos trabalhadores" 
    }

    ]
  },

  {
    enunciado:
      "Com a descoberta desta nova proposta, Brianna ouve alguns de seus amigos discutindo sobre o assunto e decide intervir antes que eles comecassem a discutir. Oque Brianna fala?",
    alternativas: [

     {
      texto: "Pessoal, vamos parar de brigar e olhar para o lado positivo. A redução da jornada de trabalho não é só sobre ter mais folga. É uma chance de termos uma vida mais equilibrada, com tempo para nós mesmos e para a família. Para mim, a jornada de 6x1 é exaustiva e essa mudança já devia ter acontecido.",

      afirmacao: "ela pede para seus colegas pararem de brigar, e ver o lado positivo da proposta que vai beneficiar os trabalhadores a terem uma vida mais equilibrada e com qualidade"
     },
     {
     texto: "Gente, calma! Eu sei que a ideia de trabalhar menos é tentadora, mas será que essa mudança não vai prejudicar a economia? A escala 6x1 pode não ser perfeita, mas tem mantido as coisas funcionando. Mudar isso agora é um risco muito grande.",
     afirmacao: "ela pede calma para seus colegas, e diz que a proposta é tentadora, porém a proposta do senado pode comprometer a economia influenciando negativamente a qualidade de vida dos trabalhadores"
     }

    ]
  },
  {
    enunciado:
      "Nessa conversa Brianna escuta um colega perguntando “O fim da escala 6x1 e a adoção de um modelo com mais dias de descanso contribuiriam para o aumento da produtividade?” o que Brianna responde?",
    alternativas: [
      {
      texto:"Sim, pessoas mais descansadas e felizes são mais criativas e focadas. O bem-estar físico e mental reduz o esgotamento e aumenta a qualidade do trabalho, elevando a produtividade.",
  afirmacao:"ela diz sim, concordando com a pergunta do colega, e diz que o fim da escala 6x1 vai ser um beneficio para os trabalhadores, pois vai garantir sua qualidade de vida e vai contribuir com o aumento da produtividade"
      },
      {
      texto:"Não necessariamente. A mudança pode aumentar os custos para as empresas, ou fazer com que exijam o mesmo trabalho em menos tempo, gerando mais estresse. Isso pode levar a quedas na eficiência e até demissões, em vez de mais produtividade.",
      afirmacao:"ela diz não, e discordando da pergunta de seu colega, e diz que o fim da escala 6x1 vai ser um problema para os trablhadores, pois vai gerar mais estressse e demissões"
      }
    ]
  },
  {
    enunciado:
      "Ao final da discussão, Brianna precisou voltar ao trabalho e ficou com a dúvida “será que essa será a melhor decisão do senado pra mim?” e acaba compartilhando esse pensamento com seu chefe. Oque ele deve responder ?",
    alternativas: [
     {
      texto:"Eu entendo suas dúvidas, Brianna, mas essa mudança pode ser uma excelente oportunidade para melhorar as condições de trabalho a longo prazo. O fim da escala 6x1 pode trazer mais equilíbrio entre a vida profissional e pessoal, além de permitir uma jornada mais justa para todos. Acho que é um passo importante para o nosso bem-estar e para a modernização do modelo de trabalho no Brasil.",

      afirmacao:"ele responde que caso a mudança seja aprovada, vai ser uma exelente oportunidade para melhorar as condiçoes de trabalho a longo prazo, pois pode trazer mais equilibrio entre vida pessoal e profissional, com uma jornada mais justa, ele acredita ser um passo importante para o modelo de trabalho no brasil "
     },
     {
        texto:"Eu entendo sua preocupação, Brianna, mas essa mudança do Senado pode não ser a melhor solução. A escala 6x1 tem impactos importantes na vida dos trabalhadores, e se não for bem planejada, pode gerar mais problemas. Vale a pena avaliar com calma antes de tomar uma decisão."

        afirmacao: "ele diz entender a preocupação de Brianna, porém diz que a mudança será negativa, pois a escala atual de trabalho(6x1) tem impacto importante na vida dos trabalhadores, e se não for planejada, pode gerar mais problemas, e que vale avaliar com calma antes de tomar a decisão"
     }

    ]
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

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