const express = require('express');
const app = express();
const allWords = require('./strings-store.js');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: false}));

// this request sorts the string in reverse, stores it and return the string
app.post('/sort', (req, res) => {
  const sortedWord = allWords.sortDescending(req.body.word);
  allWords.store.push(sortedWord);
  console.log('sorted word is', sortedWord);
  res.json(sortedWord);
});

app.listen(port, () => {
  console.log(`connected on port ${port}`);
});