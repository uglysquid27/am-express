module.exports = function (sequelize, DataTypes) {
    const log = sequelize.define(
        "Login",
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            lg_nik: {
                type: DataTypes.STRING,
            },
            user_level: {
                type: DataTypes.INTEGER,
            },
        },
        {
            tableName: "table_user",
        }
    );
    return log;
};