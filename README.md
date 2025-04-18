extract files from zip folder or clone the project from github.

github link : https://github.com/prudhvi-marada/REST_API.git

Run `npm install` to install dependencies.

start the server using command: npm start

now the server is running at  : Server running on http://localhost:3000 

REST Api's testing by Thunder Client: (for better Readable see in my github link given above )

--> Testing GET METHOD:  ( http://localhost:3000/users )
   
   ![GET METHOD](screenshots/Screenshot_1.png)

-->Testing GET by user id: (eg: http://localhost:3000/user/2)

 ![GET METHOD](screenshots/Screenshot_3.png) 

-->Testing Post Method :  (http://localhost:3000/user)

  ![POST METHOD](screenshots/Screenshot_2.png) 


--> After Testing Post Method Get data to observe by Get Method: ( http://localhost:3000/users )

 ![GET METHOD](screenshots/Screenshot_4.png) 

--> Testing PUT method:  (eg:  http://localhost:3000/user/4 )

 ![PUT METHOD](screenshots/Screenshot_5.png)

--> After Testing PUT Method Get data to observe by Get Method:  ( http://localhost:3000/users )

![GET METHOD](screenshots/Screenshot_6.png)  

-->Testing DELETE method:  (eg: http://localhost:3000/user/4)

![DELETE METHOD](screenshots/Screenshot_7.png) 

-->After Testing DELETE Method Get data to observe by Get Method:  ( http://localhost:3000/users )

![GET METHOD](screenshots/Screenshot_8.png) 

--> Testing validateBody Middleware by entering miss field data:

![POST METHOD](screenshots/Screenshot_9.png) 
