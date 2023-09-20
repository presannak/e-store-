var module = require('./dbmodule');
var url = require('url');
var querystring = require('querystring');
var http = require('http');

http.createServer(function (request, response) {
    var data1 = '';

    request.on('data', function (chunk) {
        data1 += chunk;
    });

    request.on('end', function () {
        var name = querystring.parse(data1)["name"];
        console.log(name);
        var email = querystring.parse(data1)["email"];
        console.log(email);
        var phno = querystring.parse(data1)["phno"];
        console.log(phno);
        var dob = querystring.parse(data1)["dob"];
        console.log(dob);
        var gender = querystring.parse(data1)["gender"];
        console.log(gender);
        var address = querystring.parse(data1)["address"];
        console.log(address);
        var city = querystring.parse(data1)["city"];
        console.log(city);
        var state = querystring.parse(data1)["state"];
        console.log(state);
        var password = querystring.parse(data1)["login_password"];
        console.log(password);
        
        if (request.url === '/login') {
            module.authenticateUser(email, password, response);
        }
        else if (request.url === '/save') {
            module.saveUser(name, email, phno,dob,gender,address,city,state,password, response);
        }
    });

}).listen(4000);
console.log("Server started");
