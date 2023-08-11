var monthly = false;
var yearly = false;
var monthly_price = [100, 200, 500, 700];
var yearly_price = [1000, 2000, 5000, 7000];

if (!monthly && !yearly) move_to_monthly();
function move_to_monthly(){
    monthly = true;
    yearly=false;
    var el = document.getElementsByClassName("button-yearly")[0]
    el.style.backgroundColor="#1f4e91";
    el.style.color="white";
    el.style.border="none";
    var el = document.getElementsByClassName("button-monthly")[0]
    el.style.backgroundColor="white";
    el.style.color="#1f4e91";
    el.style.border="none";
    var prices = document.getElementsByClassName("price");
    for (var i = 0; i < prices.length; i++){
        prices[i].innerHTML=yearly_price[i];
        console.log(prices[i]);
    }
}
function move_to_yearly(){
    monthly=false;
    yearly=true;
    var el = document.getElementsByClassName("button-monthly")[0]
    el.style.backgroundColor="#1f4e91";
    el.style.color="white";
    el.style.border="none";
    var el = document.getElementsByClassName("button-yearly")[0]
    el.style.backgroundColor="white";
    el.style.color="#1f4e91";
    el.style.border="none";
    var prices = document.getElementsByClassName("price");
    for (var i = 0; i < prices.length; i++){
        prices[i].innerHTML=yearly_price[i];
        console.log(prices[i]);
    }
}
var ls = document.getElementsByClassName("header");
for (var i = 0; i < ls.length; i++){
    ls[i].style.backgroundColor="#1f4e91";
    ls[i].style.color="white";
    ls[i].style.width="75%";
    ls[i].style.height="90px";
    ls[i].style.borderBottom="solid white 5px";
    ls[i].style.paddingTop="25%";
    ls[i].style.textAlign="center";
    ls[i].style.margin="auto";
}
function select(){
    console.log("Selected");
    document.getElementsByClassName("button-monthly")[0].style.backgroundColor="#1f4e91";
}

var select = -1;
function plan(k){
    select = k;
    for (var i = 0; i < ls.length; i++){
        if (i === k)continue;
        ls[i].style.backgroundColor="#8094bc";
    }
    ls[k].style.backgroundColor="#1f4e91";
    if (k == 0){
        document.getElementsByClassName("plan1")[0].style.color="#1f4e91";
        document.getElementsByClassName("plan2")[0].style.color="black";
        document.getElementsByClassName("plan3")[0].style.color="black";
        document.getElementsByClassName("plan4")[0].style.color="black";
    }
    if (k == 1){
        document.getElementsByClassName("plan1")[0].style.color="black";
        document.getElementsByClassName("plan2")[0].style.color="#1f4e91";
        document.getElementsByClassName("plan3")[0].style.color="black";
        document.getElementsByClassName("plan4")[0].style.color="black";
    }
    if (k == 2){
        document.getElementsByClassName("plan1")[0].style.color="#black";
        document.getElementsByClassName("plan2")[0].style.color="black";
        document.getElementsByClassName("plan3")[0].style.color="#1f4e91";
        document.getElementsByClassName("plan4")[0].style.color="black";
    }
    if (k == 3){
        document.getElementsByClassName("plan1")[0].style.color="black";
        document.getElementsByClassName("plan2")[0].style.color="black";
        document.getElementsByClassName("plan3")[0].style.color="black";
        document.getElementsByClassName("plan4")[0].style.color="#1f4e91";
    }
}

function submit(){
    if (select == -1){
        alert("Please Select a Plan!");
        return;
    }
    if (yearly == true)select = select + 4;
    localStorage.setItem("selection", select);
    window.location.href="../payment_page.html";
}