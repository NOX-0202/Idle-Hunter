const MessageElement = document.getElementsByClassName("Message")

var Elements = {
    nick: document.getElementById('nickname'),
    password: document.getElementById('password'),
    passwordAgain: document.getElementById('passwordAgain'),
    email: document.getElementById('email')
}

function formSender (e) {
    e.preventDefault()

    var xhr = new XMLHttpRequest();
    
    let data = {
        nickname: document.getElementById('nickname').value,
        password: document.getElementById('password').value,
        email: document.getElementById('email').value
    } 

    xhr.open('POST', 'http://localhost:4567/register');
    xhr.onload = function(data) {
        console.log('loaded', this.responseText);
    };
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
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

function mouseoverPass(obj) {
    obj = document.getElementById(obj);
    obj.type = "text";
}

function mouseoutPass(obj) {
    obj = document.getElementById(obj);
    obj.type = "password";
}

document.getElementById("formSignup").addEventListener('submit', formSender)

Elements.nick.addEventListener('keydown', checkNick)
Elements.password.addEventListener('keyup', checkPasswordEquals)
Elements.passwordAgain.addEventListener('keyup', checkPasswordEquals)

