const { sap_master } = require('../../config/connection');
const { DataTypes } = require('sequelize');

const crhd = sap_master.define(
    "crhd",
    {
        OBJTY: {
            type: DataTypes.STRING,
        },
        OBJID: {
            type: DataTypes.INTEGER,
        },
        BEDGA: {
            type: DataTypes.STRING,
        },
        ENDDA: {
            type: DataTypes.STRING,
        },
        ARBPL: {
            type: DataTypes.STRING,
        },
        WERKS: {
            type: DataTypes.STRING,
        },
        VERWE: {
            type: DataTypes.STRING,
        },
        LVORM: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "crhd",
        timestamps: false
    }
);
// Synchronize model dengan database
(async () => {
    await sap_master.sync();
    console.log('Model synchronized with database.');
})();
module.exports = { sap_master, crhd };
 
