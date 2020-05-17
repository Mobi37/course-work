function menu(){
    if( document.getElementsByTagName("ul")[1].children[0].style.display == "block" ){
        for( let i = 0; i < 7;i++ ){
            document.getElementsByTagName("ul")[1].children[i].style.display = "none"   
        }
        document.getElementsByTagName("ul")[1].style.width = "0px";
        document.getElementsByTagName("ul")[1].style.height = "0px";

    }else{
        for( let i = 0; i < 7;i++ ){
            document.getElementsByTagName("ul")[1].children[i].style.display = "block"   
        }
        document.getElementsByTagName("ul")[1].style.width = "180px";
        document.getElementsByTagName("ul")[1].style.height = "220px";

    }
}