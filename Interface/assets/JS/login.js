function formCheck (e){
    e.preventDefault()

    var xhr = new XMLHttpRequest()

    let data = {
        nickname: document.getElementById('nickname').value,
        password: document.getElementById('password').value
    }

    xhr.open('POST', 'http//localhost:4567/login')
    xhr.onload = function(data){
        console.log('loaded', this.responseText)
    }
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
}

function mouseoverPass(obj) {
    obj = document.getElementById(obj);
    obj.type = "text";
}

function mouseoutPass(obj) {
    obj = document.getElementById(obj);
    obj.type = "password";
}

document.getElementById("loginForm").addEventListener('submit', formCheck)