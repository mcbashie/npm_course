"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const learning_npm_1 = require("@mcbash/learning-npm");
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => {
    const greet = (0, learning_npm_1.morningGreet)('express');
    res.send("Hello World " + greet);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map