const { iot_prod } = require('../../config/connection');
const { DataTypes } = require('sequelize');

const AreaTab = iot_prod.define(
    "mst_area",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        area: {
            type: DataTypes.STRING,
        },
        is_active: {
            type: DataTypes.INTEGER,
        },
        last_update: {
            type: DataTypes.STRING,
        },
        update_by: {
            type: DataTypes.STRING,
        }
    },
    {
        tableName: "mst_area",
        timestamps: false
    }
);
// Synchronize model dengan database
(async () => {
    await iot_prod.sync();
    console.log('Model synchronized with database.');
})();
module.exports = { iot_prod, AreaTab };
 
