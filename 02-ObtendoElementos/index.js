function show() {
//obter vários elementos em um HTMLColelection
const listElements = document.getElementsByTagName('lu')
console.log(listElements)

const listClass = document.getElementsByClassName('contact-input')
console.log(listClass)

//Obter vários elementos em uma NodeList
const name = document.getElementsByName('contact2')
console.log(name)

const selectAll = document.querySelectorAll('#contact-list > li >label')
console.log(selectAll)

//Obtendo um único elemento

const contactList = document.getElementById('contact-list')
console.log(contactList)

const select = document.querySelector('#contact-list > li')
console.log(select)
}