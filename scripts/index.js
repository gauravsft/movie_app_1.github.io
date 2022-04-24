

var start=1;
function setTime(){
    setInterval(imageShow,2000);
}

function imageShow(){
    var image;
    if(start==1){
        image="image/1.jpg";
    }
    else if(start==2){
        image="image/2.jpg";
    }
    else if(start==3){
        image="image/3.jpg";
    }
    else if(start==4){
        image="image/4.jpg"
    }
    else if(start==5){
        image="image/5.jpg";
    }
    else if(start==6){
        image="image/6.jpg";
    }
    else if(start==7){
        image="image/7.jpg";
    }
    else if(start==8){
        image="image/8.jpg";
    }
    else if(start==9){
        image="image/9.jpg";
    }
    else{
        start=1;
        image="image/1.jpg";
    }
    document.getElementById("data").src=image;
    start++;
}