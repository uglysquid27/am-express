const { sap_master } = require('../../config/connection');
const { DataTypes } = require('sequelize');

const csks = sap_master.define(
    "csks",
    {
        KOKRS: {
            type: DataTypes.STRING,
        },
        KOSTL: {
            type: DataTypes.INTEGER,
        },
        DATBI: {
            type: DataTypes.STRING,
        },
        DATAB: {
            type: DataTypes.STRING,
        },
        BUKRS: {
            type: DataTypes.STRING,
        },
        GSBER: {
            type: DataTypes.STRING,
        },
        KOSAR: {
            type: DataTypes.STRING,
        },
        VERAK: {
            type: DataTypes.STRING,
        },
        PRCTR: {
            type: DataTypes.STRING,
        },
        WERKS: {
            type: DataTypes.STRING,
        },
        KHINR: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "csks",
        timestamps: false
    }
);
// Synchronize model dengan database
(async () => {
    await sap_master.sync();
    console.log('Model synchronized with database.');
})();
module.exports = { sap_master, csks };
 
