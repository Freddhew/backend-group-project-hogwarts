const express = require("express");
const router = express.Router();

let staffs = [
  {
    id: 98573215314,
    firstName: "Gargamel",
    lastName: "Bishop",
    yrke: "lärare",
    email: "Gargamel@bishop123",
    banknr: 1245 - 65412378,
  },
  {
    id: 789452487568,
    firstName: "Sara",
    lastName: "Greveholm",
    yrke: "lärare",
    email: "greven_Sara@.gmail",
    banknr: 3456 - 7895486,
  },
  {
    id: 75412457842,
    firstName: "Beder",
    lastName: "Plantage",
    yrke: "Utbildningsledare",
    email: "cotton_King@plantagen.com",
    banknr: 7894 - 9632584,
  },
  {
    id: 754124451240,
    firstName: "Maria",
    lastName: "Andersson",
    yrke: "Utbildningsledare",
    email: "mia_andersson@learn_more.com",
    banknr: 7894 - 9632584,
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
    firstName: request.body.firstName,
    lastName: request.body.lastName,
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
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const yrke = request.body.yrke;
  const email = request.body.email;
  const banknr = request.body.banknr;

  const newStaff = {
    id: staffId,
    firstName,
    lastName,
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
