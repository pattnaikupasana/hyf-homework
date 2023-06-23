const express = require("express");
const app = express();
const documents = require("./documents.json");

const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

// GET /search
app.get("/search", (req, res) => {
  const q = req.query.q;
  let result;

  if (q) {
    result = documents.filter((doc) => doc.value.includes(q));
  } else {
    result = documents.value;
  }

  res.json(result);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
//GET /documents/:id
app.get("/documents/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const document = documents.find((doc) => doc.id === id);
  if (document) {
    res.status(200).json(document);
  } else {
    res.status(404).send("Not Found");
  }
});
