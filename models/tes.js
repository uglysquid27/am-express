module.exports = function (sequelize, DataTypes) {
    const tes = sequelize.define(
      "Tes",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        name: {
          type: DataTypes.STRING,
        },
      },
      {
        tableName: "tes",
      }
    );
    return tes;
  };