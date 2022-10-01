var photo1=document.querySelector("#image1");
var photo2=document.querySelector("#image2");
var photo3=document.querySelector("#image3");
var circle=document.querySelector("#circle");
var brand=document.querySelector("span");
var btn=document.querySelector("button");
var green=document.querySelector("#i1");
var lpink=document.querySelector("#i2");
var pink=document.querySelector("#i3");
var link=document.querySelectorAll("a");




lpink.addEventListener("click",function(){



    photo1.style.opacity="0";
    photo2.style.opacity="1";
    photo3.style.opacity="0";



    brand.style.color="pink";
    btn.style.backgroundColor="pink";
    circle.style.backgroundColor="pink";
    // link.style.color="pink";
    link.forEach(function(elem){
        elem.style.color = `pink`
    })
});
green.addEventListener("click",function(){
    


    photo1.style.opacity="1";
    photo2.style.opacity="0";
    photo3.style.opacity="0";



    brand.style.color="#017143";
    circle.style.backgroundColor="#017143";
    btn.style.backgroundColor="#017143";
    // link.style.color="#017143";
    link.forEach(function(elem){
        elem.style.color = `#017143`
    })
});
pink.addEventListener("click",function(){
    


    photo1.style.opacity="0";
    photo2.style.opacity="0";
    photo3.style.opacity="1";



    brand.style.color="#B62D8D";
    circle.style.backgroundColor="#B62D8D";
    btn.style.backgroundColor="#B62D8D";
    // link.style.color="#B62D8D";
    link.forEach(function(elem){
        elem.style.color = `#B62D8D`
    })
});