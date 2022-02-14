/*실력*/
const keyword1 = document.getElementById("keyword1");
const wrapper1 = document.getElementById("firstHideWrapper");
const close1 = document.getElementById("closeBtn1");

keyword1.addEventListener("click",function(){
    wrapper1.className = "show";
});

close1.addEventListener("click",function(){
    wrapper1.className = "hide";
});


/*심력,체력*/
const keyword2 = document.getElementById("keyword2");
const wrapper2 = document.getElementById("secondHideWrapper");
const close2 = document.getElementById("closeBtn2");

keyword2.addEventListener("click",function(){
    wrapper2.className = "show";
});

close2.addEventListener("click",function(){
    wrapper2.className = "hide";
});


/*역량*/
const keyword3 = document.getElementById("keyword3");
const wrapper3 = document.getElementById("thirdHideWrapper");
const close3 = document.getElementById("closeBtn3");

keyword3.addEventListener("click",function(){
    wrapper3.className = "show";
});

close3.addEventListener("click",function(){
    wrapper3.className = "hide";
});