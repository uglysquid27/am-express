const { sap_master } = require('../../config/connection');
const { DataTypes } = require('sequelize');

const qpgt = sap_master.define(
    "qpgt",
    {
        KATALOGART: {
            type: DataTypes.STRING,
        },
        CODEGRUPPE: {
            type: DataTypes.INTEGER,
        },
        SPRACHE: {
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
        }
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
 
