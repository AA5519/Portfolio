const pimg = document.getElementById("profileImg");
const beforeText = document.getElementById("textBoxWrapper");
const afterText = document.getElementById("afterTextBoxWrapper");

pimg.addEventListener("click",function(){
    beforeText.className = "hide";
});

pimg.addEventListener("click",function(){
    afterText.className = "show";
});
