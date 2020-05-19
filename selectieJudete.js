function selectareIasi() {
  var url = 'https://vvv1270.azurewebsites.net/IASI';
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.response);
      console.log(json)
      sessionStorage.setItem('judet', json.Judet);
      sessionStorage.setItem('regiune', 'NordEst');
      /*location.replace("Judet.html");*/
      console.log(json.Judet);
    }
  };
  xhttp.open("GET", url, false);
  xhttp.send();

}

function selectareBacau() {
  var url = 'https://vvv1270.azurewebsites.net/BACAU';
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.response);
      console.log(json)
      sessionStorage.setItem('judet', json.Judet);
      sessionStorage.setItem('regiune', 'NordEst');
      /*location.replace("Judet.html");*/
      console.log(json.Judet);
    }
  };
  xhttp.open("GET", url, false);
  xhttp.send();

}

function selectareAlba() {
  var url = 'https://vvv1270.azurewebsites.net/ALBA';
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.response);
      console.log(json)
      sessionStorage.setItem('judet', json.Judet);
      sessionStorage.setItem('regiune', 'Centru');
      /*location.replace("Judet.html");*/
      console.log(json.Judet);
    }
  };
  xhttp.open("GET", url, false);
  xhttp.send();

}

function selectareBrasov() {
  var url = 'https://vvv1270.azurewebsites.net/BRASOV';
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.response);
      console.log(json)
      sessionStorage.setItem('judet', json.Judet);
      sessionStorage.setItem('regiune', 'Centru');
      /*location.replace("Judet.html");*/
      console.log(json.Judet);
    }
  };
  xhttp.open("GET", url, false);
  xhttp.send();

}