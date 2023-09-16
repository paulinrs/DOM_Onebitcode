function register(ev) {
    console.log(ev)
    const userName = ev.currentTarget.children.userName
    const password = ev.currentTarget.children.password
    const passwordConfirmation = ev.currentTarget.children.passwordConfirmation

    if (password === passwordConfirmation) {
        alert('Usuário')
    }
}
const button = document.getElementById('register-button')

button.addEventListener('click', register)