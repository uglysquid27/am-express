const { sap_master } = require('../../config/connection');
const { DataTypes } = require('sequelize');

const qpct = sap_master.define(
    "qpct",
    {
        KATALOGART: {
            type: DataTypes.STRING,
        },
        CODEGRUPPE: {
            type: DataTypes.INTEGER,
        },
        CODE: {
            type: DataTypes.INTEGER,
        },
        SPRACHE: {
            type: DataTypes.STRING,
        },
        VERSION: {
            type: DataTypes.STRING,
        },
        GUELTIGAB: {
            type: DataTypes.STRING,
        },
        KURZTEXT: {
            type: DataTypes.STRING,
        },
        LTEXTV: {
            type: DataTypes.STRING,
        },
        INAKTIV: {
            type: DataTypes.STRING,
        },
        GELOESCHT: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "qpct",
        timestamps: false
    }
);
// Synchronize model dengan database
(async () => {
    await sap_master.sync();
    console.log('Model synchronized with database.');
})();
module.exports = { sap_master, qpct };
 
