module.exports = function (sequelize, DataTypes) {
    const tUser = sequelize.define(
        "userLevel",
        {
            
            lg_nik: {
                type: DataTypes.STRING,
            },
            lg_name: {
                type: DataTypes.STRING,
            },
            lg_password: {
                type: DataTypes.STRING,
            },
            lg_location: {
                type: DataTypes.STRING,
            },
            lg_product: {
                type: DataTypes.STRING,
            },
            lg_email_aio: {
                type: DataTypes.INTEGER,
            },
            lg_email_private: {
                type: DataTypes.INTEGER,
            },
            lg_aktif: {
                type: DataTypes.STRING,
            },
            n_photo: {
                type: DataTypes.STRING,
            },
            user_level: {
                type: DataTypes.STRING,
            },
            n_phone: {
                type: DataTypes.STRING,
            },
        },
        {
            tableName: "table_user",
        }
    );
    return tUser;
};