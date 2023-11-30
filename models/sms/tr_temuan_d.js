const { iot_prod } = require('../../config/connection');
const { DataTypes } = require('sequelize');

const temuanD = iot_prod.define(
    "tr_temuan_d",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        id_temuan: {
            type: DataTypes.INTEGER,
        },
        kode: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        quantity: {
            type: DataTypes.INTEGER,
        },
        uom: {
            type: DataTypes.STRING,
        },
        IC: {
            type: DataTypes.STRING,
        },
        batch: {
            type: DataTypes.STRING,
        },
        sloc: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "tr_temuan_d",
        timestamps: false
    }
);
// Synchronize model dengan database
(async () => {
    await iot_prod.sync();
    console.log('Model synchronized with database.');
})();
module.exports = { iot_prod, temuanD };
 
