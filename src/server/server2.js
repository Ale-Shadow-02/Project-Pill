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

// app.post("/list", (req, res) => {
//   // lists.push(req.body);
//   // console.log(lists);
//   // res.json(lists);
//   req.body.forEach((elem) => {
//     connection.query(
//       `
//     INSERT INTO lists(id_pill, value_title, selected_radio, morning, daytime, evening, list_title)
//     VALUES("${elem.id}", "${elem.valueTitle}", "${elem.selectedRadio}", "${elem.morning}", "${elem.day}", "${elem.evening}", "${elem.listTitle}")
//     `,
//       (err, data) => {
//         console.log(data);
//       }
//     );
//   });
// });

// app.get("/list", (req, res) => {
//   connection.query("SELECT * FROM lists", (err, data) => {
//     if (!err) {
//       res.json(data);
//     } else {
//       res.status(500).send();
//     }
//   });
// });

// app.delete("/list/:id", (req, res) => {
//   const listId = parseInt(req.params.id);
//   console.log(listId);
//   connection.query(`DELETE FROM lists WHERE id = ${listId}`, (err, data) => {
//     if (!err) {
//       console.log(data);
//     } else {
//       console.log(err);
//     }
//   });
// });

// connection.query("DELETE FROM lists WHERE id > 0", (err, data) => {
//   if (!err) {
//     console.log(data);
//   } else {
//     console.log(err);
//   }
// });

// connection.query("DELETE FROM list_title WHERE id > 0", (err, data) => {
//   if (!err) {
//     console.log(data);
//   } else {
//     console.log(err);
//   }
// });

// app.delete("/list/:id", (req, res) => {
//   const listId = parseInt(req.params.id);
//   lists = lists.filter((el) => parseInt(el.id) !== listId);
//   if (lists) {
//     res.json(lists);
//   } else {
//     res.status(404).send("Нет такого");
//   }
// });

/*app.put("/list/:id", (req, res) => {
  const listId = parseInt(req.params.id);
  const listIdx = lists.findIndex((el) => parseInt(el.id) === listId);
  if (listIdx !== -1) {
    const oldList = lists[listIdx];
    lists[listIdx] = { ...oldList, ...req.body };
    res.json(lists[listIdx]);
  } else {
    res.status(404).send("Нет такого");
  }
});*/

app.listen(8000, () => {
  console.log("Сервер запущен на 8000 порту");
});