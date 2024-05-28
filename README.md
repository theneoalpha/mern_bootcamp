    Server

        Step 1 : Getting started with server

                Step 1.1 : Server pe sare package layenge node ke
                
                        server folder > 'npm init -y'

                Step 1.2 : express install karenge

                        'npm i express'

                Step 1.3 : 'server.js' file banayenge

                        server folder > server.js

                Step 1.4 : express ko require karenge and use karenge 'server.js' me

                        Step 1.4.1 : get method (HTTP method hai) taki get kare 

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


        Step 4 : POSTMAN || Thunder client se get & Post karenge and response dekhenge

                Step 4.1 : POST method denge '/register' ko 'auth-router.js' file me     

                Step 4.2 : Thunderclient me GET method select karke "http://localhost:5000/api/auth/register" SEND karenge
                            and response dekhenge 

                

                Step 4.3 : "auth-controller.js" me try ke andar console.log karenge 
                                (req.body) ko and   

                Step 4.4 :  msg bhi (req.body kar dete hai)        

                Step 4.5 : Thunder client me POST karenge body me information daal ke

                             Step 4.5.1:  Header -> key "Content-Type" & Value "application/json"     

                             Step 4.5.2: Body me Json select karnge   & json format me data enter karenge
                                                {
                                                "usename": "Vikash Kaushik",
                                                "age":"45"
                                                } 

                                        && response aayega "{}"   

                             Step 4.5.3: we use middleware in "server.js" file me -"Server.js" json format nhi samjh rha hai so use understndable karaynege    

                             FINALLY JSON RESPONSE SHOW HO GAYA   


        Step 5 : Connecting Backend with online Database  

                Step 5.1 : MongoDB me new database create karenge

                Step 5.2 : Server folder > utils folder > db.js
                Step 5.3 : "npm i mongoose" mongoDb Connection ke liye &&  db.js me code karenge

                Step 5.4 : Online Mongodb se url lenge database ka

                Step 5.5 : async function use karke connect karenge

                Step 5.6 : "server.js" me import karenge "connectDB" function ko

                Step 5.7 : Database connect karenge "server.js" me

                FINALLY DATABASE CONNECTION SUCCESSFULLY 



              


                

                









