const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

let lists = [
  { id: 1, title: "Paracetomol" },
  { id: 2, title: "Analgin" },
];

app.post("/list", (req, res) => {
  lists.push(req.body);
  res.json(lists);
});

app.get("/list", (req, res) => {
  if (!lists) {
    res.status(404).send();
  } else {
    res.status(200).json(lists);
  }
});

app.get("/list/:id", (req, res) => {
  const finded = lists.find((el) => el.id === parseInt(req.params.id));
  if (!finded) {
    res.status(404).send("Нет такого пользователя");
  } else {
    res.status(200).json(finded);
  }
});

app.put("/list/:id", (req, res) => {
  const listId = parseInt(req.params.id);
  const listIdx = lists.findIndex((el) => parseInt(el.id) === listId);
  if (listIdx !== -1) {
    const oldList = lists[listIdx];
    lists[listIdx] = { ...oldList, ...req.body };
    res.json(lists[listIdx]);
  } else {
    res.status(404).send("Нет такого");
  }
});

app.delete("/list/:id", (req, res) => {
  const listId = parseInt(req.params.id);
  lists = lists.filter((el) => parseInt(el.id) !== listId);
  if (lists) {
    res.json(lists);
  } else {
    res.status(404).send("Нет такого");
  }
});

app.listen(5000, () => {
  console.log("Сервер запущен на 5000 порту");
});
