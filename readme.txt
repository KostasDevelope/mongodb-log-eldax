https://medium.com/@yazanuneisi/run-express-node-js-as-a-service-on-windows-5356cdab66ac
now we will convert our code into a single executable file using pkg

we need to install pkg globally using :

npm install -g pkg
then we need to run cmd in application folder to run :

pkg app.js -t  node10-win-x64
and then we will find an executable file :

app.exe 
this file allow us to run our express application on any windows computer (x64) directly without installing node.js ,and our source code is hidden .

Step 3
convert our exe file into a windows service using nssm .

nssm is a service manager you can download it from this link . and then extract it go to win64 and run cmd as administrator in the folder and run

nssm install 

https://withmike.co.za/articles/build-a-nodejs-rest-api-with-express-and-mongodb/

https://pm2.keymetrics.io/docs/usage/quick-start/
 npm install pm2@latest -g
 pm2 start main.js

  //==============================mongodb===============
  brew services start mongodb-community

//==================mongodb==========================
 mongodb://srvnt68-isrtsql:27017/moviebox
 mongodb://localhost:27017/moviebox

//==================swagger============================
