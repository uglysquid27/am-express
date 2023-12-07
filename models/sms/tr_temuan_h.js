const { iot_prod } = require('../../config/connection');
const { DataTypes } = require('sequelize');

    const tInput = iot_prod.define(
        "input",
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            finding: {
                type: DataTypes.STRING,
            },
            finding_description: {
                type: DataTypes.STRING,
            },
            photo: {
                type: DataTypes.STRING,
            },
            user: {
                type: DataTypes.STRING,
            },
            tanggal_temuan: {
                type: DataTypes.STRING,
            },
            id_area: {
                type: DataTypes.INTEGER,
            },
            id_section: {
                type: DataTypes.INTEGER,
            },
            func_loc: {
                type: DataTypes.INTEGER,
            },
            object_part: {
                type: DataTypes.STRING,
            },
            ob_detail: {
                type: DataTypes.STRING,
            },
            damage: {
                type: DataTypes.STRING,
            },
            d_detail: {
                type: DataTypes.STRING,
            },
            cause_code: {
                type: DataTypes.STRING,
            },
            cc_detail: {
                type: DataTypes.STRING,
            },
            level: {
                type: DataTypes.INTEGER,
            },
            kategori: {
                type: DataTypes.INTEGER,
            },
            scope: {
                type: DataTypes.INTEGER,
            },
            status: {
                type: DataTypes.STRING,
            },
            last_update: {
                type: DataTypes.STRING,
            },
            note: {
                type: DataTypes.STRING,
            },
            approve_by: {
                type: DataTypes.STRING,
            },
            approve_date: {
                type: DataTypes.STRING,
            },
            schedule: {
                type: DataTypes.STRING,
            },
            pic: {
                type: DataTypes.STRING,
            },
            photo_type: {
                type: DataTypes.STRING,
            },
            photo_size: {
                type: DataTypes.STRING,
            },
            photo_width: {
                type: DataTypes.STRING,
            },
            photo_height: {
                type: DataTypes.STRING,
            },
            order_type: {
                type: DataTypes.STRING,
            },
            pm_act_type: {
                type: DataTypes.STRING,
            },
            sys_cond: {
                type: DataTypes.STRING,
            },
            basic_start: {
                type: DataTypes.STRING,
            },
            basic_finish: {
                type: DataTypes.STRING,
            },
            report_by: {
                type: DataTypes.STRING,
            },
            main_work_center: {
                type: DataTypes.STRING,
            },
            planner_group: {
                type: DataTypes.STRING,
            },
            plant_section: {
                type: DataTypes.STRING,
            },
            work_center: {
                type: DataTypes.STRING,
            },
            profit_center: {
                type: DataTypes.STRING,
            },
            responsible_cost_center: {
                type: DataTypes.STRING,
            },
            wbs_element: {
                type: DataTypes.STRING,
            },
            cost_center: {
                type: DataTypes.STRING,
            },
            maintance_plan: {
                type: DataTypes.STRING,
            },
            foto_validasi: {
                type: DataTypes.STRING,
            },
            approve_spv: {
                type: DataTypes.STRING,
            },
        },
        {
            tableName: "tr_temuan_h",
        }
    );
    (async () => {
        await iot_prod.sync();
        console.log('Model synchronized with database.');
    })();
    module.exports = { iot_prod, tInput };
    