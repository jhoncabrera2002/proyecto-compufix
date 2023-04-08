const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');

require('dotenv').config();



//DB
mongoose.connect('mongodb://127.0.0.1:27017/Test')
.then (()=> console.log("Mongo Connect"))
.catch(err=> console.log("Mongo error"))
     

    //Importar rutas
    const itemsRoutes = require('./routes/items')
    const imgRoutes = require('./routes/img')
    const paymentIntentRoutes=require('./routes/paymentsIntent')
    const ordersRoutes=require('./routes/orders')

//Middleware
app.use(cors());
app.use(express.json())
app.use('/items', itemsRoutes)
app.use('/img', imgRoutes)
app.use('/create-payment-intent', paymentIntentRoutes)
app.use('/order', ordersRoutes)


//Rutas
app.get('/', (req,res) => {
    res.send('HOME!');
})





//Iniciar.
app.listen(3000);