function createLabel(text, htmlFor){
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput(id, value, name, type = 'text', placeholder = '') {
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input

}

//criando label e input para criar a nova tecnologia 

const addTechBtn =  document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click', function(ev){
    const stackInputs = document.getElementById
} )












//"setar" é comum em contextos informais de programação e é uma maneira de expressar que você está atribuindo um valor a uma variável ou propriedade. Em contextos mais formais ou técnicos, você pode ouvir termos como "atribuir" 