const { sap_master } = require('../../config/connection');
const { DataTypes } = require('sequelize');

const qpcd = sap_master.define(
    "qpcd",
    {
        KATALOGART: {
            type: DataTypes.STRING,
        },
        CODEGRUPPE: {
            type: DataTypes.INTEGER,
        },
        CODE: {
            type: DataTypes.STRING,
        },
        VERSION: {
            type: DataTypes.STRING,
        },
        GUELTIGAB: {
            type: DataTypes.STRING,
        },
        FEHLKLASSE: {
            type: DataTypes.STRING,
        },
        ERSTELLER: {
            type: DataTypes.STRING,
        },
        E_DATUM: {
            type: DataTypes.STRING,
        },
        AENDERER: {
            type: DataTypes.STRING,
        },
        A_DATUM: {
            type: DataTypes.STRING,
        },
        INAKTIV: {
            type: DataTypes.STRING,
        },
        VERWENDUNG: {
            type: DataTypes.STRING,
        },
        GELOESCHT: {
            type: DataTypes.STRING,
        },
        FOLGEAKTI: {
            type: DataTypes.STRING,
        }
    },
    {
        tableName: "qpcd",
        timestamps: false
    }
);
// Synchronize model dengan database
(async () => {
    await sap_master.sync();
    console.log('Model synchronized with database.');
})();
module.exports = { sap_master, qpcd };
 
