const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/familymanager"
);

const familyInfoSeed = [
  {
    category: "Family Members",
    dataText: "Adam, dad | SSN: 123-45-6789\nDOB: 1982.11.20\n\nAlison, mom | SSN: 124-56-7890\nDOB: 1983.05.08\n\nLiam, son | SSN: 125-67-8903\nDOB: 2010.07.24\n\nLydia, daughter | SSN: 126-789-0345\nDOB: 2016.05.01",
  },
  {
    category: "Health Info",
    dataText: "Suggestions:\nInsurance information\nDoctors\nDentists\nImmunization tracking\nFamily Medical History",
  },
  {
    category: "Asset Details",
    dataText: "Model numbers of appliances, electronics, and tools\nLinks to documentation\nWarranty information",
  },
  {
    category: "Family Places",
    dataText: "Home(s), work places, schools, daycares, and more",
  },
  {
    category: "Caregivers",
    dataText: "Data on babysitters and emergency contacts",
  },
  {
    category: "Dwelling Info",
    dataText: "Address, home insurance info, links to electrical or plumbing schematics, service information and dates, details on subscriptions or other service plans, tracking of anything from roof age to plans for renovations or updates, etc.",
  },
  {
    category: "Car Info",
    dataText: "Details on your vehicle(s), including makes/models for reference, VIN numbers, license plate numbers, insurance data, etc.",
  }
];

db.FamilyInfo
  .remove({})
  .then(() =>
  db.FamilyInfo.collection.insertMany(familyInfoSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
