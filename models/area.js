module.exports = function (sequelize, DataTypes) {
    const area = sequelize.define(
        "Area_tab",
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
        }
    );
    return area;
};