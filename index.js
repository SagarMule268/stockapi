const express = require( "express");
const dotenv = require( "dotenv");
const cors = require( "cors");
const axios = require( "axios");

dotenv.config();

const app=express();
const PORT =process.env.PORT;
const FINNHUB_API_KEY =process.env.FINNHUB_API_KEY;
const FINNHUB_URL ="https://finnhub.io/api/v1";
app.use(cors());
app.use(express.json());
app.get('/',(req ,res)=>{
    res.send("Hello !!!");
})
// let stocks =[
//     {id:1 , name: "Apple" ,symbol :'AAPl',price:123},
//     {id:3 , name: "microsoft" ,symbol :'microsoft',price:123},
//     {id:4 , name: "tesla" ,symbol :'tesla',price:123},
//     {id:5 , name: "google" ,symbol :'gogl',price:123},
//     {id:6 , name: "amazon" ,symbol :'amz',price:123}
// ];

// app.get('/stocks',(req,res)=>{
//     res.json(stocks);
// })
// app.get('/stocks/:id',(req ,res)=>{
//     const stock =stocks.find((s)=>s.id===parseInt(req.params.id));
//     if(!stock) return res.status(404).json({message :'stock not found'});
//     res.send(stock);
// })

app.use('/api/finn' ,  require('./finn_routes/routes'));




// app.get('/stocks/candle/:symbol',async(req,res)=>{
//     try{
//         const response = await axios.get(`${FINNHUB_URL}/stock/candle`,{
//             params:{symbol:req.params.symbol  ,
//                 token:FINNHUB_API_KEY,
//                 from:1590988249,
//                 to:1591852249
//             },
          
//         });
//         res.json(response.data);
//     }
//     catch(error){
//         res.status(500).json({message : 'failed to fetch the stock',
//             details:error.response?.data || error.message
//         });
//     }
// })




app.listen(process.env.PORT,()=>{
    console.log(`server is up on port no ${PORT} `);
})