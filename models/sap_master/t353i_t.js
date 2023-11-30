const { sap_master } = require('../../config/connection');
const { DataTypes } = require('sequelize');

const t353i_t = sap_master.define(
    "t353i_t",
    {
        ILART: {
            type: DataTypes.STRING,
        },
        ILATX: {
            type: DataTypes.INTEGER,
        }
    },
    {
        tableName: "t353i_t",
        timestamps: false
    }
);
// Synchronize model dengan database
(async () => {
    await sap_master.sync();
    console.log('Model synchronized with database.');
})();
module.exports = { sap_master, t353i_t };
 
