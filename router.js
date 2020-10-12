
const express = require('express');
const router = express.Router();
//const scrappingController = require("./controller/scrapping");
const devzamse = require('./controller/devzamse');

//checkStatus
router.get("/",(req,res)=>{res.send({status:true})});

//webScrapping
//router.get('/scrapping', scrappingController.scrape);
router.get('/f', devzamse.test);

module.exports = router;