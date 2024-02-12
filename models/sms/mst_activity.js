const { iot_prod } = require('../../config/connection');
const { DataTypes } = require('sequelize');

const ActivityTab = iot_prod.define(
    "mst_activity",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        activity: {
            type: DataTypes.STRING,
        },
        duration: {
            type: DataTypes.TIME,
        },
        color: {
            type: DataTypes.INTEGER,
        },
    },
    {
        tableName: "mst_activity",
        timestamps: false
    }
);
// Synchronize model dengan database
(async () => {
    await iot_prod.sync();
    console.log('Model synchronized with database.');
})();
module.exports = { iot_prod, ActivityTab };
 
