const express = require('express');
const {getAllData, getCompanyDetails, getStock} = require( '../controller/controller');

const router = express.Router();

router.route("/").get(getAllData);

router.route("/company/:symbol").get(getCompanyDetails) ;
router.route("/stock/:symbol").get(getStock);
module.exports= router ;