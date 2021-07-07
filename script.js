var paragraph = document.getElementById("txt");
paragraph.style.fontSize = "20px";
var larger = setInterval(function(){
    paragraph.style.fontSize = (parseInt(paragraph.style.fontSize) + 1) + "px";
    
if(paragraph.style.fontSize === "100px"){
    clearInterval(larger);
}
} , 1000);