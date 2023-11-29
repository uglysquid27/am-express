const { iot_prod } = require('../../config/connection');
const { DataTypes } = require('sequelize');

    const vw_login = iot_prod.define(
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
    (async () => {
        await iot_prod.sync();
        console.log('Model synchronized with database.');
    })();
    module.exports = { iot_prod, vw_login };
