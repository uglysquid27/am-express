const { iot_prod } = require('../../config/connection');
const { DataTypes } = require('sequelize');

    const Pr_monitoring = iot_prod.define(
      "Pr_monitoring",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        req_date: {
          type: DataTypes.STRING,
        },
        item_desc_img: {
          type: DataTypes.STRING,
        },
        item_desc: {
          type: DataTypes.STRING,
        },
        pic: {
          type: DataTypes.STRING,
        },
        section: {
          type: DataTypes.STRING,
        },
        area: {
          type: DataTypes.STRING,
        },
        due_date: {
          type: DataTypes.STRING,
        },
        reason: {
          type: DataTypes.STRING,
        },
        pr_number: {
          type: DataTypes.INTEGER,
        },
        v_name: {
          type: DataTypes.STRING,
        },
        v_value: {
          type: DataTypes.STRING,
        },
        v2_name: {
          type: DataTypes.STRING,
        },
        v2_value: {
          type: DataTypes.STRING,
        },
        bidding: {
          type: DataTypes.STRING,
        },
        keterangan: {
          type: DataTypes.STRING,
        },
        attachment: {
          type: DataTypes.STRING,
        },
        attachment2: {
          type: DataTypes.STRING,
        },
        v_inputDate: {
          type: DataTypes.STRING,
        },
        v2_inputDate: {
          type: DataTypes.STRING,
        }
      },
      {
        tableName: "mst_pr",
      }
    );
    (async () => {
      await iot_prod.sync();
      console.log('Model synchronized with database.');
  })();
  module.exports = { iot_prod, Pr_monitoring };