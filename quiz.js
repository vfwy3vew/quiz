const divbtniniciar = document.getElementById("iniciarjogo");
const divcaixaquiz = document.getElementById("caixaquiz");
const h2perguntadoquiz = document.getElementById("perguntadoquiz");
const btniniciar = document.getElementById("botaojogar");
const btnproxima = document.getElementById("btnproximo");
const placar = document.getElementById("placar");
const opcoesRespostas = document.getElementById("opcoesRespostas");

btniniciar.addEventListener("click", btnIniciarJogo);
btnproxima.addEventListener("click", proximapergunta);

let indicepergutas = 0;
let respostaCorretas = 0;

//---------------------------------------------------------------arrays-----------------------------------------------------------
const perguntas = [
    {
        perguntas: "Qual é o maior deserto do mundo?",
        opcoes: ["Saara", "Antartida", "Itacoatiara"],
        respostacorreta: "Antartida"
    },
    {
        perguntas: "Qual é a capital do Brasil?",
        opcoes: ["Rio de janeiro", "São paulo", "Brasilia"],
        respostacorreta: "Brasilia"
    },
    {
        perguntas: "Qual é a capital da Austrália?",
        opcoes: ["Camberra", "Sidney", "Rio grande do sul"],
        respostacorreta: "Camberra"
    },
    {
        perguntas: "Qual é o país com maior população no mundo?",
        opcoes: ["India", "China", "Japão"],
        respostacorreta: "India"
    },
    {
        perguntas: " Qual a linha imaginária que atravessa o Brasil?",
        opcoes: ["Equador", "Tropico de capricornio", "Tropico de cancêr"],
        respostacorreta: "Equador"
    },
    {
        perguntas: "Qual o oceano que banha o Brasil?",
        opcoes: ["Atlantico", "Pacfico", "Indico"],
        respostacorreta: "Atlantico"
    },
];
//---------------------------------------------------------------arrays-----------------------------------------------------------

function btnIniciarJogo() {
    fecharbotaoinicio();
    abrirtelajogo();
}

function fecharbotaoinicio() {
    divbtniniciar.remove();
}

function abrirtelajogo() {
    divcaixaquiz.classList.add("active");
    h2perguntadoquiz.textContent = perguntas[indicepergutas].perguntas;
    opcoesRespostas.innerHTML = "";

    perguntas[indicepergutas].opcoes.forEach(opcao => {
        const btnpergunta = document.createElement("button");
        btnpergunta.textContent = opcao;
        btnpergunta.classList.add("answer-btn");
        btnpergunta.addEventListener("click", () => validarrepostacorreta(opcao));
        opcoesRespostas.appendChild(btnpergunta);
    });
}

function validarrepostacorreta(opcoselecionada) {
    const btnresposta = opcoesRespostas.querySelectorAll(".answer-btn");
    btnresposta.forEach(botao => {
        if (botao.textContent === perguntas[indicepergutas].respostacorreta) {
            botao.classList.add("correct");
        }
        if (botao.textContent === opcoselecionada && opcoselecionada !== perguntas[indicepergutas].respostacorreta) {
            botao.classList.add("incorrect");
        }
        botao.disabled = true;
    });

    if (opcoselecionada === perguntas[indicepergutas].respostacorreta) {
        respostaCorretas++;
    }
}

function resultado() {
    const resultadoplacar = document.getElementById("resultadoplacar");
    resultadoplacar.textContent = `Acertou ${respostaCorretas} de ${perguntas.length} perguntas!`;
}

function proximapergunta() {
    indicepergutas++;
    if (indicepergutas < perguntas.length) {
        abrirtelajogo();
    } else {
        divcaixaquiz.classList.remove("active");
        placar.classList.add("active");
        resultado();
    }
}