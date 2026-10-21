// ===== DADOS DO JOGO =====
const TOTAL_PENALTIS = 5;

let nivelAtual = 'facil';
let gols = 0;
let penaltiAtual = 1;
let respondendo = false;

// ===== BANCO DE PERGUNTAS =====
const perguntas = {
  facil: [
    // Adição
    { q: 'Quanto é 12 + 8?', a: 20, opcoes: [18, 20, 22, 19] },
    { q: 'Quanto é 45 + 27?', a: 72, opcoes: [71, 73, 72, 70] },
    { q: 'Quanto é 9 + 0?', a: 9, opcoes: [0, 9, 10, 8] },
    { q: 'Quanto é 34 + 16?', a: 50, opcoes: [48, 50, 52, 49] },
    { q: 'Quanto é 7 + 15?', a: 22, opcoes: [21, 23, 22, 20] },
    { q: 'Quanto é 28 + 14?', a: 42, opcoes: [40, 42, 44, 41] },
    { q: 'Quanto é 50 + 30?', a: 80, opcoes: [70, 80, 90, 85] },
    { q: 'Quanto é 6 + 6 + 6?', a: 18, opcoes: [16, 18, 20, 17] },
    // Subtração
    { q: 'Quanto é 25 − 9?', a: 16, opcoes: [14, 16, 18, 15] },
    { q: 'Quanto é 60 − 23?', a: 37, opcoes: [36, 38, 37, 33] },
    { q: 'Quanto é 40 − 0?', a: 40, opcoes: [0, 40, 41, 39] },
    { q: 'Quanto é 92 − 37?', a: 55, opcoes: [54, 56, 55, 53] },
    { q: 'Quanto é 18 − 7?', a: 11, opcoes: [10, 12, 11, 9] },
    { q: 'Quanto é 100 − 45?', a: 55, opcoes: [55, 65, 45, 50] },
    { q: 'Quanto é 33 − 15?', a: 18, opcoes: [17, 19, 18, 16] },
    { q: 'Quanto é 70 − 28?', a: 42, opcoes: [40, 42, 44, 38] },
  ],
  medio: [
    // Multiplicação
    { q: 'Quanto é 6 × 4?', a: 24, opcoes: [20, 24, 28, 22] },
    { q: 'Quanto é 7 × 8?', a: 56, opcoes: [54, 56, 64, 48] },
    { q: 'Quanto é 9 × 5?', a: 45, opcoes: [40, 45, 50, 36] },
    { q: 'Quanto é 3 × 12?', a: 36, opcoes: [32, 36, 40, 30] },
    { q: 'Quanto é 8 × 0?', a: 0, opcoes: [8, 0, 1, 80] },
    { q: 'Quanto é 10 × 7?', a: 70, opcoes: [60, 70, 80, 17] },
    { q: 'Quanto é 5 × 9?', a: 45, opcoes: [40, 45, 50, 35] },
    { q: 'Quanto é 4 × 11?', a: 44, opcoes: [40, 44, 48, 42] },
    // Divisão
    { q: 'Quanto é 48 ÷ 6?', a: 8, opcoes: [6, 8, 9, 7] },
    { q: 'Quanto é 36 ÷ 4?', a: 9, opcoes: [8, 9, 10, 6] },
    { q: 'Quanto é 72 ÷ 8?', a: 9, opcoes: [8, 9, 10, 7] },
    { q: 'Quanto é 55 ÷ 5?', a: 11, opcoes: [10, 11, 12, 9] },
    { q: 'Quanto é 81 ÷ 9?', a: 9, opcoes: [8, 9, 10, 7] },
    { q: 'Quanto é 42 ÷ 7?', a: 6, opcoes: [5, 6, 7, 8] },
    { q: 'Quanto é 64 ÷ 8?', a: 8, opcoes: [6, 8, 9, 7] },
    { q: 'Quanto é 90 ÷ 10?', a: 9, opcoes: [8, 9, 10, 11] },
  ],
  dificil: [
    // Expressões numéricas (ordem das operações)
    { q: 'Quanto é 15 + 3 × 4?', a: 27, opcoes: [72, 27, 60, 19] },
    { q: 'Quanto é (20 − 8) × 3?', a: 36, opcoes: [28, 36, 12, 48] },
    { q: 'Quanto é 10 + 2 × 5?', a: 20, opcoes: [60, 20, 30, 15] },
    { q: 'Quanto é (12 + 4) ÷ 4?', a: 4, opcoes: [3, 4, 5, 16] },
    { q: 'Quanto é 8 × 3 − 6?', a: 18, opcoes: [18, 24, 12, 30] },
    { q: 'Quanto é 5 × (6 − 2)?', a: 20, opcoes: [18, 20, 28, 10] },
    { q: 'Quanto é 40 − 4 × 5?', a: 20, opcoes: [180, 20, 36, 16] },
    { q: 'Quanto é (15 + 5) × 2?', a: 40, opcoes: [25, 40, 35, 30] },
    { q: 'Quanto é 9 + 6 ÷ 3?', a: 11, opcoes: [5, 11, 15, 9] },
    { q: 'Quanto é 7 × 2 + 4?', a: 18, opcoes: [14, 18, 22, 16] },
    { q: 'Quanto é (30 − 10) ÷ 5?', a: 4, opcoes: [4, 6, 2, 20] },
    { q: 'Quanto é 6 × 4 + 3?', a: 27, opcoes: [24, 27, 42, 18] },
    { q: 'Quanto é 50 − 5 × 6?', a: 20, opcoes: [270, 20, 45, 30] },
    { q: 'Quanto é (8 + 7) × 2?', a: 30, opcoes: [23, 30, 17, 15] },
    { q: 'Quanto é 12 ÷ 3 + 5?', a: 9, opcoes: [4, 9, 11, 6] },
    { q: 'Quanto é 4 × (9 − 3)?', a: 24, opcoes: [20, 24, 33, 12] },
  ]
};

// ===== ELEMENTOS DO DOM =====
const telaInicio = document.getElementById('tela-inicio');
const telaJogo = document.getElementById('tela-jogo');
const telaResultado = document.getElementById('tela-resultado');
const modalComo = document.getElementById('modal-como');

const btnComoJogar = document.getElementById('btn-como-jogar');
const fecharModal = document.getElementById('fechar-modal');
const btnNiveis = document.querySelectorAll('.btn-nivel');

const golsEl = document.getElementById('gols');
const penaltiEl = document.getElementById('penalti-atual');
const nivelExibido = document.getElementById('nivel-exibido');
const perguntaEl = document.getElementById('pergunta');
const opcoesEl = document.getElementById('opcoes');
const feedbackEl = document.getElementById('feedback');

const bola = document.getElementById('bola');
const goleiro = document.getElementById('goleiro');

const golsFinais = document.getElementById('gols-finais');
const estrelasEl = document.getElementById('estrelas');
const mensagemFinal = document.getElementById('mensagem-final');
const tituloResultado = document.getElementById('titulo-resultado');
const btnJogarNovamente = document.getElementById('btn-jogar-novamente');
const btnMenu = document.getElementById('btn-menu');

// ===== FUNÇÕES AUXILIARES =====
function embaralhar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function mostrarTela(tela) {
  [telaInicio, telaJogo, telaResultado].forEach(t => t.classList.remove('ativa'));
  tela.classList.add('ativa');
}

function resetarCampo() {
  bola.className = 'bola';
  bola.style.left = '50%';
  bola.style.bottom = '30px';
  bola.style.opacity = '1';
  bola.style.transform = 'translateX(-50%)';
  goleiro.className = 'goleiro';
  goleiro.style.left = '50%';
}

// ===== INICIAR JOGO =====
function iniciarJogo(nivel) {
  nivelAtual = nivel;
  gols = 0;
  penaltiAtual = 1;
  respondendo = false;

  const nomes = { facil: '🟢 Fácil', medio: '🟡 Médio', dificil: '🔴 Difícil' };
  nivelExibido.textContent = `Nível: ${nomes[nivel]}`;
  golsEl.textContent = '0';
  penaltiEl.textContent = '1';

  mostrarTela(telaJogo);
  novaPergunta();
}

function novaPergunta() {
  respondendo = true;
  feedbackEl.textContent = '';
  feedbackEl.className = 'feedback';
  resetarCampo();

  const banco = perguntas[nivelAtual];
  const pergunta = banco[Math.floor(Math.random() * banco.length)];
  perguntaEl.textContent = pergunta.q;

  const opcoesEmbaralhadas = embaralhar(pergunta.opcoes);
  opcoesEl.innerHTML = '';

  opcoesEmbaralhadas.forEach(op => {
    const btn = document.createElement('button');
    btn.className = 'btn-opcao';
    btn.textContent = op;
    btn.onclick = () => responder(op, pergunta.a, btn);
    opcoesEl.appendChild(btn);
  });
}

function responder(escolhida, correta, botaoClicado) {
  if (!respondendo) return;
  respondendo = false;

  // Desabilita todos os botões
  document.querySelectorAll('.btn-opcao').forEach(b => b.disabled = true);

  if (escolhida === correta) {
    // GOL!
    botaoClicado.classList.add('correta');
    feedbackEl.textContent = '⚽ GOOOL! Resposta certa!';
    feedbackEl.classList.add('acerto');
    gols++;
    golsEl.textContent = gols;

    // Animação de chute para o gol
    setTimeout(() => {
      bola.classList.add('chute-gol');
      // Goleiro tenta mas não pega
      goleiro.style.left = Math.random() > 0.5 ? '30%' : '70%';
    }, 300);
  } else {
    // DEFESA / ERRO
    botaoClicado.classList.add('errada');
    // Mostra a correta também
    document.querySelectorAll('.btn-opcao').forEach(b => {
      if (parseInt(b.textContent) === correta) b.classList.add('correta');
    });
    feedbackEl.textContent = `🧤 Defesa! A resposta era ${correta}`;
    feedbackEl.classList.add('erro');

    // Animação de bola para fora / defesa
    setTimeout(() => {
      bola.classList.add('chute-fora');
      goleiro.classList.add('defendeu');
      goleiro.style.left = '50%';
    }, 300);
  }

  // Próximo pênalti ou fim
  setTimeout(() => {
    if (penaltiAtual >= TOTAL_PENALTIS) {
      finalizarJogo();
    } else {
      penaltiAtual++;
      penaltiEl.textContent = penaltiAtual;
      novaPergunta();
    }
  }, 2200);
}

function finalizarJogo() {
  golsFinais.textContent = gols;

  // Estrelas
  let estrelas = '';
  if (gols === 5) estrelas = '⭐⭐⭐⭐⭐';
  else if (gols >= 4) estrelas = '⭐⭐⭐⭐';
  else if (gols >= 3) estrelas = '⭐⭐⭐';
  else if (gols >= 2) estrelas = '⭐⭐';
  else if (gols >= 1) estrelas = '⭐';
  else estrelas = '😢';
  estrelasEl.textContent = estrelas;

  // Mensagens motivacionais
  if (gols === 5) {
    tituloResultado.textContent = '🏆 Campeão dos Pênaltis!';
    mensagemFinal.textContent = 'Perfeito! Você mandou bem nas operações com números naturais!';
  } else if (gols >= 3) {
    tituloResultado.textContent = '👏 Muito bem!';
    mensagemFinal.textContent = 'Bom trabalho! Continue praticando adição, subtração, multiplicação e divisão.';
  } else {
    tituloResultado.textContent = '💪 Continue treinando!';
    mensagemFinal.textContent = 'Não desanime! Revise as operações e tente novamente. Você consegue!';
  }

  mostrarTela(telaResultado);
}

// ===== EVENTOS =====
btnNiveis.forEach(btn => {
  btn.addEventListener('click', () => {
    iniciarJogo(btn.dataset.nivel);
  });
});

btnComoJogar.addEventListener('click', () => {
  modalComo.classList.remove('oculto');
});

fecharModal.addEventListener('click', () => {
  modalComo.classList.add('oculto');
});

btnJogarNovamente.addEventListener('click', () => {
  iniciarJogo(nivelAtual);
});

btnMenu.addEventListener('click', () => {
  mostrarTela(telaInicio);
});

// Fecha modal clicando fora
modalComo.addEventListener('click', (e) => {
  if (e.target === modalComo) modalComo.classList.add('oculto');
});
