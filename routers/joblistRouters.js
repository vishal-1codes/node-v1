const express=require('express')
const router=express.Router()
const {createJoblist,getJoblist,deleteJoblist,updateJoblist} = require('../controllers/joblistController.js')

router.post('/joblist',createJoblist);
router.get('/joblist',getJoblist);
router.delete('/joblist/:id',deleteJoblist);
router.put('/joblist?:id',updateJoblist);


module.exports=router;