/* klok */

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var d = today.getDate();
    var y = today.getFullYear();
    var month = today.getMonth() + 1;
    h = checkTime(h);
    m = checkTime(m);
    document.getElementById("js--time").innerHTML = h + ":" + m;
    document.getElementById("js--day").innerHTML = d + "-" + month + "-" + y;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

/*temperature*/
let weather = fetch("https://api.openweathermap.org/data/2.5/weather?lat=52.39093389936427&lon=4.856288216120264&units=metric&appid=630af0310ee841f7923146b451fabe63")
    .then(function(response){
        return response.json();
    })
    .then(function(realData){
        temp = realData.main.temp
        min = realData.main.temp_min
        max = realData.main.temp_max
        like = realData.main.feels_like
        weer = realData.weather[0].description
        iconss = realData.weather[0].icon


        const temperature = document.getElementById("js--temp")
        temperature.innerText = temp + " °C";

        const minmax = document.getElementById("js--minmax")
        minmax.innerText = max + "° / " + min + "° feels like " + like + "°"


        const weather = document.getElementById("js--weather")
        weather.innerText = weer

        const icon = document.getElementById("js--icon").setAttribute("src", "http://openweathermap.org/img/wn/" + iconss + "@2x.png")


        let getal = 18

        const upButton = document.getElementById("js--up")
        const downButton = document.getElementById("js--down")
        const slapen = document.getElementById("js--slapen")
        const comfort = document.getElementById("js--comfort")
        const thuis = document.getElementById("js--thuis")
        const weg = document.getElementById("js--weg")
        const heat = document.getElementById("js--heat")

        heat.innerText = getal + "°";
        
        upButton.onclick = function(){
            getal = getal + 1;
            heat.innerText = getal + "°"; 
        }

        downButton.onclick = function(){
            getal = getal - 1;
            heat.innerText = getal + "°"; 
        }

        slapen.onclick = function(){
            getal = 18;
            heat.innerText = getal + "°"; 
        }

        comfort.onclick = function(){
            getal = 22;
            heat.innerText = getal + "°"; 
        }

        thuis.onclick = function(){
            getal = 20;
            heat.innerText = getal + "°"; 
        }

        weg.onclick = function(){
            getal = 16;
            heat.innerText = getal + "°"; 
        }



        

});

function link(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var today = new Date();
var hours = today.getHours();
var y = today.getFullYear();
var month = today.getMonth() +1;
var hours1 = today.getHours() -1;
var d = today.getDate();
let m = month.toString().padStart(2, '0')
let h = hours.toString().padStart(2, '0')
let h1 = hours1.toString().padStart(2, '0')


let current = fetch("https://api.energyzero.nl/v1/energyprices?fromDate="+ y +"-"+ m +"-"+ d +"T"+ h1 +"%3A00%3A00.000Z&tillDate="+ y +"-"+ m +"-"+ d +"T"+ h +"%3A59%3A59.999Z&interval=4&usageType=1&inclBtw=true")
    .then(function(response){
        return response.json();
    })
    .then(function(realData){
        
        prijs = realData.Prices[0].price;
        
        f = prijs * 100

        const aantal = document.querySelector('.aantal');
        aantal.style.height = f+"%";

        const euro = document.getElementById("js--euro");
        euro.innerText = "€ " + prijs;



    });

let binnen = fetch("https://35258.hosts1.ma-cloud.nl/duurzaamhuis/index.php")
    .then(function(response){
        return response.json();
    })
    .then(function(realData){
        temp = realData.Temperature;
        const binnentemp = document.getElementById("js--binnen");
        binnentemp.innerText = parseFloat(temp).toFixed(1) +" °C";

        woon = realData.Led1;
        slaap = realData.Led2;
        keuken = realData.Led3;

        slapen = false;
        wonen = false;
        koken = false;

        const woonknop = document.getElementById("js--woon");
        const slaapknop = document.getElementById("js--slaap");
        const keukenknop = document.getElementById("js--keuk");

        woonlicht = document.getElementById("woonlicht");
        woonknop.onclick = function(){
            if(wonen == false){
                woonlicht.style.color = "black";
                wonen = true
            }
            else{
                woonlicht.style.color = "red";
                wonen = false
            }
            
        }

        slaaplicht = document.getElementById("slaaplicht");
        slaapknop.onclick = function(){
            if(slaap == false){
                slaaplicht.style.color = "black";
                slaap = true
            }
            else{
                slaaplicht.style.color = "red";
                slaap = false
            }
            
        }


        keukenlicht = document.getElementById("keukenlicht");
        keukenknop.onclick = function(){
            if(koken == false){
                keukenlicht.style.color = "black";
                koken = true
            }
            else{
                keukenlicht.style.color = "red";
                koken = false
            }
            
        }



    });
