const discoverBtn = document.getElementById("discoverBtn");
const birthdateInput = document.getElementById("birthdate");
const result = document.getElementById("result");

discoverBtn.addEventListener("click", () => {

    const birthdate = birthdateInput.value;

    // Verifica se a pessoa escolheu uma data
    if (!birthdate) {
        result.innerHTML = `
            <p class="error">🌙 Escolha sua data de nascimento.</p>
        `;
        return;
    }

    const date = new Date(birthdate + "T00:00:00");

    const day = date.getDate();
    const month = date.getMonth() + 1;

    // Descobre o signo
    const sign = getZodiacSign(day, month);

    // Pega a mensagem do dia
    const mensagem = getMensagemDoDia(sign.name);

    // Mostra o resultado
    result.innerHTML = `
        <div class="sign-result">

            <div class="sign-symbol">
                ${sign.symbol}
            </div>

            <h2>${sign.name}</h2>

            <p class="period">${sign.period}</p>

            <div class="info-grid">

                <div class="info-box">
                    <span>🔥</span>
                    <small>Elemento</small>
                    <strong>${sign.element}</strong>
                </div>

                <div class="info-box">
                    <span>🪐</span>
                    <small>Planeta</small>
                    <strong>${sign.planet}</strong>
                </div>

            </div>

            <div class="description">

                <h3>✨ Personalidade</h3>

                <p>
                    ${sign.description}
                </p>

            </div>

            <div class="description">

                <h3>❤️ No amor</h3>

                <p>
                    ${sign.love}
                </p>

            </div>

            <div class="description">

                <h3>💼 No trabalho</h3>

                <p>
                    ${sign.work}
                </p>

            </div>

            <div class="description">

                <h3>💰 Dinheiro</h3>

                <p>
                    ${sign.money}
                </p>

            </div>

            <div class="description daily-message">

                <h3>🔮 Mensagem do dia</h3>

                <p>
                    ${mensagem}
                </p>

            </div>

        </div>
    `;
});


function getZodiacSign(day, month) {

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {

        return {
            name: "Áries",
            symbol: "♈",
            period: "21 de março — 19 de abril",
            element: "Fogo",
            planet: "Marte",

            description:
                "Determinado, energético e cheio de iniciativa. Gosta de desafios e costuma agir com coragem.",

            love:
                "Intenso e direto. Quando se interessa por alguém, costuma demonstrar seus sentimentos com bastante energia.",

            work:
                "Gosta de desafios, liderança e situações que permitam tomar iniciativa.",

            money:
                "Tem iniciativa para buscar novas oportunidades, mas deve evitar decisões impulsivas com dinheiro."
        };
    }


    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {

        return {
            name: "Touro",
            symbol: "♉",
            period: "20 de abril — 20 de maio",
            element: "Terra",
            planet: "Vênus",

            description:
                "Paciente, leal e determinado. Valoriza estabilidade, conforto e segurança.",

            love:
                "Valoriza segurança, confiança e relações construídas com calma.",

            work:
                "Persistente e dedicado. Prefere construir resultados sólidos ao longo do tempo.",

            money:
                "Tem facilidade para buscar estabilidade financeira e costuma pensar bastante antes de gastar."
        };
    }


    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {

        return {
            name: "Gêmeos",
            symbol: "♊",
            period: "21 de maio — 20 de junho",
            element: "Ar",
            planet: "Mercúrio",

            description:
                "Curioso, comunicativo e inteligente. Adora aprender e trocar ideias.",

            love:
                "Precisa de conversa, conexão mental e espontaneidade.",

            work:
                "Se destaca em comunicação, criatividade e atividades variadas.",

            money:
                "Pode encontrar oportunidades através de contatos e ideias, mas deve evitar gastar por impulso."
        };
    }


    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {

        return {
            name: "Câncer",
            symbol: "♋",
            period: "21 de junho — 22 de julho",
            element: "Água",
            planet: "Lua",

            description:
                "Sensível, protetor e muito ligado às pessoas que ama.",

            love:
                "Valoriza carinho, confiança e vínculos emocionais profundos.",

            work:
                "Intuitivo e cuidadoso, especialmente em ambientes que envolvem pessoas.",

            money:
                "Prefere segurança e estabilidade. É um bom momento para organizar gastos e pensar no futuro."
        };
    }


    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {

        return {
            name: "Leão",
            symbol: "♌",
            period: "23 de julho — 22 de agosto",
            element: "Fogo",
            planet: "Sol",

            description:
                "Confiante, criativo e cheio de personalidade.",

            love:
                "Gosta de demonstrar carinho e também de se sentir valorizado.",

            work:
                "Tem facilidade para liderança, criatividade e apresentação de ideias.",

            money:
                "Pode gostar de aproveitar o que conquista, mas deve equilibrar prazer e planejamento."
        };
    }


    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {

        return {
            name: "Virgem",
            symbol: "♍",
            period: "23 de agosto — 22 de setembro",
            element: "Terra",
            planet: "Mercúrio",

            description:
                "Observador, organizado e cuidadoso com os detalhes.",

            love:
                "Demonstra carinho principalmente através de atitudes e cuidado.",

            work:
                "Analítico, organizado e excelente para resolver problemas.",

            money:
                "Organização é seu ponto forte. Planejar os gastos pode trazer mais tranquilidade."
        };
    }


    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {

        return {
            name: "Libra",
            symbol: "♎",
            period: "23 de setembro — 22 de outubro",
            element: "Ar",
            planet: "Vênus",

            description:
                "Diplomático, sociável e apaixonado por equilíbrio.",

            love:
                "Valoriza parceria, diálogo e harmonia.",

            work:
                "Tem facilidade para negociação, comunicação e trabalho em equipe.",

            money:
                "Pode gastar com coisas que trazem beleza e conforto. Hoje, equilíbrio será importante."
        };
    }


    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {

        return {
            name: "Escorpião",
            symbol: "♏",
            period: "23 de outubro — 21 de novembro",
            element: "Água",
            planet: "Plutão",

            description:
                "Intenso, misterioso e extremamente determinado.",

            love:
                "Valoriza confiança, intensidade e conexões profundas.",

            work:
                "Persistente e estratégico. Não costuma desistir facilmente dos seus objetivos.",

            money:
                "É estratégico quando tem um objetivo. Evite decisões financeiras motivadas apenas pela emoção."
        };
    }


    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {

        return {
            name: "Sagitário",
            symbol: "♐",
            period: "22 de novembro — 21 de dezembro",
            element: "Fogo",
            planet: "Júpiter",

            description:
                "Aventureiro, otimista e independente.",

            love:
                "Gosta de liberdade, diversão e relações que permitam crescer juntos.",

            work:
                "Criativo, otimista e motivado por novos desafios.",

            money:
                "Pode ter boas ideias para aumentar seus ganhos, mas deve controlar a vontade de gastar."
        };
    }


    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {

        return {
            name: "Capricórnio",
            symbol: "♑",
            period: "22 de dezembro — 19 de janeiro",
            element: "Terra",
            planet: "Saturno",

            description:
                "Responsável, disciplinado e ambicioso.",

            love:
                "Prefere construir relações estáveis e baseadas em confiança.",

            work:
                "Focado, organizado e determinado a alcançar seus objetivos.",

            money:
                "Tem perfil de planejamento e pode conseguir bons resultados quando mantém seus objetivos financeiros."
        };
    }


    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {

        return {
            name: "Aquário",
            symbol: "♒",
            period: "20 de janeiro — 18 de fevereiro",
            element: "Ar",
            planet: "Urano",

            description:
                "Criativo, independente e original.",

            love:
                "Valoriza liberdade, amizade e conexão intelectual.",

            work:
                "Inovador e cheio de ideias diferentes.",

            money:
                "Novas ideias podem abrir oportunidades. Evite abandonar o planejamento por querer experimentar algo novo."
        };
    }


    return {
        name: "Peixes",
        symbol: "♓",
        period: "19 de fevereiro — 20 de março",
        element: "Água",
        planet: "Netuno",

        description:
            "Sensível, intuitivo e imaginativo.",

        love:
            "Romântico, carinhoso e muito ligado à conexão emocional.",

        work:
            "Criativo e intuitivo, especialmente em atividades que envolvem imaginação.",

        money:
            "Sua intuição pode ajudar, mas procure analisar os fatos antes de tomar decisões financeiras."
    };
}


/*
========================================
        MENSAGEM DO DIA
========================================
*/

function getMensagemDoDia(signo) {

    const mensagens = {

        "Áries": [
            "Hoje é um bom dia para tomar iniciativa. Confie na sua capacidade e não tenha medo de dar o primeiro passo.",
            "Uma oportunidade pode surgir quando você menos espera. Observe os sinais e aja com confiança.",
            "Evite agir por impulso hoje. Pense por alguns minutos antes de tomar uma decisão importante."
        ],

        "Touro": [
            "Tenha paciência. Algumas coisas precisam de tempo para dar os resultados que você espera.",
            "Hoje é um bom momento para cuidar da sua estabilidade e valorizar aquilo que você já conquistou.",
            "Uma pequena decisão tomada hoje pode trazer mais segurança para o seu futuro."
        ],

        "Gêmeos": [
            "Uma conversa pode trazer uma oportunidade inesperada. Esteja aberto para ouvir e trocar ideias.",
            "Sua criatividade está em alta. Aproveite o dia para aprender algo novo ou colocar uma ideia em prática.",
            "Nem toda resposta precisa ser encontrada imediatamente. Às vezes, observar é tão importante quanto falar."
        ],

        "Câncer": [
            "Hoje é um bom dia para ouvir sua intuição, mas sem esquecer de cuidar de você também.",
            "Uma pessoa próxima pode precisar da sua atenção. Um simples gesto pode fazer muita diferença.",
            "Não carregue sozinho aquilo que pode ser compartilhado. Permita-se pedir ajuda quando precisar."
        ],

        "Leão": [
            "Não tenha medo de mostrar seu potencial. Hoje pode ser um ótimo dia para deixar sua criatividade aparecer.",
            "Uma atitude confiante pode abrir uma porta importante. Acredite mais no seu próprio valor.",
            "Você não precisa provar nada para ninguém. Faça o seu melhor e deixe seus resultados falarem por você."
        ],

        "Virgem": [
            "Organize suas prioridades e não tente resolver tudo ao mesmo tempo. Um passo de cada vez.",
            "Um detalhe que você percebe hoje pode fazer toda a diferença em uma decisão importante.",
            "Permita-se descansar. Nem tudo precisa estar perfeito para que você possa seguir em frente."
        ],

        "Libra": [
            "Uma escolha pode exigir equilíbrio entre razão e emoção. Não tenha pressa para decidir.",
            "Hoje é um bom dia para resolver pequenos conflitos através de uma conversa tranquila.",
            "Valorize as relações que trazem paz e não tenha medo de se afastar do que tira sua tranquilidade."
        ],

        "Escorpião": [
            "Confie na sua percepção, mas não deixe que a desconfiança controle suas decisões.",
            "Algo que parecia distante pode começar a se aproximar. Continue trabalhando silenciosamente pelos seus objetivos.",
            "Hoje pode ser um dia de transformação. Deixe para trás aquilo que já não combina com quem você está se tornando."
        ],

        "Sagitário": [
            "Uma nova possibilidade pode despertar sua curiosidade. Explore, mas não esqueça de planejar seus próximos passos.",
            "Hoje é um bom dia para sair da rotina e buscar novas experiências.",
            "Mantenha o otimismo, mas lembre-se: grandes sonhos também precisam de pequenas ações."
        ],

        "Capricórnio": [
            "Continue construindo seu caminho. Mesmo que o resultado ainda não apareça, seu esforço não está sendo perdido.",
            "Uma decisão prática pode aproximá-lo de um objetivo importante.",
            "Hoje é um bom dia para organizar planos, finanças e prioridades."
        ],

        "Aquário": [
            "Uma ideia diferente pode se transformar em uma oportunidade. Não tenha medo de pensar fora do comum.",
            "Hoje você pode enxergar uma situação de uma maneira completamente diferente. Confie na sua criatividade.",
            "Nem todo mundo precisa entender seus planos. Algumas ideias precisam de tempo para amadurecer."
        ],

        "Peixes": [
            "Sua sensibilidade pode ajudá-lo a perceber algo que outras pessoas não estão enxergando.",
            "Hoje é um bom dia para ouvir sua intuição, mas mantenha os pés no chão antes de tomar decisões.",
            "Reserve alguns minutos para você. Às vezes, o silêncio ajuda a encontrar respostas."
        ]
    };

    const lista = mensagens[signo];

    // Usa o dia atual para escolher a mensagem.
    // Assim, a mensagem muda automaticamente ao longo dos dias.
    const hoje = new Date();

    const numeroDoDia =
        hoje.getDate() +
        hoje.getMonth() +
        hoje.getFullYear();

    const indice = numeroDoDia % lista.length;

    return lista[indice];
}
