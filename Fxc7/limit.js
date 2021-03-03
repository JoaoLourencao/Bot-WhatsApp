const limitend = (pushname2) => {
        return`*maaf ${pushname2} limit hari ini habis*\n*limit di reset setiap jam 12:00 WIB TENGAH MALAM*`
}

const limitcount = (limitCounts) => {
        return`
*「 LIMITE CONTA」*
sisa limit anda : ${limitCounts}

NOTA : Se Terminar, Voce Pode Usar Novamente Amanha`
}
exports.limitend = limitend
exports.limitcount = limitcount