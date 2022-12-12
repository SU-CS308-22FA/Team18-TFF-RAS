// const mongoose = require('mongoose');
import mongoose from 'mongoose';



const refSchema = new mongoose.Schema({
    name: "",
    licenceNumber: "",
    classification: "",
    region: "",
    matchesRuled: [],
    refID:""}
);
export default mongoose.model("Referee", refSchema);