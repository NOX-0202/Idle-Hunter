function MakeRequest (url, data) {
    var http = new XMLHttpRequest();

    if (data) {
        var params = new FormData();

        let keys = Object.keys(data)
        let values = Object.values(data)

        for (let i = 0; i < data.length; i++) {
            params.append(keys[i], values[i])
        }
    }

    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(params);
}