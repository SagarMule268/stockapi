const axios = require("axios") ;
const dotenv = require("dotenv") ;
dotenv.config();
const FINNHUB_API_KEY =process.env.FINNHUB_API_KEY;
const FINNHUB_URL ="https://finnhub.io/api/v1";

//get all stocks data
const getAllData =async(req ,res)=>{
    const exchange = req.query.exchange || 'US';
    try{
        const response = await axios.get(`${FINNHUB_URL}/stock/symbol`,{
            params:{exchange ,token:FINNHUB_API_KEY},
            headers:{'X-Finnhub-Token':FINNHUB_API_KEY}
        });
        res.json(response.data);
    }
    catch(error){
        res.status(500).json({message:`failed to fetch stock list`,
            details:error.response?.data || error.message
        })
    }
}

//gets the company details

const getCompanyDetails =async(req ,res)=>{
    try{
        const response = await axios.get(`${FINNHUB_URL}/stock/profile2`,{
            params:{symbol:req.params.symbol , token :FINNHUB_API_KEY}
        })

        res.json(response.data);
    }
    catch(error){
        res.status(500).json({message:`failed to fetch stock list`,
            details:error.response?.data || error.message
        })
    }
}


//get the stock information

const getStock = async (req ,res)=>{
    try{
        const response = await axios.get(`${FINNHUB_URL}/quote`,{
            params:{symbol :req.params.symbol ,token :FINNHUB_API_KEY}
        })
        res.json(response.data);
    }
    catch(error){
        res.status(500).json({message:`failed to fetch stock info`,
            details:error.response?.data || error.message
    })
}
}

module.exports={getAllData , getCompanyDetails , getStock};


