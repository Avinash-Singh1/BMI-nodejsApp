const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const e = require('express');
var bodyParser = require('body-parser');



const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'dietplan-nodejsapp'
});

const app = express();


//app.use(express.bodyParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'static')));

// http://localhost:3000/
app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.html'));
});

// http://localhost:3000/auth
app.post('/auth', function(request, response,next) {
	// Capture the input fields
	// let username = request.body.username;
	// let password = request.body.password;
	// // Ensure the input fields exists and are not empty
	// if (username && password) {
	// 	// Execute SQL query that'll select the account from the database based on the specified username and password
	// 	connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
	// 		// If there is an issue with the query, output the error
	// 		// if (error) throw error;
	// 		// If the account exists
	// 		if (results.length > 0) {
	// 			// Authenticate the user
	// 			request.session.loggedin = true;
	// 			request.session.username = username;
	// 			// Redirect to home page
				response.redirect('/home');
	// 		} else {
	// 			response.send('Incorrect Username and/or Password!');
	// 		}			
	// 		response.end();
	// 	});
	// } else {
	// 	response.send('Please enter Username and Password!');
	// 	response.end();
	// }
});

// http://localhost:3000/home
app.get('/home', function(request, response) {
	// If the user is loggedin
	// if (request.session.loggedin) {
		// Output username
		// response.sendFile(__dirname + '/signup.html');
		
		
		response.redirect("/question");
	// response.sendFile(path.join(__dirname + '/signup.html'));


	// } else {
	// 	// Not logged in
	// 	response.send('Please login to view this page!');
	// }
	response.end();
});

// response.send('Welcome back, ' + request.session.username + '!');

app.get("/question",function(req,res){

    // res.redirect('b.html');
// response.send('Welcome back, ' + request.session.username + '!');

    res.sendFile(__dirname+"/questionire.html");

})

//  Signup starts Here 
app.get("/signup",function(req,res){

   	res.sendFile(path.join(__dirname + '/signup.html'));


})

// signup authentication
 app.post("/signupauth",function(req,res){
	// input values of user 

	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: "localhost",
		user:"root",
		password:"",
		database:"dietplan-nodejsapp"
	});
	
	
	//some more code to get different routes

		var myname = req.body.name;
		var myemail = req.body.email;
		var mypassword = req.body.psw;
		
		connection.connect(function(err) {

			if (err) {
				console.log("mysql error");
			}
			else
			{
				// console.log("[mysql error]",err);

				console.log("Connected!");
			}

			var sql = "INSERT INTO accounts (email,name,password) VALUES ?";
			var values=[
				[myemail,myname,mypassword]
			];
			connection.query(sql, [values],function (err, result) {
			  if (err){
				// console.log("[mysql error]",err);
				console.log(err);

			  }
			  else
			  {

				  console.log("1 record inserted");
			  }
			});
		  });
		res.redirect("/");

		res.end();

//  })

 
});

// last page starts here 

app.post("/resultdietscreen",function(req,res){


	// let val =req.body.name;

	// res.send(val);

	res.sendFile(path.join(__dirname + '/resultdietscreen.html'),{ title: 'Hey', message: 'Hello there!'});


});




	// const express = require('express'),
	// es6Renderer = require('express-es6-template-engine'),
	// app = express();
	
//   app.engine('html', es6Renderer);
  app.set('views', 'views');
  app.set('view engine', 'html');
   
  app.get('/resultdietscreen', function(req, res) {
	res.render('resultdietscreen', {locals: {title: 'Welcome!'}});
  });
   


  app.listen(3000);
  
