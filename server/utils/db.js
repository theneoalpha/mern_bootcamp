const mongoose = require("mongoose");
// Step 5.4 : Online Mongodb se url lenge database ka
const URI = "mongodb+srv://theneoalpha:VikashKaushik@cluster0.fxhrtlq.mongodb.net/"

// mongoose.connect(URI);

// Step 5.5 : async function use karke connect karenge
const connectDb = async () =>{
    try{
        await mongoose.connect(URI);
        console.log("Connection successful with the database");
    }
    catch(error){
        console.error("Database Connection Error");
        process.exit(0);
    }
}

module.exports = connectDb;
