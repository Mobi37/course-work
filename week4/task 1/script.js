function characterHero(){
    var infoChar = document.getElementsByTagName("input");
    var check = 0;
    var firstgamer = document.getElementsByTagName("div")[3];
    var secondgamer = document.getElementsByTagName("div")[4];
    var bottomFirst = 800 - 20 - document.getElementsByTagName("input")[0].value;
    var topSecond = 800 - 20 - document.getElementsByTagName("input")[2].value;

    for(var i = 0;i < 4;i++){
        if( infoChar[i].value == "" ){
            infoChar[i].style.border = "2px solid red"
            check = 1;
        }else{
            infoChar[i].style.border = "2px solid gray"
        }
    }

    if(check == "0"){
        document.getElementsByTagName("div")[1].style.display = "none";
        document.getElementsByTagName("div")[2].style.display = "block";
        firstgamer.style.display = "block";
        secondgamer.style.display = "block";
        var size_firstPlayer = infoChar[0].value;
        var size_secondPlayer = infoChar[2].value;
        firstgamer.style.width = size_firstPlayer+"px";
        firstgamer.style.height = size_firstPlayer+"px";
        secondgamer.style.height = size_secondPlayer+"px";
        secondgamer.style.width = size_secondPlayer+"px";
        firstgamer.style.position = "absolute";
        secondgamer.style.position = "absolute";
        firstgamer.style.top = "20px";
        firstgamer.style.left = "20px";
        firstgamer.style.bottom = bottomFirst+"px";
        firstgamer.style.right = bottomFirst+"px";
        secondgamer.style.right = "20px";
        secondgamer.style.bottom = "20px";
        secondgamer.style.top = topSecond+"px";
        secondgamer.style.left = topSecond+"px";
        movePlayer();
    }else{
        return
    }

}

function movePlayer(){
    var leftFirst = 20;
    var topFirst = 20;
    var bottomFirst = 800 - 20 - document.getElementsByTagName("input")[0].value;
    var rightFirst = bottomFirst;
    var rightSecond = 20;
    var bottomSecond = 20;
    var topSecond = 800 - 20 - document.getElementsByTagName("input")[2].value;
    var leftSecond = topSecond;
    var speedFirst = 4 * document.getElementsByTagName("input")[1].value;
    var speedSecond = 4 * document.getElementsByTagName("input")[3].value;
    var firstHero = document.getElementsByTagName("div")[3];
    var secondHero = document.getElementsByTagName("div")[4];
    var posTopFirst = Number(firstHero.offsetTop);                                         //вверх
    var pos2TopFirst = Number(firstHero.offsetTop) + Number(firstHero.clientWidth);      //низ
    var posTopSecond = secondHero.offsetTop;                                            //вверх2
    var pos2TopSecond = Number(secondHero.offsetTop) + Number(secondHero.clientWidth); //низ2

    window.onkeydown = function move(event){
        var code = event.keyCode || event.charCode;
        switch(code){
            case 68://right
                rightFirst = rightFirst - speedFirst;
                firstHero.style.right = rightFirst+"px";
                leftFirst = leftFirst + speedFirst;
                firstHero.style.left = leftFirst+"px";
                break;
            case 83://bottom
                bottomFirst = bottomFirst - speedFirst;
                firstHero.style.bottom = bottomFirst+"px";
                topFirst = topFirst + speedFirst;
                firstHero.style.top = topFirst+"px";
                break
            case 65://left
                rightFirst = rightFirst + speedFirst;
                firstHero.style.right = rightFirst+"px";
                leftFirst = leftFirst - speedFirst;
                firstHero.style.left = leftFirst+"px";
                break;
            case 87://top
                bottomFirst = bottomFirst + speedFirst;
                firstHero.style.bottom = bottomFirst+"px";
                topFirst = topFirst - speedFirst;
                firstHero.style.top = topFirst+"px";
                break
            case 37://left
                leftSecond = leftSecond - speedSecond;
                secondHero.style.left = leftSecond+"px";
                rightSecond = rightSecond + speedSecond;
                secondHero.style.right = rightSecond+"px";
                break;
            case 38://top
                topSecond = topSecond - speedSecond;
                secondHero.style.top = topSecond+"px";
                bottomSecond = bottomSecond + speedSecond;
                secondHero.style.bottom = bottomSecond+"px";
                break
            case 39://right
                leftSecond = leftSecond + speedSecond;
                secondHero.style.left = leftSecond+"px";
                rightSecond = rightSecond - speedSecond;
                secondHero.style.right = rightSecond+"px";
                break;
            case 40://bottom
                topSecond = topSecond + speedSecond;
                secondHero.style.top = topSecond+"px";
                bottomSecond = bottomSecond - speedSecond;
                secondHero.style.bottom = bottomSecond+"px";
                break
            
        }

        if(document.getElementsByTagName("div")[1].style.display == "none"){
        
        if(firstHero.style.left < "1"){
            alert("First player lost");
            restartGame();
        }else{  if(firstHero.style.top < "1"){
                alert("First player lost");
                restartGame();
            }else{ if(firstHero.style.bottom < "1"){
                    alert("First player lost");
                    restartGame();
                }else{ if(firstHero.style.right < "1"){
                    alert("First player lost");
                    restartGame();
                    }
              }
            }
        }
        if(secondHero.style.left < "1"){
            alert("Second player lost");
            restartGame();
        }else{  if(secondHero.style.top < "1"){
                alert("Second player lost");
                restartGame();
            }else{ if(secondHero.style.bottom < "1"){
                    alert("Second player lost");
                    restartGame();
                }else{ if(secondHero.style.right < "1"){
                        alert("Second player lost");
                        restartGame();
                    }
              }
            }
        }  
      }
    
//===============================================
if( document.getElementsByTagName("div")[2].style.display == "block"){
    
    var posTopFirst = Number(firstHero.offsetTop);                                        
    var pos2TopFirst = Number(firstHero.offsetTop) + Number(firstHero.clientWidth);      
    var posTopSecond = secondHero.offsetTop;                                            
    var pos2TopSecond = Number(secondHero.offsetTop) + Number(secondHero.clientWidth); 

    var posLeftFirst = Number(firstHero.offsetLeft);                                     
    var pos2LeftFirst = Number(firstHero.offsetLeft) + Number(firstHero.clientWidth);      
    var posLeftSecond = secondHero.offsetLeft;                                            
    var pos2LeftSecond = Number(secondHero.offsetLeft) + Number(secondHero.clientWidth); 

    for( var a = posTopFirst; a < Number(pos2TopFirst + 1);a++ ){
        for( var b = posTopSecond; b < Number(pos2TopSecond + 1);b++ ){
            if( a == b ){  
                for( c = posLeftFirst; c < Number(pos2LeftFirst + 1);c++ ){
                    for(  var d = posLeftSecond; d < Number(pos2LeftSecond + 1);d++ ){
                        if( c == d ){
                            if( firstHero.style.width == secondHero.style.width ){
                                alert("Friendship won");
                                restartGame();
                                return
                            }else{
                                if( firstHero.style.width > secondHero.style.width ){
                                    alert("First player win");
                                    restartGame();
                                    return
                                }else{
                                    alert("Second player win");
                                    restartGame();
                                    return
                                }
                            }
                        }
                    }
                }


            }
        }
    }

}
//===============================================
    
    
    }
}

    function restartGame(){
    var infoChar = document.getElementsByTagName("input");
    document.getElementsByTagName("div")[2].style.display = "none";
    document.getElementsByTagName("div")[1].style.display = "block";


    for(var a = 0;a < 4;a++){
        infoChar[a].value = "";
    }
}