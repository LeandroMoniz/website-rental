const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const User = require("../models/User");

// const Rent = db.define("Rent", {
//     id: {
//         type: DataTypes.STRING,
//         required: false,
//     },
//     listing_url: {
//         type: DataTypes.STRING,
//         required: false,
//     },
//     scrape_id: {
//         type: DataTypes.STRING,
//         required: false,
//     },
//     last_scraped: {
//         type: DataTypes.STRING,
//         required: false,
//     },
//     name: {
//         type: DataTypes.STRING,
//         required: false,
//     },
//     summary: {
//         type: DataTypes.STRING,
//         required: false,
//     },
//     space: {
//         type: DataTypes.STRING,
//         required: false,
//     },
//     description: {
//         type: DataTypes.STRING,
//         required: false,
//     },
//     experiences_offered: {
//         type: DataTypes.STRING,
//         required: false,
//     },
//     neighborhood_overview: {
//         type: DataTypes.STRING,
//         required: false,
//     },
//     notes: {
//         type: DataTypes.STRING,
//         required: false,
//     },
//     transit	: {
//         type: DataTypes.STRING,
//         required: false,
//     },
//     thumbnail_url: {
//         type: DataTypes.STRING,
//         required: false,
//     },
// })

//Rent.belongsTo(User);
//User.hasMany(Rent);

//module.exports = Rent