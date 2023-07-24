const ingresso = []

const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = '22 oct 2023'

function countDown(){
    const dataLanc = new Date (lancamento)
    const hoje = new Date()
    
    const segTotal = (dataLanc - hoje)/1000

    const finalDias = Math.floor(segTotal/60/60/24)
    const finalHoras = Math.floor(segTotal /60/60)%24
    const finalMinutos = Math.floor(segTotal / 60)%60
    const finalSegundos = Math.floor(segTotal)%60
    
    dia.innerHTML =finalDias
    hora.innerHTML = formatoTempo (finalHoras)
    minuto.innerHTML = formatoTempo (finalMinutos)
    segundo.innerHTML = formatoTempo(finalSegundos)
}
function formatoTempo (tempo){
    return tempo < 10? `0${tempo}`:tempo
}

countDown()
setInterval(countDown, 100)

function checkKeyboardCode(){
    document.addEventListener ('keydown', (event) => {
        var name = event.key
        var code = event.code

        alert(`Tecla pressionada ${name} \r\n key code: ${code}`)
    }, false)
}
function highlightCard(selector) {
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
  }2
function addkeyboardEventListeners()
{
    document.addEventListener('keydown', (event) => {
        var ingresso1 = document.getElementById("qui")
        var ingresso2 = document.getElementById("sex")
        var ingresso3 = document.getElementById("sab")
        var ingresso4 = document.getElementById("dom")

        var code = event.code

        if(code =='Digit1'){
            ingresso1.classList.toggle("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.remove("card-highlight")
        }
        if(code =='Digit2'){
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.toggle("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.remove("card-highlight")
        }
        if(code =='Digit3'){
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.toggle("card-highlight")
            ingresso4.classList.remove("card-highlight")
        }
        if(code =='Digit4'){
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.toggle("card-highlight")
        }
    }, false)

}
selectCard = (selector) =>{
    var element = document.querySelector(selector)
    element.classList.toggle("card-selected")
    if(ingresso.includes(selector)) ingresso.pop(selector)
    else ingresso.push(selector)
}

showSelectedCards = () =>
{
    if(ingresso.length > 0) alert("Ingressos Selecionados:" + ingresso)
}
addkeyboardEventListeners()