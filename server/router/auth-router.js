 const express = require("express");

 // Step 2.2 : express ke Router class ko call karenge
    const router = express.Router();
 // Step 2.3 : router ke get method use karenge and export karenge 'module.exports = router'

   //Step 2.3.1 : Normal method 
        // router.get("/", (req, res)=>{
        // res.status(200).send("Welcome to home page using Router");
        // });

    //Step 2.3.2 : router method  

        // router.route("/").get((req,res)=>{
        //     res
        //        .status(200)
        //        .send("Welcome to Home Page using Router with latest router method");
        // });


    // Step 3.4 : import karenge auth-router.js me auth-controller.js ke method ko
    const {home} = require("../controller/auth-controller");


    // Step 3.5 : routing 'auth-router.js' me new tarike se with the help of controllers
    router.route("/").get(home);




module.exports = router;