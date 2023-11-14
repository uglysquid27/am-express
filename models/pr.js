module.exports = function (sequelize, DataTypes) {
    const pr = sequelize.define(
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
          type: DataTypes.INTEGER,
        },
        area: {
          type: DataTypes.INTEGER,
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
      },
      {
        tableName: "mst_pr",
      }
    );
    return pr;
  };