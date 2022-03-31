const express = require("express");
const router = express.Router();

let staffs = [
  {
    id: 98573215314,
    firstName: "Olle",
    lastName: "Hockeyproffs",
    yrke: "lärare",
    email: "olle@outlook.com",
    banknr: 1234 - 5555,
  },
  {
    id: 789452487568,
    firstName: "Maria",
    lastName: "White",
    yrke: "lärare",
    email: "maria.white@gmail.com",
    banknr: 1234 - 5555,
  },
  {
    id: 75412457842,
    firstName: "Alexander",
    lastName: "Winqvist",
    yrke: "Utbildningsledare",
    email: "Alexander.Wingqvist@altavista.com",
    banknr: 5566 - 5555,
  },
  {
    id: 754124451240,
    firstName: "Ida",
    lastName: "Olsson",
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
