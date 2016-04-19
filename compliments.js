//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORT1=7000;
var PORT2=7500;
var compl = 'You are a good student.';
var insult = 'You are sometimes lazy.';
//We need a function which handles requests and send response
function handleGoodRequest(request, response){
   response.end(compl);
}
function handleBadRequest(request, response){
	response.end(insult);
}
//Create a server
var server1 = http.createServer(handleGoodRequest);
var server2 = http.createServer(handleBadRequest);

//Lets start our server
server1.listen(PORT1, function(){
   //Callback triggered when server is successfully listening. Hurray!
   console.log("Server listening on: http://localhost:%s", PORT1);
});

server2.listen(PORT2, function(){
	console.log('Server listening on: http://localhost:%s', PORT2);
});