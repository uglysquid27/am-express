const { sap_master } = require('../../config/connection');
const { DataTypes } = require('sequelize');

const t357 = sap_master.define(
    "t357",
    {
        WERKS: {
            type: DataTypes.STRING,
        },
        BEBER: {
            type: DataTypes.INTEGER,
        },
        FING: {
            type: DataTypes.STRING,
        },
        TELE: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "t357",
        timestamps: false
    }
);
// Synchronize model dengan database
(async () => {
    await sap_master.sync();
    console.log('Model synchronized with database.');
})();
module.exports = { sap_master, t357 };
 
