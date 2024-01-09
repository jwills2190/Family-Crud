const mongoose = require('mongoose');

const familySchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            unique: true,
            required: true
        },
        Relation: {
            type: String,
            required: true
        },
        Age: {
            type: Number,
            required: true
        },
        City: {
            type: String,
            required: true
        },
        Birthplace: {
            type: String,
            required: true
        },
        Lived_In: [{
            type: String
        }]
    },
    {
        timestamps: true
    }
)
const Family = mongoose.model("Family", familySchema);

module.exports = Family;