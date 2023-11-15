module.exports = function (sequelize, DataTypes) {
    const sec = sequelize.define(
        "Section_tab",
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
    return sec;
};