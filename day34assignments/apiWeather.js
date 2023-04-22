//let key= ec0652ef68d9607cd0492ee77561cf01;
let apiRequest = "https://api.openweathermap.org/data/2.5/weather?zip=28215,us&appid=ec0652ef68d9607cd0492ee77561cf01&units=imperial";
//do I have to use this? `` or ''?

async function download(){
    const response = await fetch(apiRequest);
    let requestedData= await response.json();
    console.log(requestedData);
}

