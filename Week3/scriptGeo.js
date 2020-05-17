window.onload = function () {

    var cityGeo = document.getElementsByTagName("span")[0];
    var cityPhone = document.getElementsByTagName("a")[8];
    cityGeo.innerText = "Москва";
    cityPhone.innerText = "8 800 2000 600";
    
    var yourCity = ymaps.geolocation.city;

    if(yourCity == "Пермь"){

        cityGeo.innerText = "Пермь";  
        cityPhone.innerText = "7 900 0000 777";
    }
}