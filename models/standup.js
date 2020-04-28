
const mongoose = require('mongoose');

const standupSchema = new mongoose.Schema({
  teamMember: { type: String },
  project: { type: String },
  workYesterday: { type: String },
  workToday: { type: String },
  createdOn: {type:Date, default: Date.now}
});
