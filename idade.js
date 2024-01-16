function calcidade() {
    let agora = new Date
    let ano = agora.getFullYear()

    let nasc = Number(window.prompt('Em que ano você nasceu?'))
    let idade = ano - nasc

    let saida = document.getElementById('saida')
    saida.innerHTML = `<p>Quem nasceu em <mark>${nasc}</mark> vai completar <mark><strong>${idade}</mark></strong> anos em <u>${ano}</u>.</p>`
}
