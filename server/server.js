// sk_test_51NP9trSIqOqHlxHglCcQBU3FVOQcnJ8zhdn9SL9WLOGrpHdimVQtM10KgZOhLBBNWjIAots4M1vKYsugJsRs4G0p00ebbpjCDs
// CBC test price_1NP9zrSIqOqHlxHgmDgOS9K4
// CMP test price_1NPA4QSIqOqHlxHgcLJsPyHF
// Lipid profile test price_1NPA61SIqOqHlxHgdPxkO8cs

const express = require('express');
var cors = require('cors');

//intialize stripe
const stripe = require('stripe')('sk_test_51NP9trSIqOqHlxHglCcQBU3FVOQcnJ8zhdn9SL9WLOGrpHdimVQtM10KgZOhLBBNWjIAots4M1vKYsugJsRs4G0p00ebbpjCDs')

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());


app.post('/checkout', async(req,res)=>{
    const { name, email, mobile, age, selectedTest } = req.body;
    const lineItems = [
        {
          price: selectedTest,
          quantity: 1,
        },
      ];

    //checkout session stripe
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel'
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

const PORT = 4000;
app.listen(PORT, ()=> console.log(`Listening to port ${PORT}`));
