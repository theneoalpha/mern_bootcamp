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

// Step 3.3 : export karenge home ko 

module.exports = { home };
