const discoverBtn = document.getElementById("discoverBtn");
const birthdateInput = document.getElementById("birthdate");
const result = document.getElementById("result");

discoverBtn.addEventListener("click", () => {
    const birthdate = birthdateInput.value;

    if (!birthdate) {
        result.innerHTML = `
            <p class="error">🌙 Escolha sua data de nascimento.</p>
        `;
        return;
    }

    const date = new Date(birthdate + "T00:00:00");

    const day = date.getDate();
    const month = date.getMonth() + 1;

    const sign = getZodiacSign(day, month);

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
                <p>${sign.description}</p>
            </div>

            <div class="description">
                <h3>❤️ No amor</h3>
                <p>${sign.love}</p>
            </div>

            <div class="description">
                <h3>💼 No trabalho</h3>
                <p>${sign.work}</p>
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
            description: "Determinado, energético e cheio de iniciativa. Gosta de desafios e costuma agir com coragem.",
            love: "Intenso e direto. Quando se interessa por alguém, costuma demonstrar seus sentimentos com bastante energia.",
            work: "Gosta de desafios, liderança e situações que permitam tomar iniciativa."
        };
    }

    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return {
            name: "Touro",
            symbol: "♉",
            period: "20 de abril — 20 de maio",
            element: "Terra",
            planet: "Vênus",
            description: "Paciente, leal e determinado. Valoriza estabilidade e conforto.",
            love: "Valoriza segurança, confiança e relações construídas com calma.",
            work: "Persistente e dedicado. Prefere construir resultados sólidos ao longo do tempo."
        };
    }

    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return {
            name: "Gêmeos",
            symbol: "♊",
            period: "21 de maio — 20 de junho",
            element: "Ar",
            planet: "Mercúrio",
            description: "Curioso, comunicativo e inteligente. Adora aprender e trocar ideias.",
            love: "Precisa de conversa, conexão mental e espontaneidade.",
            work: "Se destaca em comunicação, criatividade e atividades variadas."
        };
    }

    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return {
            name: "Câncer",
            symbol: "♋",
            period: "21 de junho — 22 de julho",
            element: "Água",
            planet: "Lua",
            description: "Sensível, protetor e muito ligado às pessoas que ama.",
            love: "Valoriza carinho, confiança e vínculos emocionais profundos.",
            work: "Intuitivo e cuidadoso, especialmente em ambientes que envolvem pessoas."
        };
    }

    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return {
            name: "Leão",
            symbol: "♌",
            period: "23 de julho — 22 de agosto",
            element: "Fogo",
            planet: "Sol",
            description: "Confiante, criativo e cheio de personalidade.",
            love: "Gosta de demonstrar carinho e também de se sentir valorizado.",
            work: "Tem facilidade para liderança, criatividade e apresentação de ideias."
        };
    }

    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return {
            name: "Virgem",
            symbol: "♍",
            period: "23 de agosto — 22 de setembro",
            element: "Terra",
            planet: "Mercúrio",
            description: "Observador, organizado e cuidadoso com os detalhes.",
            love: "Demonstra carinho principalmente através de atitudes e cuidado.",
            work: "Analítico, organizado e excelente para resolver problemas."
        };
    }

    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return {
            name: "Libra",
            symbol: "♎",
            period: "23 de setembro — 22 de outubro",
            element: "Ar",
            planet: "Vênus",
            description: "Diplomático, sociável e apaixonado por equilíbrio.",
            love: "Valoriza parceria, diálogo e harmonia.",
            work: "Tem facilidade para negociação, comunicação e trabalho em equipe."
        };
    }

    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return {
            name: "Escorpião",
            symbol: "♏",
            period: "23 de outubro — 21 de novembro",
            element: "Água",
            planet: "Plutão",
            description: "Intenso, misterioso e extremamente determinado.",
            love: "Valoriza confiança, intensidade e conexões profundas.",
            work: "Persistente e estratégico. Não costuma desistir facilmente dos seus objetivos."
        };
    }

    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return {
            name: "Sagitário",
            symbol: "♐",
            period: "22 de novembro — 21 de dezembro",
            element: "Fogo",
            planet: "Júpiter",
            description: "Aventureiro, otimista e independente.",
            love: "Gosta de liberdade, diversão e relações que permitam crescer juntos.",
            work: "Criativo, otimista e motivado por novos desafios."
        };
    }

    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return {
            name: "Capricórnio",
            symbol: "♑",
            period: "22 de dezembro — 19 de janeiro",
            element: "Terra",
            planet: "Saturno",
            description: "Responsável, disciplinado e ambicioso.",
            love: "Prefere construir relações estáveis e baseadas em confiança.",
            work: "Focado, organizado e determinado a alcançar seus objetivos."
        };
    }

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return {
            name: "Aquário",
            symbol: "♒",
            period: "20 de janeiro — 18 de fevereiro",
            element: "Ar",
            planet: "Urano",
            description: "Criativo, independente e original.",
            love: "Valoriza liberdade, amizade e conexão intelectual.",
            work: "Inovador e cheio de ideias diferentes."
        };
    }

    return {
        name: "Peixes",
        symbol: "♓",
        period: "19 de fevereiro — 20 de março",
        element: "Água",
        planet: "Netuno",
        description: "Sensível, intuitivo e imaginativo.",
        love: "Romântico, carinhoso e muito ligado à conexão emocional.",
        work: "Criativo e intuitivo, especialmente em atividades que envolvem imaginação."
    };
}