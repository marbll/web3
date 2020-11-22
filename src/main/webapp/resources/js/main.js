let wsUri = "ws://" + document.location.host + "/web3/" + "backdoor";
let websocket = new WebSocket(wsUri);
websocket.onmessage = function (evt) {
    console.log(evt.data.toString());
    let data = JSON.parse(evt.data.toString());
    console.log(data);
    let x = data['x'] * 130 / data['r'] + 150;
    let y = 150 - 130 * data['y'] / data['r'];

    drawPoint(x, y, data['inArea']);

    document.getElementById("svgForm:refresh_table").click();
};

let svg = document.querySelector('svg');
svg.addEventListener("click", (event)=>{
    svg.innerHTML += "<circle r=\"4\" cx=" + event.offsetX + " cy=" + event.offsetY + " fill=#f2c8aa></circle>";

    let r = document.getElementById("form:R_hidden").value;

    document.getElementById("svgForm:inputXHidden").value = Number((event.offsetX - 225)/150 * r/2).toFixed(5);
    document.getElementById("svgForm:inputYHidden").value = Number(-(event.offsetY - 225)/150 * r/2).toFixed(5);
    //document.getElementById("svgForm:inputRHidden").value = r/2;

    document.getElementById("svgForm:hidden_refresh_table").click();

    /*let data = JSON.stringify({
        'x': event.offsetX,
        'y': event.offsetY,
        'r': 2
    });*/
    //websocket.send(data);


});

function drawPoint(x, y, res){
    let svg = document.querySelector("svg");
    //svg.innerHTML += "<circle r=\"4\" cx=" + 10 + " cy=" + 10 + "fill=" + (res)?"green" : "red" + "</circle>";
    svg.innerHTML += "<circle r=\"4\" cx=" +  x + " cy=" + y + " fill=green" + "</circle>";
    console.log(x + " " + y)
}














//------------------------------------------UNUSED-------------------------------------------
function showPointsByR(r){
    let circles = document.querySelectorAll("circle");
    for (let i=0; i<circles.length; i++){
        console.log("Radiuses:" + circles[i].getAttribute("r") + " " + r);
        if (circles[i].getAttribute("r") !== r) {
            circles[i].style.visibility = "hidden";
        } else{
            circles[i].style.visibility = "visible";
        }
    }
}


function clearSvg(){
    let circles = document.querySelectorAll("circle");
    for (let i=0; i<circles.length; i++){
        circles[i].parentNode.removeChild(circles[i]);
    }
}


let coordMap = new Map();
coordMap.set(1, 2);
coordMap.set(1.5, 4/3);
coordMap.set(2, 1);
coordMap.set(2.5, 4/5);
coordMap.set(3, 2/3);
coordMap.set(3.5, 4/7);
coordMap.set(4, 1/2);

function changeRadius(r){
    //let radiusText = document.getElementsByClassName("core-text");
    //radiusText.item(0).innerHTML = r/4;
    //radiusText.item(1).innerHTML = r/2;
    //radiusText.item(2).innerHTML = -r/2;
    //radiusText.item(3).innerHTML = -r/4;
    //radiusText.item(4).innerHTML = r/4;
    //radiusText.item(5).innerHTML = r/2;
    //radiusText.item(6).innerHTML = -r/4;
    //radiusText.item(7).innerHTML = -r/2;

    //showPointsByR(r);

    //let triangle = document.getElementById("triangle");
    //triangle.setAttribute("points", (225 - (75/2) * coordMap.get(r/2)) + ",225 225,225 225," + (225 + (75/2) * coordMap.get(r/2)) );
    //triangle.fill = "red";
}