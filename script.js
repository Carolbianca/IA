const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
{
enunciado: "Qual o seu nível de conhecimento sobre a Urbanização ?",
alternativas: [
{
texto: "Baixo",

afirmacao: "Você sabe apenas a base sobre a Urbanização. "
},
{
texto: "Médio",

afirmacao: "Você tem um bom entendimento sobre a Urbanização. "
},
{
texto: "Alto",

afirmacao: "Você tem tem um conhecimento aprofundado sobre a Urbanização."
}
]
},
{
enunciado: "1)  A urbanização é um fenômeno caracterizado pelo crescimento e desenvolvimento das cidades, resultando na concentração da população urbana em áreas urbanas. Esse processo envolve a transformação do meio ambiente, o surgimento de infraestruturas urbanas e a intensificação das atividades econômicas. Sendo assim, responda:",
alternativas: [
{
texto: "a)   A urbanização é um fenômeno exclusivo dos países desenvolvidos, não ocorrendo em países em desenvolvimento.",

afirmacao: [" Está alternativa está incorreta." ,
    "Não foi dessa vez"]
},
{
texto: "b) A urbanização é um processo que ocorre apenas devido ao crescimento natural da população urbana.",

afirmacao: ["Está alternativa está incorreta. ",
"Não foi dessa vez"]
},
{
texto: "c) A urbanização não tem relação com a intensificação das atividades econômicas nas cidades.",
afirmacao: ["Está alternativa está incorreta. ",
"Não foi dessa vez"]
},
{
texto: "d) A urbanização é impulsionada por fatores como o êxodo rural e o desenvolvimento industrial.",
afirmacao: ["1-D)Esta alternativa está correta ",
     "Parabéns"]
}

]
},
{
enunciado: "2 - As cidades, enquanto local de habitação de muitas pessoas, constantemente sofrem com problemas urbanos, seja no setor social ou ambiental. Sendo assim, selecione abaixo a alternativa que não está ligada a um problema comum nas cidades:",
alternativas: [
{
texto: "a) Desemprego.",
afirmacao: ["Está altenativa está incorreta.  ",
"Não foi dessa vez"]
},
{
texto: "b) Criminalidade.",

afirmacao: ["Está altenativa está incorreta. ",
"Não foi dessa vez"]

},
{
texto: "c) Falta de moradia adequada.",
afirmacao: ["Está altenativa está incorreta. ",
"Não foi dessa vez"]
},
{
texto: "d) Falta de nutrientes no solo.",
afirmacao: ["2-D)Esta alternativa está correta ",
"Parabéns"]

}
]
},
{
 enunciado: "3 - O processo de desmetropolização, observado no Brasil desde o final do século XX, é caracterizado: ",
alternativas: [
{
texto: "a) pela retração do setor terciário diante dos movimentos urbanos de compartilhamento de bens e serviços.",
afirmacao: ["Está alternativa está incorreta. ",
"Não foi dessa vez"]
},
{
texto: "b) pelo conflito jurídico na regulação do solo urbano, como resultado da conurbação entre as cidades.",
afirmacao: ["Está alternativa está incorreta. ",
"Não foi dessa vez"]
},
{
texto: "c) pelo registro de maior crescimento populacional em cidades médias, quando comparado ao das metrópoles.",
afirmacao: ["3-C) Esta alternativa está correta. ",
"Parabéns"]

},

{
texto: "d) pela redução das manchas metropolitanas como resultado de uma saturação populacional.",
afirmacao: ["Está alternativa está incorreta. ",
"Não foi dessa vez"]

}
]
}
  

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
botaoAlternativas.addEventListener("click", () =>
respostaSelecionada(alternativa));
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
caixaPerguntas.textContent = "Obrigado por completar o quiz!";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}
mostraPergunta();
