var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(path.join(__dirname, '/public')));
app.get("*", noerror);

function noerror(req, res)
{
	res.end("No file but we here!");
}
app.listen(3000);
