const express = require("express");
const app = express();
const port = 3000;

const MostCommonWords = require("thousand-most-common-words");
const allCodes = MostCommonWords.getAllLanguageCodes();

app.get("/", (req, res) => {
  res.send(allCodes);
});
