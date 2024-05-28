const express = require('express');
const app = express();
// Step 1.4 : 

//Step 1.4.1 : get method (HTTP method hai) taki get kare 
// app.get("/", (req, res)=>{
// res.status(200).send("Welcome to home page");
// });

// Step 2.4 : 'server.js' me import karenge 'router' ko 
const router = require("./router/auth-router");

// Step 4.5.3: we use middleware in "server.js" file me 
app.use(express.json());
// Step 2.5 : router ko use karenge server.js file me
app.use("/api/auth", router);

        
// Step 1.5 : Listen karayenge browser me
const PORT = 5000;

    // Step 5.6 : "server.js" me import karenge "connectDB" function ko
        const connectDb = require("./utils/db");
    // Step 5.7 : Database connect karenge "server.js" me
    /* 
        app.listen(PORT, ()=>{
        console.log(`Server is running at ${PORT}`);
        });
    */
   connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running at ${PORT}`);
        });
   });



