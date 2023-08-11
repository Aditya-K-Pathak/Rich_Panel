
// var ar = document.getElementsByClassName("login-container");
var prices = [100, 200, 500, 700, 1000, 2000, 5000, 7000];
var names = [
"Mobile",
"Basic" ,
"Standard" ,
"Premium" ,
"Mobile",
"Basic" ,
"Standard" ,
"Premium" ,
];
var b = localStorage.getItem("selection");
var ls = document.getElementsByClassName("plandesc");
// console.log(b);
var price;
ls[0].innerHTML=names[b];
if (b < 4){
    ls[1].innerHTML="Monthly";
    price = "₹" + prices[b] + "/month";
    ls[2].innerHTML=price;
    }
else {
    ls[1].innerHTML="Yearly";
    var price = "₹" + prices[b] + "/year";
    ls[2].innerHTML=price;
}

function senddata(){
    var send_data_name = localStorage.setItem("name", names[b]);
    if (b == 0 || b == 4)var send_data_devices = localStorage.setItem("Devices", "Phone +  Tablets");
    else var send_data_devices = localStorage.setItem("Devices", "Phone +  Tablets");
    var send_data_price = localStorage.setItem("price", ls[2].innerHTML);
    window.location.href="success.htm";
}
console.log(b);
// b = b + 1;
function pay(){
    // localStorage.setItem("startpurchase", true);
    // window.location.href="../index.html";
    if (b ==1){
        fetch("/create-checkout-session", {
            method: "POST", 
            headers: {
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({
                items:[{
                    id:1, quantity:1,
                }]
            })
            }).then(res => {
                if (res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            }).then(({url}) => {
        window.location=url
        }).catch(e => {
        console.error(e.error)
        })
        }
    if (b ==2){
        fetch("/create-checkout-session", {
            method: "POST", 
            headers: {
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({
                items:[{
                    id:2, quantity:1,
                }]
            })
            }).then(res => {
                if (res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            }).then(({url}) => {
        window.location=url
        }).catch(e => {
        console.error(e.error)
        })
        }
    if (b ==3){
        fetch("/create-checkout-session", {
            method: "POST", 
            headers: {
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({
                items:[{
                    id:3, quantity:1,
                }]
            })
            }).then(res => {
                if (res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            }).then(({url}) => {
        window.location=url
        }).catch(e => {
        console.error(e.error)
        })
        }
    if (b ==4){
        fetch("/create-checkout-session", {
            method: "POST", 
            headers: {
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({
                items:[{
                    id:4, quantity:1,
                }]
            })
            }).then(res => {
                if (res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            }).then(({url}) => {
        window.location=url
        }).catch(e => {
        console.error(e.error)
        })
        }
    if (b ==5){
        fetch("/create-checkout-session", {
            method: "POST", 
            headers: {
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({
                items:[{
                    id:5, quantity:1,
                }]
            })
            }).then(res => {
                if (res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            }).then(({url}) => {
        window.location=url
        }).catch(e => {
        console.error(e.error)
        })
        }
    if (b ==6){
        fetch("/create-checkout-session", {
            method: "POST", 
            headers: {
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({
                items:[{
                    id:6, quantity:1,
                }]
            })
            }).then(res => {
                if (res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            }).then(({url}) => {
        window.location=url
        }).catch(e => {
        console.error(e.error)
        })
        }
    if (b ==7){
        fetch("/create-checkout-session", {
            method: "POST", 
            headers: {
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({
                items:[{
                    id:7, quantity:1,
                }]
            })
            }).then(res => {
                if (res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            }).then(({url}) => {
        window.location=url
        }).catch(e => {
        console.error(e.error)
        })
        }
    if (b ==8){
        fetch("/create-checkout-session", {
            method: "POST", 
            headers: {
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({
                items:[{
                    id:8, quantity:1,
                }]
            })
            }).then(res => {
                if (res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            }).then(({url}) => {
        window.location=url
        }).catch(e => {
        console.error(e.error)
        })
        }
}