const express = require("express");
const router = express.Router();
const bodyParser =require('body-parser')

const app = express()
app.use(bodyParser.json())

let list = [
  {
    id: 98573215314,
    fn: "Olle",
    ln: "Hockeyproffs",
    yrke: "lärare",
    email: "olle@outlook.com",
    banknr: '1234 - 5555',
  },
  {
    id: 789452487568,
    fn: "Maria",
    ln: "White",
    yrke: "lärare",
    email: "maria.white@gmail.com",
    banknr: '1234 - 5555',
  },
  {
    id: 75412457842,
    fn: "Alexander",
    ln: "Winqvist",
    yrke: "Utbildningsledare",
    email: "Alexander.Wingqvist@altavista.com",
    banknr: "5566 - 5555",
  },
  {
    id: 754124451240,
    fn: "Ida",
    ln: "Olsson",
    yrke: "Utbildningsledare",
    email: "ida.olsson@learnpoint.com",
    banknr: "3366 - 5555",
  },
];

router.get("/staff", (req, res) => {
  console.log({
    method: req.method,
  });

  res.json({
    status: "success",
    method: req.method,
    data: list,
  });
});

router.post("/staff", (req, res) => {
  console.log({
    method: req.method,
    body: req.body,
  });

  const staff = {
    id: req.body.id,
    fn: req.body.fn,
    ln: req.body.ln,
    yrke: req.body.yrke,
    email: req.body.email,
    banknr: req.body.banknr,
  };

  list.push(staff);

  res.json({
    status: "success",
    method: req.method,
    data: list,
  });
});

router.put("/staff/:staffId", (req, res) => {
  const staffId = Number(req.params.staffId);
  const fn = req.body.fn;
  const ln = req.body.ln;
  const yrke = req.body.yrke;
  const email = req.body.email;
  const banknr = req.body.banknr;

  const newStaff = {
    id: staffId,
    fn,
    ln,
    yrke,
    email,
    banknr,
  };
  const staffIndex = list.findIndex((staff) => staff.id == staffId);

  list[staffIndex] = newStaff;

  console.log({
    method: req.method,
    body: req.body,
    data: newStaff,
  });
  res.json({
    status: "success",
    method: req.method,
    data: newStaff,
  });
});

router.delete("/staff/:staffId", (req, res) => {
  const staffId = req.params.staffId;
  const staffIndex = list.findIndex((staff) => staff.id == staffId);

  if (staffIndex > -1) {
    list.splice(staffIndex, 1);
  }

  res.json({
    status: "success",
    method: req.method,
    data: staffId,
  });
});

module.exports = router;
