var name = localStorage.getItem("name");
var device = localStorage.getItem("Devices");
var price = localStorage.getItem("price");

document.getElementById("plan_name").innerHTML=name;
document.getElementById("plan_device").innerHTML=device;
document.getElementById("plan_price").innerHTML=price;

function changeplan(){
    window.location.href="Plans/Monthly.htm"
}
function cancel(){
    document.getElementById("title").innerHTML="Cancelled";
    document.getElementsByClassName("active")[0].innerHTML="Cancelled";
    document.getElementsByClassName("active")[0].style.color="#e25e59";
    document.getElementsByClassName("active")[0].style.backgroundColor="#fbf0f0";
    document.getElementsByClassName("active")[0].style.fontSize="16px";
    document.getElementsByClassName("active")[0].style.fontweight="none";
    document.getElementsByClassName("active")[0].style.border="solid 3px #fbf0f0";

}