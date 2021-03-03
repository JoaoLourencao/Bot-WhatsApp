const limitend = (pushname2) => {
        return`*Desculpe ${pushname2}, limite de solicitações atingido*\n*Retorne daqui 24 hrs*`
}

const limitcount = (limitCounts) => {
        return`
*「 LIMITE CONTA」*
Contas limites : ${limitCounts}

NOTA : Se Terminar, Voce Pode Usar Novamente Amanha`
}
exports.limitend = limitend
exports.limitcount = limitcount