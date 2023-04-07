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
        temperature.innerText = temp + " °C"

        const minmax = document.getElementById("js--minmax")
        minmax.innerText = max + "° / " + min + "° feels like " + like + "°"


        const weather = document.getElementById("js--weather")
        weather.innerText = weer

        const icon = document.getElementById("js--icon").setAttribute("src", "http://openweathermap.org/img/wn/" + iconss + "@2x.png")


        let getal = 18

        const upButton = document.getElementById("js--up")
        const downButton = document.getElementById("js--down")
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



        const aantal = document.querySelector('.aantal');
        aantal.style.height = "5rem"

        const euro = document.getElementById("js--euro")
        euro.innerText = "€ " + "0,75"

});
