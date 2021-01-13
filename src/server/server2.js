const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

let lists = [];
let countId = 1;
app.post("/list", (req, res) => {
  const list = {
    id: countId,
    title: req.body.title,
    newList: req.body.newList,
  };
  countId += 1;
  lists.push(list);
  console.log(lists);
  res.json(lists);
});

app.get("/list", (req, res) => {
  res.json(lists);
});

app.get("/list/:id", (req, res) => {
  const finded = lists.find((el) => el.id === parseInt(req.params.id));
  if (!finded) {
    res.status(404).send("Нет такого пользователя");
  } else {
    res.status(200).json(finded);
  }
});

app.delete("/list/:id", (req, res) => {
  const listId = parseInt(req.params.id);
  console.log(listId);
  lists = lists.filter((el) => parseInt(el.id) !== listId);
  if (lists) {
    res.json(lists);
  } else {
    res.status(404).send("Нет такого");
  }
});

app.listen(8000, () => {
  console.log("Сервер запущен на 8000 порту");
});
