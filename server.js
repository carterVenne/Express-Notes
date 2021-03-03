const express = require('express');

const app = express();

const PORT = process.env.PORT || 3306;

app.listen(PORT, function() {
    console.log('app listening on PORT: ' + PORT);
});