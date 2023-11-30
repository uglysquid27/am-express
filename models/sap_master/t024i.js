const { sap_master } = require('../../config/connection');
const { DataTypes } = require('sequelize');

const t024i = sap_master.define(
    "t024i",
    {
        IWERK: {
            type: DataTypes.STRING,
        },
        INGRP: {
            type: DataTypes.INTEGER,
        },
        INNAM: {
            type: DataTypes.STRING,
        },
        INTEL: {
            type: DataTypes.STRING,
        },
        AUART_WP: {
            type: DataTypes.STRING,
        },
        SMTP_ADDR: {
            type: DataTypes.STRING,
        }
    },
    {
        tableName: "t024i",
        timestamps: false
    }
);
// Synchronize model dengan database
(async () => {
    await sap_master.sync();
    console.log('Model synchronized with database.');
})();
module.exports = { sap_master, t024i };
 
