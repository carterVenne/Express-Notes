const fs = require("fs");
const notes = require("../develop/db/db.json");
const path = require("path");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
      res.json(notes);
    });
};