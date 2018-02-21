var express = require("express");
var bodyParser = require("body-parser");

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



var app = express();
const port = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, function(){
    console.log("App listening on PORT " + port);
});