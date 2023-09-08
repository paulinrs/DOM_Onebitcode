function addInput(){
    const ul = document.getElementById('inputs')
    //input Nome
    const newLi = document.createElement('li')
    newLi.className = 'list-item'
    newLi.innerText = 'Nome: '

    const newInput = document.createElement('input')
    newInput.type = 'text'
    //input Senha
    const newLi2 = document.createElement('li')
    newLi2.className = 'list-item'
    newLi2.innerText = 'Senha: '

    const newInput2 = document.createElement('input')
    newInput2.type = 'password'


    newLi.appendChild(newInput)
    newLi2.appendChild(newInput2)
    
    ul.appendChild(newLi)//nome
    ul.appendChild(newLi2)//senha
}