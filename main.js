document.addEventListener('DOMContentLoaded', init); 

function init(){
        
        document.addEventListener("click", getImg);  
}

 

//************************************** */

 
function getImg(){

    let imgX = document.createElement("img");
    let ranNum = Math.floor(Math.random(500-100) * 500);
    imgX.src = `https://picsum.photos/id/${Math.floor(Math.random(500-100) * 500)}/200/300`;
    imgX.alt = "random image";
    //imgX.src = `https://picsum.photos/id/${ranNum}/200/300`; 
    //imgX.alt = `Image# ${ranNum}`;
    imgX.border = "2px";
    imgX.addEventListener("load", showImg);
    imgX.addEventListener("error", alert);

}

function showImg(ev){

    main.appendChild(ev.target);
}  

function alert(err){

    alert("oops... No image could be loaded. Please click again.");  

}

