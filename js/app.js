const discoverBtn = document.getElementById("discoverBtn");
const birthdateInput = document.getElementById("birthdate");
const result = document.getElementById("result");

const signos = {
    aries: {
        name: "Áries",
        symbol: "♈",
        period: "21 de março — 19 de abril",
        element: "Fogo",
        planet: "Marte",
        profile: "Áries é um signo determinado, corajoso e cheio de iniciativa. Pessoas desse signo costumam gostar de desafios, agir com espontaneidade e buscar novos caminhos.",
        love: "No amor, valoriza paixão, sinceridade e intensidade. Gosta de relações que mantenham a emoção e a parceria.",
        work: "No trabalho, costuma se destacar pela iniciativa, coragem e disposição para assumir desafios.",
        money: "No dinheiro, pode ser impulsivo. Planejamento ajuda a transformar sua energia em bons resultados.",
        message: "Hoje é um bom dia para tomar iniciativa e não deixar uma oportunidade passar."
    },

    touro: {
        name: "Touro",
        symbol: "♉",
        period: "20 de abril — 20 de maio",
        element: "Terra",
        planet: "Vênus",
        profile: "Touro é conhecido pela estabilidade, determinação e valorização do conforto. É um signo paciente e persistente.",
        love: "No amor, busca segurança, carinho e estabilidade. Valoriza relações construídas com confiança.",
        work: "No trabalho, demonstra responsabilidade, persistência e grande capacidade de manter o foco.",
        money: "Costuma valorizar segurança financeira e prefere construir seus resultados aos poucos.",
        message: "Tenha paciência com seus planos. O que é construído com calma pode durar muito tempo."
    },

    gemeos: {
        name: "Gêmeos",
        symbol: "♊",
        period: "21 de maio — 20 de junho",
        element: "Ar",
        planet: "Mercúrio",
        profile: "Gêmeos é comunicativo, curioso e adaptável. Gosta de aprender, conversar e descobrir coisas novas.",
        love: "No amor, precisa de diálogo, diversão e conexão mental. Conversas interessantes são muito importantes.",
        work: "No trabalho, pode se destacar pela comunicação, criatividade e facilidade para aprender.",
        money: "É importante evitar decisões financeiras tomadas por impulso ou entusiasmo momentâneo.",
        message: "Uma conversa pode trazer hoje uma oportunidade que você não esperava."
    },

    cancer: {
        name: "Câncer",
        symbol: "♋",
        period: "21 de junho — 22 de julho",
        element: "Água",
        planet: "Lua",
        profile: "Câncer é sensível, intuitivo e muito ligado às pessoas que ama. Valoriza segurança emocional e vínculos verdadeiros.",
        love: "No amor, procura carinho, confiança e segurança emocional. Quando se sente seguro, entrega-se profundamente.",
        work: "No trabalho, demonstra dedicação, responsabilidade e sensibilidade para lidar com outras pessoas.",
        money: "Prefere segurança e tende a pensar no futuro antes de tomar grandes decisões.",
        message: "Confie mais na sua intuição, mas não deixe que o medo impeça você de avançar."
    },

    leao: {
        name: "Leão",
        symbol: "♌",
        period: "23 de julho — 22 de agosto",
        element: "Fogo",
        planet: "Sol",
        profile: "Leão é confiante, criativo e carismático. Gosta de reconhecimento e costuma demonstrar muita generosidade.",
        love: "No amor, gosta de demonstrar sentimentos e receber atenção. Valoriza lealdade e admiração.",
        work: "No trabalho, pode se destacar em posições que permitam liderança, criatividade e expressão.",
        money: "Pode gostar de gastar com aquilo que traz prazer, por isso equilíbrio é importante.",
        message: "Permita que sua confiança fale mais alto que suas inseguranças."
    },

    virgem: {
        name: "Virgem",
        symbol: "♍",
        period: "23 de agosto — 22 de setembro",
        element: "Terra",
        planet: "Mercúrio",
        profile: "Virgem é organizado, observador e dedicado. Costuma prestar atenção aos detalhes e buscar melhorar tudo ao seu redor.",
        love: "No amor, demonstra carinho principalmente por atitudes. Valoriza confiança e estabilidade.",
        work: "No trabalho, destaca-se pela organização, responsabilidade e atenção aos detalhes.",
        money: "Tem facilidade para planejar e pode se beneficiar bastante de organização financeira.",
        message: "Não tente controlar todos os detalhes. Algumas coisas precisam simplesmente acontecer."
    },

    libra: {
        name: "Libra",
        symbol: "♎",
        period: "23 de setembro — 22 de outubro",
        element: "Ar",
        planet: "Vênus",
        profile: "Libra é diplomático, sociável e apaixonado por equilíbrio. Valoriza relações harmoniosas, beleza e justiça. Costuma pensar bastante antes de tomar decisões.",
        love: "No amor, valoriza parceria, diálogo e harmonia. Procura uma relação em que exista respeito e equilíbrio.",
        work: "No trabalho, destaca-se pela comunicação, diplomacia e capacidade de trabalhar bem em equipe.",
        money: "Pode gostar de gastar com coisas bonitas e experiências. Organização ajuda a manter o equilíbrio financeiro.",
        message: "Hoje, uma decisão que parecia difícil pode ficar mais clara quando você ouvir sua própria intuição."
    },

    escorpiao: {
        name: "Escorpião",
        symbol: "♏",
        period: "23 de outubro — 21 de novembro",
        element: "Água",
        planet: "Plutão",
        profile: "Escorpião é intenso, determinado e intuitivo. É um signo profundo, que costuma valorizar confiança e lealdade.",
        love: "No amor, vive os sentimentos intensamente e valoriza conexões profundas.",
        work: "No trabalho, demonstra foco, estratégia e determinação para alcançar seus objetivos.",
        money: "Pode ser bastante estratégico quando possui um objetivo financeiro definido.",
        message: "Não tenha medo de encerrar aquilo que já não combina com a pessoa que você está se tornando."
    },

    sagitario: {
        name: "Sagitário",
        symbol: "♐",
        period: "22 de novembro — 21 de dezembro",
        element: "Fogo",
        planet: "Júpiter",
        profile: "Sagitário é aventureiro, otimista e apaixonado por liberdade. Gosta de aprender e explorar novas possibilidades.",
        love: "No amor, valoriza liberdade, sinceridade e companheirismo.",
        work: "No trabalho, costuma gostar de desafios, aprendizado e ambientes que ofereçam liberdade.",
        money: "Precisa tomar cuidado com gastos motivados pelo desejo de aproveitar o momento.",
        message: "Uma nova experiência pode abrir uma porta para algo muito maior."
    },

    capricornio: {
        name: "Capricórnio",
        symbol: "♑",
        period: "22 de dezembro — 19 de janeiro",
        element: "Terra",
        planet: "Saturno",
        profile: "Capricórnio é responsável, determinado e focado em seus objetivos. Valoriza estabilidade e resultados concretos.",
        love: "No amor, pode demorar para confiar, mas quando se entrega valoriza compromisso e estabilidade.",
        work: "É um signo ligado à disciplina, responsabilidade e construção de uma carreira sólida.",
        money: "Tende a valorizar planejamento e segurança financeira.",
        message: "Continue construindo seu caminho. Mesmo pequenos passos podem levar você muito longe."
    },

    aquario: {
        name: "Aquário",
        symbol: "♒",
        period: "20 de janeiro — 18 de fevereiro",
        element: "Ar",
        planet: "Urano",
        profile: "Aquário é independente, criativo e gosta de ideias diferentes. Valoriza liberdade e inovação.",
        love: "No amor, precisa de espaço, amizade e uma conexão baseada em respeito.",
        work: "No trabalho, pode se destacar pela criatividade, tecnologia e capacidade de pensar diferente.",
        money: "Novas ideias podem ajudar a melhorar sua vida financeira, mas planejamento continua importante.",
        message: "Uma ideia diferente pode ser justamente aquilo que você precisava para mudar sua situação."
    },

    peixes: {
        name: "Peixes",
        symbol: "♓",
        period: "19 de fevereiro — 20 de março",
        element: "Água",
        planet: "Netuno",
        profile: "Peixes é sensível, intuitivo e imaginativo. Possui grande empatia e costuma perceber facilmente o clima ao seu redor.",
        love: "No amor, busca conexão emocional, carinho e compreensão.",
        work: "Pode se destacar em atividades que envolvam criatividade, sensibilidade e ajuda ao próximo.",
        money: "É importante equilibrar generosidade com responsabilidade financeira.",
        message: "Hoje é um bom dia para confiar nos seus sonhos, mas também dar um pequeno passo em direção a eles."
    }
};

function descobrirSigno(dia, mes) {

    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        return signos.aries;
    }

    if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        return signos.touro;
    }

    if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        return signos.gemeos;
    }

    if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        return signos.cancer;
    }

    if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        return signos.leao;
    }

    if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        return signos.virgem;
    }

    if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        return signos.libra;
    }

    if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        return signos.escorpiao;
    }

    if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        return signos.sagitario;
    }

    if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        return signos.capricornio;
    }

    if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        return signos.aquario;
    }

    return signos.peixes;
}

discoverBtn.addEventListener("click", function () {

    const data = birthdateInput.value;

    if (!data) {
        result.innerHTML = '<p class="error">🌙 Escolha sua data de nascimento.</p>';
        return;
    }

    const partes = data.split("-");
    const ano = Number(partes[0]);
    const mes = Number(partes[1]);
    const dia = Number(partes[2]);

    const signo = descobrirSigno(dia, mes);

    result.innerHTML = `
        <div class="sign-result">

            <div class="sign-symbol">${signo.symbol}</div>

            <h2>${signo.name}</h2>

            <p class="period">${signo.period}</p>

            <div class="info-grid">

                <div class="info-box">
                    <span>🔥</span>
                    <small>Elemento</small>
                    <strong>${signo.element}</strong>
                </div>

                <div class="info-box">
                    <span>🪐</span>
                    <small>Planeta</small>
                    <strong>${signo.planet}</strong>
                </div>

            </div>

            <div class="description">

                <h3>🔮 Perfil do signo</h3>

                <p>${signo.profile}</p>

            </div>

            <div class="description">

                <h3>✨ Personalidade</h3>

                <p>${signo.profile}</p>

            </div>

            <div class="description">

                <h3>❤️ No amor</h3>

                <p>${signo.love}</p>

            </div>

            <div class="description">

                <h3>💼 No trabalho</h3>

                <p>${signo.work}</p>

            </div>

            <div class="description">

                <h3>💰 Dinheiro</h3>

                <p>${signo.money}</p>

            </div>

            <div class="description daily-message">

                <h3>🌙 Mensagem do dia</h3>

                <p>${signo.message}</p>

            </div>

        </div>
    `;
});
