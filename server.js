const express = require('express');

const app = express();

//port
const PORT = process.env.PORT || 8080;

//data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup public folder to be accesible
app.use(express.static("public"));

//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//listener
app.listen(PORT, function() {
    console.log('app listening on PORT: ' + PORT);
});