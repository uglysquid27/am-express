module.exports = function (sequelize, DataTypes) {
    const tm = sequelize.define(
        "vw_login",
        {
            lg_nik: {
                type: DataTypes.STRING,
            },
            lg_name: {
                type: DataTypes.STRING,
            },
        },
        {
            tableName: "vw_login",
        }
    );
    return tm;
};