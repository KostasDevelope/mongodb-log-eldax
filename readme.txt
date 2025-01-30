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

//==================SSL============================
https://medium.com/@nirbhay0299/enable-https-in-your-typescript-express-app-using-the-pkcs12-file-f86e53535ca

https://sl08-zurnalcinnosti.eldax.cz:6001/

https://medium.com/@nirbhay0299/enable-https-in-your-typescript-express-app-using-the-pkcs12-file-f86e53535ca



 //https://stepansuvorov.com/blog/2012/09/%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D0%BC-https-%D0%BD%D0%B0-node-js-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D1%8F-express/
  //https://ru.stackoverflow.com/questions/1416128/%D0%BA%D0%B0%D0%BA-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D1%82%D0%B8%D1%82%D1%8C-https-node-express-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80-%D0%B1%D0%B5%D0%B7-%D0%B4%D0%BE%D0%BC%D0%B5%D0%BD%D0%B0
//https://stackoverflow.com/questions/11744975/enabling-https-on-express-js