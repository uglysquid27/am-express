const { sap_master } = require('../../config/connection');
const { DataTypes } = require('sequelize');

const iflotx = sap_master.define(
    "iflotx",
    {
        TPLNR: {
            type: DataTypes.STRING,
        },
        PLTXT: {
            type: DataTypes.STRING,
        },
        PLTXU: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "iflotx",
        timestamps: false
    } 
);
// Synchronize model dengan database
(async () => {
    await sap_master.sync();
    console.log('Model synchronized with database.');
})();
module.exports = { sap_master, iflotx };
 
