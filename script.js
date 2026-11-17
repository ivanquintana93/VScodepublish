// ============================================
// CONFIGURAÇÃO DAS GRAVAÇÕES
// ============================================
// Cada entrada vira um player independente.
// O campo "sufixo" precisa casar com os IDs do HTML
// (ex.: sufixo "mozart" → IDs play-mozart, barra-mozart, etc.)

const GRAVACOES = [
    // --------------------------------------------
    // MOZART (5 faixas)
    // --------------------------------------------
    {
        sufixo: 'mozart',
        imagemInicial: 'imagens/capa-mozart.png',
        faixas: [
            {
                id: 'mozart-mix',
                nome: 'Mix',
                descricao: 'AB, Quad Surround e Spots',
                arquivoAudio: 'audio/Aparte SCM - Trecho Mozart - Mix.mp3',
                imagem: 'imagens/capa-mozart.png'
            },
            {
                id: 'mozart-main-ab',
                nome: 'Main AB',
                descricao: 'AB 90cm - Neumann KM 130',
                arquivoAudio: 'audio/Aparte SCM - Trecho Mozart v2 - 0015 - Grupo - MAINS.mp3',
                imagem: 'imagens/Main AB.png'
            },
            {
                id: 'mozart-surround',
                nome: 'Quad Surround',
                descricao: '90° 28cm - Neumann KM 184 (L/R) e sE8 (Ls/Rs)',
                arquivoAudio: 'audio/Aparte SCM - Trecho Mozart v2 - 0016 - Grupo - Surround.mp3',
                imagem: 'imagens/Surround.png'
            },
            {
                id: 'mozart-spot-c',
                nome: 'Spot C',
                descricao: 'sE8 omni',
                arquivoAudio: 'audio/Aparte SCM - Trecho Mozart v2 - 0007 - Áudio - C.mp3',
                imagem: 'imagens/Spot C.png'
            },
            {
                id: 'mozart-spot-bass',
                nome: 'Spot Bass',
                descricao: 'sE8 omni',
                arquivoAudio: 'audio/Aparte SCM - Trecho Mozart v2 - 0008 - Áudio - Bass.mp3',
                imagem: 'imagens/Spot Bass.png'
            }
        ],
        galeria: [
            '/imagens/galerias/mozart/foto-01.jpg',
            '/imagens/galerias/mozart/foto-02.jpg',
            '/imagens/galerias/mozart/foto-03.jpg',
            '/imagens/galerias/mozart/foto-04.jpg',
            '/imagens/galerias/mozart/foto-05.jpg'

        ]
    },

    // --------------------------------------------
    // DVOŘÁK (10 faixas)
    // --------------------------------------------
    {
        sufixo: 'dvorak',
        imagemInicial: 'imagens/capa-dvorak.png',
        faixas: [
            {
                id: 'dvorak-mix',
                nome: 'Mix',
                descricao: 'Mains, Spots e Reverb',
                arquivoAudio: 'audio/Dvorak 8 - Mix.mp3',
                imagem: 'imagens/Dvorak 8 - Mix.png'
            },
            {
                id: 'dvorak-main-ab',
                nome: 'Main AB',
                descricao: 'sE8 omni',
                arquivoAudio: 'audio/Dvorak 8 - Main_AB.mp3',
                imagem: 'imagens/Dvorak 8 - Main_AB.png'
            },
            {
                id: 'dvorak-main-cardioids',
                nome: 'Main Cardioids',
                descricao: 'sE8 cardioide',
                arquivoAudio: 'audio/Dvorak 8 - Main Cardioids.mp3',
                imagem: 'imagens/Dvorak 8 - Main Cardioids.png'
            },
            {
                id: 'dvorak-cordas-lr',
                nome: 'Cordas L/R',
                descricao: 'sE8 cardioide',
                arquivoAudio: 'audio/Dvorak 8 - Cordas_LR.mp3',
                imagem: 'imagens/Dvorak 8 - Cordas_LR.png'
            },
            {
                id: 'dvorak-contrabaixo',
                nome: 'Contrabaixo',
                descricao: 'Sony C-48',
                arquivoAudio: 'audio/Dvorak 8 - Contrabaixo.mp3',
                imagem: 'imagens/Dvorak 8 - Contrabaixo.png'
            },
            {
                id: 'dvorak-mains',
                nome: 'MAINS',
                descricao: 'Main AB, Main Cardioids e Cordas L/R',
                arquivoAudio: 'audio/Dvorak 8 - MAINS.mp3',
                imagem: 'imagens/Dvorak 8 - MAINS.png'
            },
            {
                id: 'dvorak-madeiras',
                nome: 'Madeiras',
                descricao: 'Beyerdynamic MC930',
                arquivoAudio: 'audio/Dvorak 8 - Madeiras.mp3',
                imagem: 'imagens/Dvorak 8 - Madeiras.png'
            },
            {
                id: 'dvorak-metais-perc',
                nome: 'Metais e Percussão',
                descricao: 'Sony C-48 e AT2021',
                arquivoAudio: 'audio/Dvorak 8 - Metais_Perc.mp3',
                imagem: 'imagens/Dvorak 8 - Metais_Perc.png'
            },
            {
                id: 'dvorak-spots',
                nome: 'SPOTS',
                descricao: 'Madeiras, Metais e Percussão',
                arquivoAudio: 'audio/Dvorak 8 - SPOTS.mp3',
                imagem: 'imagens/Dvorak 8 - SPOTS.png'
            },
            {
                id: 'dvorak-reverb',
                nome: 'Reverb',
                descricao: 'Altiverb 7.0 - Berlin Philharmonic Hall (IR)',
                arquivoAudio: 'audio/Dvorak 8 - Reverb.mp3',
                imagem: 'imagens/Dvorak 8 - Reverb.png'
            }
        ],
        galeria: [
            'imagens/galerias/dvorak/foto-01.png',
            'imagens/galerias/dvorak/foto-02.jpg',
            'imagens/galerias/dvorak/foto-03.jpg',
            'imagens/galerias/dvorak/foto-04.jpg',
            'imagens/galerias/dvorak/foto-05.jpg'
        ]
    },
    // --------------------------------------------
    // MAHLER (8 FAIXAS)
    // --------------------------------------------
    {
        sufixo: 'mahler',
        imagemInicial: 'imagens/capa-mahler.png',
        faixas: [
            {
                id: 'mahler-mix',
                nome: 'Mix',
                descricao: 'Main Mics e Spots',
                arquivoAudio: 'audio/Mahler - Mix.mp3',
                imagem: 'imagens/Mahler - Mix.png'
            },
            {
                id: 'mahler-main-mics',
                nome: 'Main Mics',
                descricao: 'sE8 omni AB 90 cm + sE8 cardoid EBS',
                arquivoAudio: 'audio/Mahler - Main Mics.mp3',
                imagem: 'imagens/Mahler - Main Mics.png'
            },
            {
                id: 'mahler-cordas-lr',
                nome: 'Cordas L/R',
                descricao: 'sE8 cardioide',
                arquivoAudio: 'audio/Mahler - Cordas_LR.mp3',
                imagem: 'imagens/Mahler - Cordas_LR.png'
            },
            {
                id: 'mahler-contrabaixo',
                nome: 'Contrabaixo',
                descricao: 'Sony C-48',
                arquivoAudio: 'audio/Mahler - Contrabaixo.mp3',
                imagem: 'imagens/Mahler - Contrabaixo.png'
            },
            {
                id: 'mahler-madeiras',
                nome: 'Madeiras',
                descricao: 'Beyerdynamic MC930',
                arquivoAudio: 'audio/Mahler - Madeiras.mp3',
                imagem: 'imagens/Mahler - Madeiras.png'
            },
            {
                id: 'mahler-harpa',
                nome: 'Harpa',
                descricao: 'Audio Technica AT2020',
                arquivoAudio: 'audio/Mahler - Harpa.mp3',
                imagem: 'imagens/Mahler - Harpa.png'
            },
            {
                id: 'mahler-voz solo',
                nome: 'Voz Solo',
                descricao: 'Sony C-48',
                arquivoAudio: 'audio/Mahler - Voz solo.mp3',
                imagem: 'imagens/Mahler - Voz solo.png'
            },
            {
                id: 'mahler-spots',
                nome: 'Spots',
                descricao: 'Cordas, Contrabaixo, Madeiras, Harpa e Voz Solo',
                arquivoAudio: 'audio/Mahler - Spots.mp3',
                imagem: 'imagens/Mahler - Spots.png'
            }
        ]
    }
];

// ============================================
// AUDIOCONTEXT COMPARTILHADO
// ============================================
let audioContext = null;
let players = [];
let playerTocando = null;

function garantirAudioContext() {
    if (audioContext) return audioContext;
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    return audioContext;
}

// ============================================
// UTILITÁRIOS
// ============================================
function formatarTempo(seg) {
    if (!isFinite(seg) || seg < 0) seg = 0;
    const m = Math.floor(seg / 60);
    const s = Math.floor(seg % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// ============================================
// FÁBRICA DE PLAYER
// ============================================
function criarPlayer(config) {
    const { sufixo, faixas, imagemInicial } = config;

    const capaImg = document.getElementById(`capa-${sufixo}`);
    const tituloEl = document.getElementById(`titulo-${sufixo}`);
    const descricaoEl = document.getElementById(`descricao-${sufixo}`);
    const versoesContainer = document.getElementById(`versoes-${sufixo}`);
    const btnPlayPause = document.getElementById(`play-${sufixo}`);
    const iconePlay = document.getElementById(`icone-${sufixo}`);
    const barraProgresso = document.getElementById(`barra-${sufixo}`);
    const tempoAtualTxt = document.getElementById(`tempoAtual-${sufixo}`);
    const tempoTotalTxt = document.getElementById(`tempoTotal-${sufixo}`);
    const bufferingEl = document.getElementById(`buffering-${sufixo}`);
    const btnMudo = document.getElementById(`mudo-${sufixo}`);
    const volumeSlider = document.getElementById(`volume-${sufixo}`);

    let ganho = null;
    let buffers = {};
    let sourceAtual = null;
    let faixaAtual = null;
    let momentoInicio = 0;
    let offsetInicial = 0;
    let pausadoEm = 0;
    let tocando = false;
    let arrastandoBarra = false;
    let carregando = false;
    let volumeAntesDoMudo = 1;

    // ---------- UI inicial ----------
    if (capaImg) {
        capaImg.src = imagemInicial;
        capaImg.alt = 'Capa';
    }
    if (tituloEl) tituloEl.textContent = 'Clique para ouvir cada microfone';
    if (descricaoEl) descricaoEl.textContent = '';

    // ---------- botões de faixa ----------
    function criarBotoes() {
        versoesContainer.innerHTML = '';
        faixas.forEach(faixa => {
            const botao = document.createElement('button');
            botao.className = 'btn-versao';
            botao.textContent = faixa.nome;
            botao.setAttribute('data-id', faixa.id);
            botao.addEventListener('click', () => selecionarFaixa(faixa.id));
            versoesContainer.appendChild(botao);
        });
    }

    // ---------- utilitários do player ----------
    function atualizarIconePlay() {
        iconePlay.textContent = tocando ? '❚❚' : '▶';
    }

    function atualizarBotaoAtivo(id) {
        versoesContainer.querySelectorAll('.btn-versao').forEach(botao => {
            botao.classList.toggle('ativo', botao.getAttribute('data-id') === id);
        });
    }

    function atualizarTempoTotal() {
        if (faixaAtual && buffers[faixaAtual.id]) {
            tempoTotalTxt.textContent = formatarTempo(buffers[faixaAtual.id].duration);
        } else {
            tempoTotalTxt.textContent = '00:00';
        }
    }

    function aplicarFaixaNaUI(faixa) {
        faixaAtual = faixa;
        if (tituloEl) tituloEl.textContent = faixa.nome;
        if (descricaoEl) descricaoEl.textContent = faixa.descricao;
        if (capaImg) {
            capaImg.src = faixa.imagem;
            capaImg.alt = faixa.nome;
        }
        atualizarBotaoAtivo(faixa.id);
    }

    function sincronizarSliderVolume(valor) {
        if (volumeSlider) volumeSlider.value = Math.round(valor * 100);
        if (btnMudo) {
            btnMudo.textContent = valor === 0 ? '🔇' : (valor < 0.5 ? '🔉' : '🔊');
        }
    }

    function criarGanho() {
        garantirAudioContext();
        ganho = audioContext.createGain();
        ganho.gain.value = volumeSlider ? volumeSlider.value / 100 : 1;
        ganho.connect(audioContext.destination);
    }

    // ---------- carregamento dos buffers ----------
    async function carregarBuffers() {
        if (location.protocol === 'file:') {
            console.error(`[${sufixo}] Player precisa ser servido por HTTP (Live Server, python -m http.server, etc).`);
            return;
        }

        carregando = true;
        bufferingEl.classList.add('visivel');

        const ctx = garantirAudioContext();

        await Promise.all(faixas.map(async (faixa) => {
            try {
                const resp = await fetch(faixa.arquivoAudio);
                const arrayBuffer = await resp.arrayBuffer();
                const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
                buffers[faixa.id] = audioBuffer;
            } catch (err) {
                console.warn(`[${sufixo}] Falha ao carregar:`, faixa.arquivoAudio, err);
            }
        }));

        carregando = false;
        bufferingEl.classList.remove('visivel');
        atualizarTempoTotal();
    }

    // ---------- controle de reprodução ----------
    function pararSourceAtual() {
        if (sourceAtual) {
            try { sourceAtual.stop(); } catch (e) {}
            try { sourceAtual.disconnect(); } catch (e) {}
            sourceAtual = null;
        }
    }

    function tempoAtualNoBuffer() {
        if (!tocando) return pausadoEm;
        return offsetInicial + (audioContext.currentTime - momentoInicio);
    }

    function iniciarSource(buffer, offset, quando) {
        if (playerTocando && playerTocando !== playerApi) {
            playerTocando.pausarExterno();
        }
        playerTocando = playerApi;

        const src = audioContext.createBufferSource();
        src.buffer = buffer;
        src.connect(ganho);

        src.onended = () => {
            if (src !== sourceAtual) return;
            tocarProximaFaixa();
        };

        src.start(quando, Math.max(0, Math.min(offset, buffer.duration - 0.01)));

        sourceAtual = src;
        momentoInicio = quando;
        offsetInicial = offset;
        tocando = true;
        atualizarIconePlay();
    }

    function selecionarFaixa(id, opcoes = {}) {
        const faixa = faixas.find(f => f.id === id);
        if (!faixa) return;

        if (!opcoes.forcar && faixaAtual && faixaAtual.id === id) {
            togglePlayPause();
            return;
        }

        if (!buffers[id]) {
            if (carregando) {
                const esperar = setInterval(() => {
                    if (buffers[id]) {
                        clearInterval(esperar);
                        selecionarFaixa(id, opcoes);
                    }
                }, 50);
            } else {
                console.warn(`[${sufixo}] Buffer não carregado:`, id);
            }
            return;
        }

        let offset;
        if (opcoes.reiniciar || !faixaAtual) {
            offset = 0;
        } else {
            offset = tempoAtualNoBuffer();
        }

        const dur = buffers[id].duration;
        if (offset >= dur) offset = 0;

        aplicarFaixaNaUI(faixa);
        atualizarTempoTotal();

        garantirAudioContext();
        if (audioContext.state === 'suspended') audioContext.resume();

        const agora = audioContext.currentTime + 0.02;

        if (sourceAtual) {
            try { sourceAtual.stop(agora); } catch (e) {}
            const ref = sourceAtual;
            setTimeout(() => { try { ref.disconnect(); } catch (e) {} }, 100);
        }

        iniciarSource(buffers[id], offset, agora);
    }

    function togglePlayPause() {
        garantirAudioContext();
        if (audioContext.state === 'suspended') audioContext.resume();

        if (!faixaAtual) {
            const primeira = faixas[0];
            if (!buffers[primeira.id]) {
                const esperar = setInterval(() => {
                    if (buffers[primeira.id]) {
                        clearInterval(esperar);
                        aplicarFaixaNaUI(primeira);
                        atualizarTempoTotal();
                        iniciarSource(buffers[primeira.id], 0, audioContext.currentTime + 0.02);
                    }
                }, 50);
                return;
            }
            aplicarFaixaNaUI(primeira);
            atualizarTempoTotal();
            iniciarSource(buffers[primeira.id], 0, audioContext.currentTime + 0.02);
            return;
        }

        if (tocando) {
            pausadoEm = tempoAtualNoBuffer();
            pararSourceAtual();
            tocando = false;
            atualizarIconePlay();
            if (playerTocando === playerApi) playerTocando = null;
        } else {
            if (!buffers[faixaAtual.id]) return;
            iniciarSource(buffers[faixaAtual.id], pausadoEm, audioContext.currentTime + 0.02);
        }
    }

    function tocarProximaFaixa() {
        if (!faixaAtual) return;
        const idx = faixas.findIndex(f => f.id === faixaAtual.id);
        const proxima = faixas[(idx + 1) % faixas.length];
        selecionarFaixa(proxima.id, { forcar: true, reiniciar: true });
    }

    // ---------- barra de progresso ----------
    function loopProgresso() {
        if (tocando && faixaAtual && buffers[faixaAtual.id] && !arrastandoBarra) {
            const dur = buffers[faixaAtual.id].duration;
            const t = Math.min(tempoAtualNoBuffer(), dur);
            barraProgresso.value = (t / dur) * 100;
            tempoAtualTxt.textContent = formatarTempo(t);
        }
        requestAnimationFrame(loopProgresso);
    }
    requestAnimationFrame(loopProgresso);

    barraProgresso.addEventListener('input', () => {
        arrastandoBarra = true;
        if (faixaAtual && buffers[faixaAtual.id]) {
            const dur = buffers[faixaAtual.id].duration;
            const t = (barraProgresso.value / 100) * dur;
            tempoAtualTxt.textContent = formatarTempo(t);
        }
    });

    barraProgresso.addEventListener('change', () => {
        arrastandoBarra = false;
        if (!faixaAtual || !buffers[faixaAtual.id]) return;

        const dur = buffers[faixaAtual.id].duration;
        const t = (barraProgresso.value / 100) * dur;
        pausadoEm = t;

        if (tocando) {
            const agora = audioContext.currentTime + 0.02;
            if (sourceAtual) { try { sourceAtual.stop(agora); } catch (e) {} }
            iniciarSource(buffers[faixaAtual.id], t, agora);
        }
    });

    // ---------- volume ----------
    if (volumeSlider) {
        volumeSlider.addEventListener('input', () => {
            if (!ganho) criarGanho();
            const v = volumeSlider.value / 100;
            ganho.gain.value = v;
            sincronizarSliderVolume(v);
        });
    }

    if (btnMudo) {
        btnMudo.addEventListener('click', () => {
            if (!ganho) criarGanho();
            if (ganho.gain.value > 0) {
                volumeAntesDoMudo = ganho.gain.value;
                ganho.gain.value = 0;
                sincronizarSliderVolume(0);
            } else {
                ganho.gain.value = volumeAntesDoMudo || 1;
                sincronizarSliderVolume(ganho.gain.value);
            }
        });
    }

    btnPlayPause.addEventListener('click', togglePlayPause);

    // ---------- API pública ----------
    const playerApi = {
        sufixo,
        pausarExterno() {
            if (tocando) {
                pausadoEm = tempoAtualNoBuffer();
                pararSourceAtual();
                tocando = false;
                atualizarIconePlay();
            }
        },
        selecionarFaixa,
        togglePlayPause
    };

    // ---------- inicialização ----------
    criarGanho();
    criarBotoes();
    sincronizarSliderVolume(volumeSlider ? volumeSlider.value / 100 : 1);
    atualizarIconePlay();
    carregarBuffers();

    faixas.forEach(f => { const img = new Image(); img.src = f.imagem; });

    return playerApi;
}

// ============================================
// CRIA TODOS OS PLAYERS
// ============================================
players = GRAVACOES.map(criarPlayer);

// ============================================
// ATALHOS DE TECLADO GLOBAIS
// ============================================
document.addEventListener('keydown', (e) => {
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;

    const playerAlvo = playerTocando || players[0];
    if (!playerAlvo) return;

    switch (e.code) {
        case 'Space':
            e.preventDefault();
            playerAlvo.togglePlayPause();
            break;

        case 'ArrowUp':
        case 'ArrowDown': {
            const slider = document.getElementById(`volume-${playerAlvo.sufixo}`);
            if (slider) {
                e.preventDefault();
                const delta = e.code === 'ArrowUp' ? 5 : -5;
                slider.value = Math.max(0, Math.min(100, Number(slider.value) + delta));
                slider.dispatchEvent(new Event('input'));
            }
            break;
        }

        default:
            if (e.code.startsWith('Digit')) {
                const idx = parseInt(e.code.replace('Digit', ''), 10) - 1;
                const cfg = GRAVACOES.find(g => g.sufixo === playerAlvo.sufixo);
                if (cfg && cfg.faixas[idx]) {
                    e.preventDefault();
                    playerAlvo.selecionarFaixa(cfg.faixas[idx].id);
                }
            }
    }
});
// ============================================
// GALERIA COMPARTILHADA
// ============================================
const dialogGaleria = document.getElementById('dialogGaleria');
const btnFecharGaleria = document.getElementById('btnFecharGaleria');
const btnAnterior = document.getElementById('btnAnterior');
const btnProximo = document.getElementById('btnProximo');
const imagemGaleria = document.getElementById('imagemGaleria');
const contadorGaleria = document.getElementById('contadorGaleria');

let galeriaAtiva = [];
let indiceGaleria = 0;

function renderizarImagemGaleria() {
    if (!galeriaAtiva.length) return;
    imagemGaleria.src = galeriaAtiva[indiceGaleria];
    imagemGaleria.alt = `Foto ${indiceGaleria + 1} de ${galeriaAtiva.length}`;
    contadorGaleria.textContent = `${indiceGaleria + 1} / ${galeriaAtiva.length}`;
}

function abrirGaleria(lista) {
    if (!lista || !lista.length) return;
    galeriaAtiva = lista;
    indiceGaleria = 0;
    renderizarImagemGaleria();
    if (typeof dialogGaleria.showModal === 'function') {
        dialogGaleria.showModal();
    } else {
        dialogGaleria.setAttribute('open', '');
    }
}

function fecharGaleria() {
    if (typeof dialogGaleria.close === 'function') {
        dialogGaleria.close();
    } else {
        dialogGaleria.removeAttribute('open');
    }
}

function irParaAnterior() {
    if (!galeriaAtiva.length) return;
    indiceGaleria = (indiceGaleria - 1 + galeriaAtiva.length) % galeriaAtiva.length;
    renderizarImagemGaleria();
}

function irParaProximo() {
    if (!galeriaAtiva.length) return;
    indiceGaleria = (indiceGaleria + 1) % galeriaAtiva.length;
    renderizarImagemGaleria();
}

btnFecharGaleria.addEventListener('click', fecharGaleria);
btnAnterior.addEventListener('click', irParaAnterior);
btnProximo.addEventListener('click', irParaProximo);

dialogGaleria.addEventListener('click', (e) => {
    if (e.target === dialogGaleria) fecharGaleria();
});

dialogGaleria.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); irParaAnterior(); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); irParaProximo(); }
    else if (e.key === 'Escape') { e.preventDefault(); fecharGaleria(); }
});

// Conecta o botão "Ver galeria" de cada gravação à sua lista
GRAVACOES.forEach(cfg => {
    const btn = document.getElementById(`btnGaleria-${cfg.sufixo}`);
    if (btn) {
        btn.addEventListener('click', () => abrirGaleria(cfg.galeria || []));
    }
});