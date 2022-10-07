// <-------imports---------->
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const pg = require("pg");
const cors = require("cors");

// <----DataBase Details ------->
const PORT = 5000;
const pool = new pg.Pool({
  port: 5432,
  password: "password",
  database: "assignment",
  host: "localhost",
  user: "postgres",
  max: 10,
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept"
  );
  next();
});
// Create Api Call 
app.post("/api/post", function (request, response) {
 
  const id = request.body.id;
  const product_name = request.body.product_name;
  const status = request.body.status;
  const user_id = request.body.user_id ;
  const created_date = request.body.created_date ;
  const values = [id,user_id,status, product_name, created_date];
  console.log(user_id);
  pool.connect((err, db, done) => {
    if (err) {
      return console.log(err);
    } else {
      db.query(
        "INSERT INTO orders (id,user_id,status, product_name,created_date) VALUES($1, $2, $3, $4, $5) RETURNING *",
        [...values],
        (err, result) => {
          done();
          if (err) {
            console.log(err);
            return response.status(400).send({ err });
          } else {
            console.log( "Data inserted!");
            db.end();
            response.status(201).send({ message: "Data inserted!" });
          }
        }
      );
    }
  });
});
// Get Api call 
app.get("/api/list", function (request, response) {
  pool.connect(function (err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query("SELECT * FROM orders", (err, table) => {
        done();
        if (err) {
          return response.status(400).send(err);
        } else {
          console.log("its Done");
          return response.status(200).send(table);
        }
      });
    }
  });
});



app.listen(PORT, () => console.log("Listening on Port" + PORT));
