"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = exports.run = void 0;
const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const path = require("path");
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));
const run = (port) => {
    app.listen(port, () => {
        console.log(`\x1B[31mServer started :\x1B[34m http://localhost:${port}`);
    });
};
exports.run = run;
const route = (nameOfRoute, title, render) => {
    app.get(nameOfRoute, (req, res) => {
        res.render(render, {
            title: title,
        });
    });
};
exports.route = route;
