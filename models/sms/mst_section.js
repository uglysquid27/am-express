const { iot_prod } = require('../../config/connection');
const { DataTypes } = require('sequelize');

const SectionTab = iot_prod.define(
    "mst_section",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        section: {
            type: DataTypes.STRING,
        },
        section_sap: {
            type: DataTypes.STRING,
        },
        id_area: {
            type: DataTypes.INTEGER,
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
        tableName: "mst_section",
        timestamps: false
    }
);
// Synchronize model dengan database
(async () => {
    await iot_prod.sync();
    console.log('Model synchronized with database.');
})();
module.exports = { iot_prod, SectionTab };
 