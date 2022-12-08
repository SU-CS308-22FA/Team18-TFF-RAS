const mongoose = require('mongoose');

const refSchema = new mongoose.Schema({
    name: "",
    licenceNumber: "",
    classification: "",
    region: "",
    matchesRuled: [],
    refID:""}
);
module.exports = mongoose.model("Referee", refSchema);