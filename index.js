var dispDiv = document.getElementById("display"), 
    st1 = document.getElementById("st1"),
    st2 = document.getElementById("st2"),
    imgSrc = null,
    stinput = document.getElementById("stickerUrl"),
    stC = document.getElementById("cursor");


document.getElementById("bgcolor").addEventListener("change", function(){
    dispDiv.style.backgroundColor = this.value;
});

st1.addEventListener("click", function(){
   imgSrc = this.src;
    stC.src = imgSrc;
});

st2.addEventListener("click", function(){
    imgSrc = this.src;
    stC.src = imgSrc;
});

dispDiv.addEventListener("click", function(ev){
    var newImg = document.createElement("img");
    newImg.src = imgSrc;
    newImg.className = "displaystickers"
    dispDiv.appendChild(newImg);
    
    console.log(ev.pageX, ev.pageY);
    newImg.style.left = ev.clientX - 70+"px";
    newImg.style.top = ev.clientY - 50+"px";
});
stinput.addEventListener("keyup", function(ev){
   if(ev.keyCode == 13){
       var newsticker = document.createElement("img");
       newsticker.src = stinput.value;
       newsticker.className = "stickers";
       document.getElementById("stickers").appendChild(newsticker);
       stinput.value = "";
       newsticker.addEventListener("click", function(){
           imgSrc = this.src;
           stC.src = imgSrc;
           changeImage(this);
       })
       
   }
});

dispDiv.addEventListener("mousemove", function(ev){
    stC.style.top = ev.clientY - 50+"px";
    stC.style.left = ev.clientX - 70+"px";
});
function changeImage(el){
    imgSrc = el.src;
}