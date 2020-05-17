var changersider = 2;

function moveSlider(){

    slide1.addEventListener("click", slide_1 );
    slide2.addEventListener("click", slide_2 );
    slide3.addEventListener("click", slide_3 );
    slide4.addEventListener("click", slide_4 );
    slide5.addEventListener("click", slide_5 );

}


function slide_1(){
    clearText();
    clearbut();
    document.getElementsByTagName("span")[7].children[0].className = "first_line";
    document.getElementsByTagName("span")[2].style.display = "block";
    document.getElementsByTagName("div")[47].children[0].src = "img/catalog_image.png";
}
function slide_2(){
    clearText();
    clearbut();
    document.getElementsByTagName("span")[7].children[1].className = "first_line";
    document.getElementsByTagName("span")[3].style.display = "block";
    document.getElementsByTagName("div")[47].children[0].src = "img/Slider_cat.png";
}
function slide_3(){
    clearText();
    clearbut();
    document.getElementsByTagName("span")[7].children[2].className = "first_line";
    document.getElementsByTagName("span")[4].style.display = "block";
    document.getElementsByTagName("div")[47].children[0].src = "img/Slider_cat.png";
}
function slide_4(){
    clearText();
    clearbut();
    document.getElementsByTagName("span")[7].children[3].className = "first_line";
    document.getElementsByTagName("span")[5].style.display = "block";
    document.getElementsByTagName("div")[47].children[0].src = "img/Slider_cat.png";
}
function slide_5(){
    clearText();
    clearbut();
    document.getElementsByTagName("span")[7].children[4].className = "first_line";
    document.getElementsByTagName("span")[6].style.display = "block";
    document.getElementsByTagName("div")[47].children[0].src = "img/Slider_cat.png";
}

function clearbut(){
    var checkmove = document.getElementsByTagName("span")[7];
    for( var i = 0;i < 5;i++ ){
        checkmove.children[i].classList = "none"
    }
}

function clearText(){
    var slideText = document.getElementsByTagName("span");

    for( var j = 2; j < 7; j++ ){
        slideText[j].style.display = "none";
    }
}

function changer_slider(){
    if( changersider < 7 ){
        if( changersider == 2 ){
            slide_1();
            changersider = changersider + 1;
        }else{
            if( changersider == 3 ){
                slide_2()
                changersider = changersider + 1;
            }else{
                if( changersider == 4 ){
                    slide_3()
                    changersider = changersider + 1;
                }else{
                    if( changersider == 5 ){
                        slide_4()
                        changersider = changersider + 1;
                    }else{
                        if( changersider == 6 ){
                            slide_5()
                            changersider = changersider + 1;
                        }
                    }
                }
            }
        }
    }else{
        changersider = 2;
    }
}

var timer_slider = setInterval(changer_slider, 3000);

for( var k = 0; k < 5; k++ ){
    document.getElementsByTagName("span")[7].children[k].onclick = function(){
        clearInterval(timer_slider);
    }
}