if (sessionStorage.getItem('regiune') === 'nordest') {

    var iasi = document.getElementById("jud_iasi");
    var bacau = document.getElementById("jud_bacau");
    var botosani = document.getElementById("jud_botosani");
    var neamt = document.getElementById("jud_neamt");
    var suceava = document.getElementById("jud_suceava");
    var vaslui = document.getElementById("jud_vaslui");

    iasi.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/IASI';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'nordest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    bacau.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/BACAU';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'nordest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    botosani.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/BOTOSANI';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'nordest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    neamt.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/NEAMT';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'nordest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    suceava.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/SUCEAVA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'nordest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    vaslui.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/VASLUI';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'nordest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);
}


if (sessionStorage.getItem('regiune') === 'centru') {

    var alba = document.getElementById("jud_alba");
    var brasov = document.getElementById("jud_brasov");
    var covasna = document.getElementById("jud_covasna");
    var harghita = document.getElementById("jud_harghita");
    var mures = document.getElementById("jud_mures");
    var sibiu = document.getElementById("jud_sibiu");

    alba.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/ALBA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'Centru');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    brasov.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/BRASOV';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'Centru');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    covasna.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/COVASNA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'Centru');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    harghita.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/HARGHITA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'Centru');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    mures.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/MURES';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'Centru');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    sibiu.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/SIBIU';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'Centru');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);
}


if (sessionStorage.getItem('regiune') === 'sudest') {

    var braila = document.getElementById("jud_braila");
    var buzau = document.getElementById("jud_buzau");
    var constanta = document.getElementById("jud_constanta");
    var galati = document.getElementById("jud_galati");
    var tulcea = document.getElementById("jud_tulcea");
    var vrancea = document.getElementById("jud_vrancea");

    braila.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/BRAILA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'sudest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    buzau.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/BUZAU';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'sudest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    constanta.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/CONSTANTA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'sudest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    galati.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/GALATI';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'sudest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    tulcea.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/TULCEA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'sudest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    vrancea.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/VRANCEA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'sudest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);


}


if (sessionStorage.getItem('regiune') === 'sud') {

    var arges = document.getElementById("jud_arges");
    var calarasi = document.getElementById("jud_calarasi");
    var dambovita = document.getElementById("jud_dambovita");
    var giurgiu = document.getElementById("jud_giurgiu");
    var ialomita = document.getElementById("jud_ialomita");
    var prahova = document.getElementById("jud_prahova");
    var teleorman = document.getElementById("jud_teleorman");

    arges.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/ARGES';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'sud');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    calarasi.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/CALARASI';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'sud');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    dambovita.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/DAMBOVITA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'sud');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    giurgiu.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/GIURGIU';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'sud');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    ialomita.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/IALOMITA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'sud');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    prahova.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/PRAHOVA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'sud');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    teleorman.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/TELEORMAN';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'sud');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);


}


if (sessionStorage.getItem('regiune') === 'sudvest') {

    var dolj = document.getElementById("jud_dolj");
    var gorj = document.getElementById("jud_gorj");
    var mehedinti = document.getElementById("jud_mehedinti");
    var olt = document.getElementById("jud_olt");
    var valcea = document.getElementById("jud_valcea");

    dolj.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/DOLJ';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'sudvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    gorj.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/GORJ';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'sudvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    mehedinti.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/MEHEDINTI';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'sudvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    olt.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/OLT';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'sudvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    valcea.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/VALCEA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'sudvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);



}


if (sessionStorage.getItem('regiune') === 'vest') {

    var arad = document.getElementById("jud_arad");
    var caras_severin = document.getElementById("jud_caras_severin");
    var hunedoara = document.getElementById("jud_hunedoara");
    var timis = document.getElementById("jud_timis");

    arad.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/ARAD';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'vest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    caras_severin.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/CARAS';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'vest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    hunedoara.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/HUNEDOARA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'vest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    timis.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/TIMIS';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'vest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);



}


if (sessionStorage.getItem('regiune') === 'nordvest') {

    var bihor = document.getElementById("jud_bihor");
    var bistrita_nasaud = document.getElementById("jud_bistrita_nasaud");
    var cluj = document.getElementById("jud_cluj");
    var maramures = document.getElementById("jud_maramures");
    var satu_mare = document.getElementById("jud_satu_mare");
    var salaj = document.getElementById("jud_salaj");

    bihor.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/BIHOR';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'nordvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    bistrita_nasaud.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/BISTRITA';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'nordvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    cluj.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/CLUJ';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'nordvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    maramures.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/MARAMURES';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'nordvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    satu_mare.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/SATUMARE';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'nordvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    salaj.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/SALAJ';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'nordvest');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);



}


if (sessionStorage.getItem('regiune') === 'bucilfov') {

    var bucuresti = document.getElementById("jud_bucuresti");
    var ilfov = document.getElementById("jud_ilfov");

    bucuresti.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/BUCURESTI';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'bucilfov');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);

    ilfov.addEventListener("mousedown", function() {
        var url = 'https://vvv1270.azurewebsites.net/ILFOV';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.response);
                console.log(json)
                sessionStorage.setItem('judet', json.Judet);
                sessionStorage.setItem('regiune', 'bucilfov');
                location.replace("Judet.html");
            }
        };
        xhttp.open("GET", url, false);
        xhttp.send();

    }, false);



}