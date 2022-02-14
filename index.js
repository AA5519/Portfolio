const openWrapper = document.getElementById("openWrapper");
const button = document.getElementById("buttonStyle");
const mainWrapper = document.getElementById("mainWrapper");

button.addEventListener("click",function(){
    openWrapper.className = "hide";
});

button.addEventListener("click",function(){
    mainWrapper.className = "show";
});