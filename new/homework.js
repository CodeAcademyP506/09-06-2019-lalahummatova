// document.getElementById("image").style.width("100%");
document.getElementsByTagName("img")[0].style.height = "80px";
var image=document.getElementsByTagName("img")[0]
image.style.width="100%"
document.getElementById("search").style.display="flex";
document.getElementById("search").style.justifyContent="space-around"
document.getElementById("body").style.boxSizing="border-box"
document.getElementById("body").style.margin="0px"
document.getElementById("body").style.padding="0px"
document.getElementById("body").style.backgroundColor="rgba(232, 236, 241, 1)"
var search=document.getElementById("search")
search.style.height="30px";
search.style.width="100%"
search.style.margin="0px auto"
search.style.padding="50px 20px"
search.style.backgroundColor="white";

document.getElementsByTagName("button")[0].style.backgroundColor="orange"
var button=document.getElementsByTagName("button")[0]
button.style.color="white"
button.style.height="50px"
button.style.border="none"
button.style.boxShadow="white 2px 2px,orange 7px 5px"
document.getElementsByTagName("input")[0].style.height="50px"
var input=document.getElementsByTagName("input")[0]
input.style.textAlign="center"

var input2=document.getElementsByTagName("input")[1]
input2.style.textAlign="center"
input2.style.height="50px"
var offering=document.getElementById("offering")
offering.style.display="flex"
offering.style.flexDirection="column"
offering.style.textAlign="center"
offering.style.marginTop="30px"

document.getElementById("last").style.display="flex"
var last=document.getElementById("last")
last.style.justifyContent="space-around"
last.style.paddingTop="50px"
last.style.textAlign="center"

var circle=document.getElementsByClassName("circle")
var best=document.getElementsByClassName("best")
for(var i=0;i<4;i++){
    circle[0].style.backgroundColor="red"
    circle[0].style.height="70px"
    circle[0].style.width="20%"
    circle[0].style.borderRadius="100%"
    circle[0].style.marginLeft="180px"
    
    circle[1].style.backgroundColor="green"
    circle[1].style.height="70px"
    circle[1].style.width="20%"
    circle[1].style.borderRadius="100%"
    circle[1].style.marginLeft="180px"


    circle[2].style.backgroundColor="yellow"
    circle[2].style.height="70px"
    circle[2].style.width="20%"
    circle[2].style.borderRadius="100%"
    circle[2].style.marginLeft="180px"

    circle[3].style.backgroundColor="blue"
    circle[3].style.height="70px"
    circle[3].style.width="20%"
    circle[3].style.borderRadius="100%"
    circle[3].style.marginLeft="180px"
}


