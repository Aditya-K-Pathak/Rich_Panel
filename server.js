require('dotenv').config()

const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static("public"))
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

const storeitems = new Map([
    [0, {priceinINR:10000, name:"Monthly Mobile"}],
    [1, {priceinINR:20000, name:"Monthly Basic"}],
    [2, {priceinINR:50000, name:"Monthly Standard"}],
    [3, {priceinINR:70000, name:"Monthly Premium"}],
    [4, {priceinINR:100000, name:"Yearly Mobile"}],
    [5, {priceinINR:200000, name:"Yearly Basic"}],
    [6, {priceinINR:500000, name:"Yearly Standard"}],
    [7, {priceinINR:700000, name:"Yearly Premium"}],
])

app.post("/create-checkout-session", async (req, res) => {
    try{
        const session = await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            mode:"payment",
            line_items:req.body.items.map(item =>{
                const Storeitems = storeitems.get(item.id)
                return {
                    price_data:{
                        currency:"INR",
                        product_data:{
                            name: Storeitems.name
                        },
                        unit_amount:Storeitems.priceinINR,
                    },
                    quantity:item.quantity,
                }
            }),
            success_url:`${process.env.SERVER_URL}/pages/success.htm`,
            cancel_url:`${process.env.SERVER_URL}/pages/fail.htm`,
        })
        res.json({url: session.url})
    }
    catch (e){
        res.status(500).json({error: e.message})
    }
    // res.json({url:"hi"})
})

app.listen(3000)
