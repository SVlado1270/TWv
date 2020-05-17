var map = document.getElementById("romaniaMap");
map.addEventListener("load", function() {

    var svgDoc = this.getSVGDocument();

    var iasi = svgDoc.getElementById("sm_state_Iasi");
    var alba = svgDoc.getElementById("sm_state_Alba");
    var arad = svgDoc.getElementById("sm_state_Arad");
    var arges = svgDoc.getElementById("sm_state_Arges");
    var bacau = svgDoc.getElementById("sm_state_Bacau");
    var bihor = svgDoc.getElementById("sm_state_Bihor");
    var bistritaNasaud = svgDoc.getElementById("sm_state_BistritaNasaud");
    var botosani = svgDoc.getElementById("sm_state_Botosani");
    var brasov = svgDoc.getElementById("sm_state_Brasov");
    var braila = svgDoc.getElementById("sm_state_Braila");
    var bucuresti = svgDoc.getElementById("sm_state_Bucuresti");
    var buzau = svgDoc.getElementById("sm_state_Buzau");
    var carasSeverin = svgDoc.getElementById("sm_state_CarasSeverin");
    var calarasi = svgDoc.getElementById("sm_state_Calarasi");
    var cluj = svgDoc.getElementById("sm_state_Cluj");
    var constanta = svgDoc.getElementById("sm_state_Constanta");
    var covasna = svgDoc.getElementById("sm_state_Covasna");
    var dambovita = svgDoc.getElementById("sm_state_Dambovita");
    var dolj = svgDoc.getElementById("sm_state_Dolj");
    var galati = svgDoc.getElementById("sm_state_Galati");
    var giurgiu = svgDoc.getElementById("sm_state_Giurgiu");
    var gorj = svgDoc.getElementById("sm_state_Gorj");
    var harghita = svgDoc.getElementById("sm_state_Harghita");
    var hunedoara = svgDoc.getElementById("sm_state_Hunedoara");
    var ialomita = svgDoc.getElementById("sm_state_Ialomita");
    var ilfov = svgDoc.getElementById("sm_state_Ilfov");
    var maramures = svgDoc.getElementById("sm_state_Maramures");
    var mehedinti = svgDoc.getElementById("sm_state_Mehedinti");
    var mures = svgDoc.getElementById("sm_state_Mures");
    var neamt = svgDoc.getElementById("sm_state_Neamt");
    var olt = svgDoc.getElementById("sm_state_Olt");
    var prahova = svgDoc.getElementById("sm_state_Prahova");
    var satuMare = svgDoc.getElementById("sm_state_SatuMare");
    var salaj = svgDoc.getElementById("sm_state_Salaj");
    var sibiu = svgDoc.getElementById("sm_state_Sibiu");
    var suceava = svgDoc.getElementById("sm_state_Suceava");
    var teleorman = svgDoc.getElementById("sm_state_Teleorman");
    var timis = svgDoc.getElementById("sm_state_Timis");
    var tulcea = svgDoc.getElementById("sm_state_Tulcea");
    var vaslui = svgDoc.getElementById("sm_state_Vaslui");
    var valcea = svgDoc.getElementById("sm_state_Valcea");
    var vrancea = svgDoc.getElementById("sm_state_Vrancea");

    iasi.addEventListener("mousedown", function() {
        //alert('iasi')
        //location.replace("Judet.html");
        //console.log("Am schimbat pe judet");
        // document.getElementById('h1_id').innerHTML = "Judet nou";
        var url = 'https://vvv1270.azurewebsites.net/IASI';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json[0].Judet)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'nordest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);
    alba.addEventListener("mousedown", function() {
        //alert('alba')
        var url = 'https://vvv1270.azurewebsites.net/ALBA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'centru');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    arad.addEventListener("mousedown", function() {
        //alert('arad')
        var url = 'https://vvv1270.azurewebsites.net/ARAD';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'vest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    arges.addEventListener("mousedown", function() {
        //alert('arges')
        var url = 'https://vvv1270.azurewebsites.net/ARGES';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'sud');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    bacau.addEventListener("mousedown", function() {
        //alert('bacau')
        var url = 'https://vvv1270.azurewebsites.net/BACAU';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'nordest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    bihor.addEventListener("mousedown", function() {
        //alert('bihor')
        var url = 'https://vvv1270.azurewebsites.net/BIHOR';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'nordvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    bistritaNasaud.addEventListener("mousedown", function() {
        //alert('bistrita')
        var url = 'https://vvv1270.azurewebsites.net/BISTRITA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'nordvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    botosani.addEventListener("mousedown", function() {
        //alert('botosani')
        var url = 'https://vvv1270.azurewebsites.net/BOTOSANI';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'nordest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    brasov.addEventListener("mousedown", function() {
        // alert('brasov')
        var url = 'https://vvv1270.azurewebsites.net/BRASOV';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'centru');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    braila.addEventListener("mousedown", function() {
        //alert('braila')
        var url = 'https://vvv1270.azurewebsites.net/BRAILA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'sudest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    bucuresti.addEventListener("mousedown", function() {
        //alert('bucale')
        var url = 'https://vvv1270.azurewebsites.net/BUCURESTI';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'bucilfov');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    buzau.addEventListener("mousedown", function() {
        //alert('buzau')
        var url = 'https://vvv1270.azurewebsites.net/BUZAU';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'sudest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    carasSeverin.addEventListener("mousedown", function() {
        //alert('caras')
        var url = 'https://vvv1270.azurewebsites.net/CARAS';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'vest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    calarasi.addEventListener("mousedown", function() {
        //alert('calarasi')
        var url = 'https://vvv1270.azurewebsites.net/CALARASI';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'sud');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    cluj.addEventListener("mousedown", function() {
        // alert('cluj')
        var url = 'https://vvv1270.azurewebsites.net/CLUJ';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'nordvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    constanta.addEventListener("mousedown", function() {
        //alert('constanta')
        var url = 'https://vvv1270.azurewebsites.net/CONSTANTA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'sudest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    covasna.addEventListener("mousedown", function() {
        //alert('covasna')
        var url = 'https://vvv1270.azurewebsites.net/COVASNA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'centru');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    dambovita.addEventListener("mousedown", function() {
        //alert('dambovita')
        var url = 'https://vvv1270.azurewebsites.net/DAMBOVITA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'sud');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    dolj.addEventListener("mousedown", function() {
        //alert('dolj')
        var url = 'https://vvv1270.azurewebsites.net/DOLJ';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'sudvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    galati.addEventListener("mousedown", function() {
        //alert('galati')
        var url = 'https://vvv1270.azurewebsites.net/GALATI';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'sudest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    giurgiu.addEventListener("mousedown", function() {
        //alert('giurgiu')
        var url = 'https://vvv1270.azurewebsites.net/GIURGIU';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'sud');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    gorj.addEventListener("mousedown", function() {
        //alert('gorj')
        var url = 'https://vvv1270.azurewebsites.net/GORJ';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'sudvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    harghita.addEventListener("mousedown", function() {
        //alert('harghita')
        var url = 'https://vvv1270.azurewebsites.net/HARGHITA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'centru');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    hunedoara.addEventListener("mousedown", function() {
        //alert('hunedoara')
        var url = 'https://vvv1270.azurewebsites.net/HUNEDOARA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'vest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    ialomita.addEventListener("mousedown", function() {
        //alert('ialomita')
        var url = 'https://vvv1270.azurewebsites.net/IALOMITA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'sud');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    ilfov.addEventListener("mousedown", function() {
        //alert('ilfov')
        var url = 'https://vvv1270.azurewebsites.net/ILFOV';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'bucilfov');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    maramures.addEventListener("mousedown", function() {
        //alert('maramures')
        var url = 'https://vvv1270.azurewebsites.net/MARAMURES';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'nordvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    mehedinti.addEventListener("mousedown", function() {
        //alert('mehedinti')
        var url = 'https://vvv1270.azurewebsites.net/MEHEDINTI';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'sudvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    mures.addEventListener("mousedown", function() {
        //alert('mures')
        var url = 'https://vvv1270.azurewebsites.net/MURES';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'centru');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    neamt.addEventListener("mousedown", function() {
        //alert('neamt')
        var url = 'https://vvv1270.azurewebsites.net/NEAMT';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'nordest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    olt.addEventListener("mousedown", function() {
        //alert('olt')
        var url = 'https://vvv1270.azurewebsites.net/OLT';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'sudvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    prahova.addEventListener("mousedown", function() {
        // alert('prahova')
        var url = 'https://vvv1270.azurewebsites.net/PRAHOVA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'sud');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    satuMare.addEventListener("mousedown", function() {
        //alert('satu mare')
        var url = 'https://vvv1270.azurewebsites.net/SATUMARE';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'nordvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    salaj.addEventListener("mousedown", function() {
        //alert('salaj')
        var url = 'https://vvv1270.azurewebsites.net/SALAJ';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'nordvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    sibiu.addEventListener("mousedown", function() {
        //alert('sibiu')
        var url = 'https://vvv1270.azurewebsites.net/SIBIU';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'centru');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    suceava.addEventListener("mousedown", function() {
        //alert('suceava')
        var url = 'https://vvv1270.azurewebsites.net/SUCEAVA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'nordest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    teleorman.addEventListener("mousedown", function() {
        //alert('teleorman')
        var url = 'https://vvv1270.azurewebsites.net/TELEORMAN';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'sud');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    timis.addEventListener("mousedown", function() {
        //alert('timis')
        var url = 'https://vvv1270.azurewebsites.net/TIMIS';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'vest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    tulcea.addEventListener("mousedown", function() {
        //alert('tulcea')
        var url = 'https://vvv1270.azurewebsites.net/TULCEA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'sudest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    vaslui.addEventListener("mousedown", function() {
        //alert('vaslui')
        var url = 'https://vvv1270.azurewebsites.net/VASLUI';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'nordest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    valcea.addEventListener("mousedown", function() {
        //alert('valcea')
        var url = 'https://vvv1270.azurewebsites.net/VALCEA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'sudvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

    vrancea.addEventListener("mousedown", function() {
        //alert('vrancea')
        var url = 'https://vvv1270.azurewebsites.net/VRANCEA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json[0].Judet);
                sessionStorage.setItem('regiune', 'sudest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();
    }, false);

}, false);