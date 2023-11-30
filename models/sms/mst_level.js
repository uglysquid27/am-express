const { iot_prod } = require('../../config/connection');
const { DataTypes } = require('sequelize');

const levelTab = iot_prod.define(
    "mst_area",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        level: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "mst_level",
        timestamps: false
    }
);
// Synchronize model dengan database
(async () => {
    await iot_prod.sync();
    console.log('Model synchronized with database.');
})();
module.exports = { iot_prod, levelTab };
 
