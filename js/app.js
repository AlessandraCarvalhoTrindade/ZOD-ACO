const discoverBtn = document.getElementById("discoverBtn");
const birthdateInput = document.getElementById("birthdate");
const result = document.getElementById("result");

discoverBtn.addEventListener("click", () => {

    const birthdate = birthdateInput.value;

    if (!birthdate) {
        result.textContent = "🌙 Escolha sua data de nascimento.";
        return;
    }

    const date = new Date(birthdate + "T00:00:00");

    const day = date.getDate();
    const month = date.getMonth() + 1;

    const sign = getZodiacSign(day, month);

    result.innerHTML = `
        <strong>${sign.symbol} ${sign.name}</strong>
        <br>
        <span>${sign.description}</span>
    `;
});


function getZodiacSign(day, month) {

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return {
            name: "Áries",
            symbol: "♈",
            description: "Determinado, energético e cheio de iniciativa."
        };
    }

    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return {
            name: "Touro",
            symbol: "♉",
            description: "Paciente, leal e determinado."
        };
    }

    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return {
            name: "Gêmeos",
            symbol: "♊",
            description: "Curioso, comunicativo e inteligente."
        };
    }

    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return {
            name: "Câncer",
            symbol: "♋",
            description: "Sensível, protetor e muito ligado às pessoas."
        };
    }

    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return {
            name: "Leão",
            symbol: "♌",
            description: "Confiante, criativo e cheio de personalidade."
        };
    }

    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return {
            name: "Virgem",
            symbol: "♍",
            description: "Observador, organizado e cuidadoso."
        };
    }

    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return {
            name: "Libra",
            symbol: "♎",
            description: "Diplomático, sociável e apaixonado por equilíbrio."
        };
    }

    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return {
            name: "Escorpião",
            symbol: "♏",
            description: "Intenso, misterioso e extremamente determinado."
        };
    }

    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return {
            name: "Sagitário",
            symbol: "♐",
            description: "Aventureiro, otimista e independente."
        };
    }

    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return {
            name: "Capricórnio",
            symbol: "♑",
            description: "Responsável, disciplinado e ambicioso."
        };
    }

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return {
            name: "Aquário",
            symbol: "♒",
            description: "Criativo, independente e original."
        };
    }

    return {
        name: "Peixes",
        symbol: "♓",
        description: "Sensível, intuitivo e imaginativo."
    };
}