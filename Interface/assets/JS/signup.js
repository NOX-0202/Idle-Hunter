const MessageElement = document.getElementsByClassName("Message")

var Elements = {
    nick: document.getElementById('nick'),
    password: document.getElementById('password'),
    passwordAgain: document.getElementById('passwordAgain'),
    email: document.getElementById('email')
}

function formSender (e) {
    e.preventDefault()
    console.log(e)
    MakeRequest('http://localhost:4567/register', {
        nick: document.getElementById('nick').value,
        password: document.getElementById('password').value,
        passwordAgain: document.getElementById('passwordAgain').value,
        email: document.getElementById('email').value
    })
}

function checkNick (){
    const nickCheckElement = document.getElementById("nicknameCheck")
    if (Elements.nick.value.length < 3)
        nickCheckElement.innerHTML = "<span> O Nickname precisa ter mais de 3 caractéres </span>"
    else
        nickCheckElement.innerHTML = ""
}

function checkPasswordEquals (){
    const passwordCheckElement = document.getElementById("checkPasswordEquals")
    
    if (Elements.password.value != Elements.passwordAgain.value)
        passwordCheckElement.innerHTML = "<span> As senhas não coincidem </span>"
    else
        passwordCheckElement.innerHTML = ""
}

document.getElementById("formSignup").addEventListener('submit', formSender)

Elements.nick.addEventListener('keydown', checkNick)
Elements.password.addEventListener('keyup', checkPasswordEquals)
Elements.passwordAgain.addEventListener('keyup', checkPasswordEquals)

