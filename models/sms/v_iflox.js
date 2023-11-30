const { iot_prod } = require('../../config/connection');
const { DataTypes } = require('sequelize');

const ifloxTab = iot_prod.define(
    "iflox",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        TPLNR: {
            type: DataTypes.STRING,
        },
        PLTXT: {
            type: DataTypes.STRING,
        },
        id_area: {
            type: DataTypes.STRING,
        },
        area: {
            type: DataTypes.STRING,
        },
        id_section: {
            type: DataTypes.STRING,
        },
        section: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "v_iflotx_sms",
        timestamps: false
    }
);
// Synchronize model dengan database
(async () => {
    await iot_prod.sync();
    console.log('Model synchronized with database.');
})();
module.exports = { iot_prod, ifloxTab };
 
