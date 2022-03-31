const express = require("express");
const router = express.Router();
const bodyParser =require('body-parser')

const app = express()
app.use(bodyParser.json())

let staffs = [
  {
    id: 98573215314,
    fn: "Olle",
    ln: "Hockeyproffs",
    yrke: "lärare",
    email: "olle@outlook.com",
    banknr: 1234 - 5555,
  },
  {
    id: 789452487568,
    fn: "Maria",
    ln: "White",
    yrke: "lärare",
    email: "maria.white@gmail.com",
    banknr: 1234 - 5555,
  },
  {
    id: 75412457842,
    fn: "Alexander",
    ln: "Winqvist",
    yrke: "Utbildningsledare",
    email: "Alexander.Wingqvist@altavista.com",
    banknr: 5566 - 5555,
  },
  {
    id: 754124451240,
    fn: "Ida",
    ln: "Olsson",
    yrke: "Utbildningsledare",
    email: "ida.olsson@learnpoint.com",
    banknr: 3366 - 5555,
  },
];

router.get("/Staff", (request, response) => {
  console.log({
    method: request.method,
  });

  response.json({
    status: "success",
    method: request.method,
    data: staffs,
  });
});

router.post("/Staff", (request, response) => {
  console.log({
    method: request.method,
    body: request.body,
  });

  const staff = {
    id: request.body.id,
    fn: request.body.fn,
    ln: request.body.ln,
    yrke: request.body.yrke,
    email: request.body.email,
    banknr: request.body.banknr,
  };

  staffs.push(staff);

  response.json({
    status: "success",
    method: request.method,
    data: staffs,
  });
});

router.put("/Staff/:staffId", (request, response) => {
  const staffId = Number(request.params.staffId);
  const fn = request.body.fn;
  const ln = request.body.ln;
  const yrke = request.body.yrke;
  const email = request.body.email;
  const banknr = request.body.banknr;

  const newStaff = {
    id: staffId,
    fn,
    ln,
    yrke,
    email,
    banknr,
  };
  const staffIndex = staffs.findIndex((staff) => staff.id == staffId);

  staffs[staffIndex] = newStaff;

  console.log({
    method: request.method,
    body: request.body,
    data: newStaff,
  });
  response.json({
    status: "success",
    method: request.method,
    data: newStaff,
  });
});

router.delete("/Staff/:staffId", (request, response) => {
  const staffId = request.params.staffId;
  const staffIndex = staffs.findIndex((staff) => staff.id == staffId);

  if (staffIndex > -1) {
    staffs.splice(staffIndex, 1);
  }

  response.json({
    status: "success",
    method: request.method,
    data: staffId,
  });
});

module.exports = router;
