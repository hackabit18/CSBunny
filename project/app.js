var express = require("express");
var app = express();
const path = require('path');
const fs = require("fs")
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
var server = require('http').createServer(app)
const io = require('socket.io').listen(server)
var onlineFaculty = [];
var onlineSockets = [];
var randomstring = require("randomstring");
app.use(express.static(path.join(__dirname, 'public')));
server.listen(process.env.PORT || 3000);

app.get("/",function(req,res){
	res.render("login.ejs");
})

app.get("/dashboard",function(req,res){
	res.render("dashboarddev.ejs");
})

app.get("/test",function(req,res){
	res.send(onlineFaculty + "                " + onlineSockets);
})

app.get("/feedback",function(req,res){
	res.render("devreview");
})






io.sockets.on("connection",function(socket){
	socket.on("new faculty attempt",function(data){
		console.log("hello")
		if(faculty[data.id].password == data.pwd){
			/*connection is legit*/
			if(onlineFaculty.indexOf(data.id) == -1){
				onlineFaculty.push(data.id);
				onlineSockets.push(socket);
				socket.emit("connection accepted",faculty[data.id]);
			}
		}
	})

	socket.on("new user attempt",function(data){
		if(testPassword == data.pwd){
			/*connection is legit*/
			//if(onlineFaculty.indexOf(data.id) == -1){
				//onlineFaculty.push(data.id);
				socket.emit("user connection accepted",faculty[data.id]);
			//}
		}
	})

	socket.on("extractOnline",()=>{
		var data = [];
		for(var i=0;i<onlineFaculty.length;i++){
			data.push(faculty[onlineFaculty[i]]);
		}
		socket.emit("get online",data)
	})

	socket.on("req online faculty",function(){
		socket.emit("get online faculty",onlineFaculty);
	})

	socket.on("req connect",function(data){
		var hash = randomstring.generate(7);
		var roomUrl = "http://192.168.137.88:9001/demos/connection.html?roomid=" + hash;
		var pos = -1;
		console.log(data);
		for(var i=0;i<onlineFaculty.length;i++){
			if(onlineFaculty[i] == data.fid)
				pos = i;
		}
		console.log(onlineFaculty)
		console.log(pos);
		onlineSockets[pos].emit("get url",roomUrl);
		socket.emit(data.uid,roomUrl);
	})
})
var faculty = {
	1001:{
		"id":"1001",
		"name":"Shivam sharma",
		"specialisation" : ["blockchain","javascript"],
		"password":"abcd",
		"eth-address":""
	},
	1002:{
		"id":"1002",
		"name":"Divyansh jamuaar",
		"specialisation" : ["blockchain","java"],
		"password":"abcd",
		"eth-address":""
	},
	1003:{
		"id":"1003",
		"name":"Shubham prasad",
		"specialisation": ["ml","AI","reactjs","python"],
		"password":"abcd",
		"eth-address":""
	},
	1004:{
		"id":"1004",
		"name":"Piyush kumar",
		"specialisation":["ml","nodejs"],
		"password":"abcd",
		"eth-address":""
	}
}

var testUsername = "hackabit";
var testPassword = "hackstart";

