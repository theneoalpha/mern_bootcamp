const express = require('express');
const app = express();
// Step 1.4 : 

//Step 1.4.1 : get method (HTTP method hai) taki get kare 
app.get("/", (req, res)=>{
res.status(200).send("Welcome to home page");
});


// Step 1.5 : Listen karayenge browser me
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
});