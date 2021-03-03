const path = require('path');

//routing to notes page and home page
module.exports = function (app) {
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}