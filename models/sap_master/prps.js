const { sap_master } = require('../../config/connection');
const { DataTypes } = require('sequelize');

const qpgt = sap_master.define(
    "qpgt",
    {
        PSPNR: {
            type: DataTypes.STRING,
        },
        POSID: {
            type: DataTypes.INTEGER,
        },
        POST1: {
            type: DataTypes.STRING,
        },
        OBJNR: {
            type: DataTypes.STRING,
        },
        PRCTR: {
            type: DataTypes.STRING,
        },
        PRART: {
            type: DataTypes.STRING,
        },
        WERKS: {
            type: DataTypes.STRING,
        },
        POSTU: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "qpgt",
        timestamps: false
    }
);
// Synchronize model dengan database
(async () => {
    await sap_master.sync();
    console.log('Model synchronized with database.');
})();
module.exports = { sap_master, qpgt };
 
