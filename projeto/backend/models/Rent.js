const { DataTypes } = require('sequelize')
const db = require('../db/conn')


const Rent = db.define('Rent', {
    listing_url: {
        type: DataTypes.STRING,
        required: true,
    },
    scrape_id: {
        type: DataTypes.STRING,
        required: true,
    },
    last_scraped: {
        type: DataTypes.STRING,
        required: true,
    },
    name: {
        type: DataTypes.STRING,
        required: true,
    },
    summary: {
        type: DataTypes.STRING,
        required: true,
    },
    space: {
        type: DataTypes.STRING,
        required: true,
    },
    description: {
        type: DataTypes.STRING,
        required: true,
    },
    experiences_offered: {
        type: DataTypes.STRING,
        required: true,
    },
    neighborhood_overview: {
        type: DataTypes.STRING,
        required: true,
    },
    notes: {
        type: DataTypes.STRING,
        required: true,
    },
    transit	: {
        type: DataTypes.STRING,
        required: true,
    },
    thumbnail_url: {
        type: DataTypes.STRING,
        required: true,
    },
})

module.exports = Rent