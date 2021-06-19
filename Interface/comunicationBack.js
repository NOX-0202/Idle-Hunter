function reqListener () {
    console.log(this.responseText);
  };
  
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.open("get", "http://localhost:4567", true);
  oReq.send();