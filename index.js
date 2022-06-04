const express = require("express");
const app = express();
app.get("/", function(req, res){
	res.send("hello abel");
});

app.set("view engine","ejs");

app.get("/well/:name", function(req, res){
        const name = req.params.name
	res.render("index",{name:name});
});

app.get("/well", function(req, res){
        res.send("wellcome to server 3000");
});
app.get("/abel/:name", (req, res) => {
	const name = req.params.name;
	res.send(name)
})
app.listen(3000, function(){
        console.log("server started at 3000");
});
