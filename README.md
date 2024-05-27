    Server

        Step 1 : Getting started with server

                Step 1.1 : Server pe sare package layenge node ke
                
                        server folder > 'npm init -y'

                Step 1.2 : express install karenge

                        'npm i express'

                Step 1.3 : 'server.js' file banayenge

                        server folder > server.js

                Step 1.4 : express ko require karenge and use karenge 'server.js' me

                        //Step 1.4.1 : get method (HTTP method hai) taki get kare 

                Step 1.5 : Listen karayenge browser me       


        Step 2 : Routing (auth-router.js) with better or good approach : Server.js ki complexity bhi kamm hogi

                Step 2.1 : server folder > router > auth-router.js && Comment karenge sare app.get method from server.js

                Step 2.2 : express ke Router class ko call karenge
                        

                Step 2.3 : router ke get method use karenge and export karenge 'module.exports = router'
                        Step 2.3.1 : Normal method 
                        Step 2.3.2 : router method : isase single line me multiple req kar sakte hai - get,post etc.
                Step 2.4 : 'server.js' me import karenge 'router' ko 
                Step 2.5 : router ko use karenge server.js file me as a api

        Step 3 : Controllers ki help se req and res ko separate karenge : auth-router.js ki complexity kamm karenge    


                Step 3.1 : server folder > controller > auth-controller.js && comment karenge router part

                Step 3.2 : auth-controller.js me async function banayenge and try ke andar res.status part use karenge     
                Step 3.3 : export karenge home ko 

                Step 3.4 : import karenge auth-router.js me auth-controller.js ke method ko

                Step 3.5 : routing 'auth-router.js' me new tarike se with the help of controllers







