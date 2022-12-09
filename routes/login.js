var express = require('express')
var usersList = require('../module/schema')

var router = express.Router()

router.post('/findone',async (req,res)=>{
    const loginCd = await usersList.findOne({email:req.body.email,password:req.body.password})
    
    if(loginCd){
        if(loginCd.email == req.body.email && loginCd.password == req.body.password){
            res.json({
                data:loginCd
            })
        }else{
            res.json({
                data:{
                    status:0
                }
            })
        }
    }else{
        res.json({
            data:{
                status:0
            }
        })
    }
})
module.exports = router;