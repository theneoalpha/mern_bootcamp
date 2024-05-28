const home = async (req,res) => {
    try{
        // Step 3.2 : auth-controller.js me async function
        res
           .status(200)
           .send(
            "Welcome to Home page with the help of controllers"
           );

    } catch(error){
        console.log(error);
    }
};

//similarly
const register = async (req,res) => {
    try{
       //  Step 4.3 : "auth-controller.js" me try ke andar console.log karenge
       console.log(req.body); 
        // Step 3.2 : auth-controller.js me async function
       
         //  Step 4.4 :  msg bhi (req.body kar dete hai)    
                /* res
                .status(200)
                .send(
                
                    "Welcome to Register page with the help of controllers"

                );


                } */

             res.status(200).json({message: req.body});
}

    catch(error){
        console.log(error);
    }
};
// Step 3.3 : export karenge home ko 

module.exports = { home, register };
