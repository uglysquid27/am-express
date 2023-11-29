const { iot_prod } = require('../config/connection');

module.exports = function (sequelize, DataTypes) {
    const SectionTab = iot_prod.define(
        "section_tab",
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
        }
    );
    // Synchronize model dengan database
    (async () => {
        await iot_prod.sync();
        // console.log('Model synchronized with database.');
    })();
    module.exports = { iot_prod, SectionTab };
};
 