const { iot_prod } = require('../../config/connection');
const { DataTypes } = require('sequelize');

const kategoriTab = iot_prod.define(
    "mst_area",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        kategori: {
            type: DataTypes.STRING,
        },
        wo_type: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "mst_kategori",
        timestamps: false
    }
);
// Synchronize model dengan database
(async () => {
    await iot_prod.sync();
    console.log('Model synchronized with database.');
})();
module.exports = { iot_prod, kategoriTab };
 
