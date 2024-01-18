const { sap_master } = require('../../config/connection');
const { DataTypes } = require('sequelize');

const lfa1 = sap_master.define(
    "lfa1",
    {
        LIFNR: {
            type: DataTypes.STRING,
        },
        NAME1: {
            type: DataTypes.STRING,
        },
        ADRNR: {
            type: DataTypes.STRING,
        },
        KUNNR: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "lfa1",
        timestamps: false
    } 
);
// Synchronize model dengan database
(async () => {
    await sap_master.sync();
    console.log('Model synchronized with database.');
})();
module.exports = { sap_master, lfa1 };
 
