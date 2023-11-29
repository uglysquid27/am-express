const { iot_prod } = require('../../config/connection');
const { DataTypes } = require('sequelize');

    const userLevel = iot_prod.define(
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
    (async () => {
        await iot_prod.sync();
        console.log('Model synchronized with database.');
    })();
    module.exports = { iot_prod, userLevel };
