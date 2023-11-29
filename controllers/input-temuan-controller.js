const { log } = require('console');
// const { input } = require('../models')
// const { Section_tab } = require('../models')
const { AreaTab } = require('../models/sms/area')
const { vw_login } = require('../models/sms/table-user');
const { tInput } = require('../models/sms/input-temuan');
const fs = require('fs')

module.exports = {
    // index: async (req, res) => {
    //     try {
    //         const pr = await input.findAll();
    //         console.log(pr)
    //         res.status(200).json(pr);
    //     } catch (e) {
    //         console.log(e)
    //         res.status(500).json(e)
    //     }
    // },
    index: async (req, res) => {
        try {
            // Fetch data from the input model
            const inputData = await tInput.findAll();
            
            // Fetch data from the vw_login model
            const vwLoginData = await vw_login.findAll();
    
            // Fetch data from the AreaTab model
            const areaData = await AreaTab.findAll();
    
            // Create an array to store updated input data
            const updatedInputData = [];
    
            for (const inputItem of inputData) {
                // Find a matching item in vwLoginData based on lg_nik and user columns
                const matchingVwLogin = vwLoginData.find(vwLoginItem => vwLoginItem.lg_nik === inputItem.user);
    
                // Find a matching item in areaData based on id_area
                const matchingArea = areaData.find(areaItem => areaItem.id === inputItem.id_area);
    
                if (matchingVwLogin && matchingArea) {
                    // Update the input model with lg_name from vw_login and area from Area_tab
                    inputItem.lg_name = matchingVwLogin.lg_name;
                    inputItem.area = matchingArea.area;
                    updatedInputData.push(inputItem);
                }
            }
    
            // Create a response JSON with the required fields
            const response = updatedInputData.map(item => ({
                id: item.id,
                user: item.lg_name,
                finding: item.finding,
                finding_description: item.finding_description,
                photo: item.photo,
                tanggal_temuan: item.tanggal_temuan,
                id_area: item.area, // Use area from Area_tab instead of id_area from input
                func_loc: item.func_loc,
                object_part: item.object_part,
                ob_detail: item.ob_detail,
                damage: item.damage,
                d_detail: item.d_detail,
                cause_code: item.cause_code,
                cc_detail: item.cc_detail,
                level: item.level,
                kategori: item.kategori,
                scope: item.scope,
                status: item.status,
                last_update: item.last_update,
                note: item.note,
                approve_by: item.approve_by,
                approve_date: item.approve_date,
                schedule: item.schedule,
                pic: item.pic,
                photo_type: item.photo_type,
                photo_size: item.photo_size,
                photo_width: item.photo_width,
                photo_height: item.photo_height,
                order_type: item.order_type,
                pm_act_type: item.pm_act_type,
                sys_cond: item.sys_cond,
                basic_start: item.basic_start,
                basic_finish: item.basic_finish,
                report_by: item.report_by,
                main_work_center: item.main_work_center,
                planner_group: item.planner_group,
                plant_section: item.plant_section,
                work_center: item.work_center,
                profit_center: item.profit_center,
                responsible_cost_center: item.responsible_cost_center,
                wbs_element: item.wbs_element,
                cost_center: item.cost_center,
                maintance_plan: item.maintance_plan,
                foto_validasi: item.foto_validasi,
                approve_spv: item.approve_spv,
                // Add other fields as needed
            }));
    
            res.status(200).json(response);
        } catch (e) {
            console.error(e);
            res.status(500).json(e);
        }
    },
    
    
    section: async (req, res) => {
        try {
            const sec = await AreaTab.findAll();
            console.log(sec)
            res.status(200).json(sec);
        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    },
    findById: async (req, res) => {
        try {
            const pr = await tInput.findOne({
                where: {
                    id: req.params.id,
                },
            });
            res.status(200).json(pr);
        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    },
    store: async (req, res) => {
        try {
            let itemDescImgPath = ''; // Initialize with an empty string

            // Check if an image file was uploaded
            if (req.file) {
                itemDescImgPath = `/uploads/${req.file.filename}`;
            }

            const document = await tInput.create({
                req_date: req.body.req_date,
                item_desc_img: itemDescImgPath,
                item_desc: req.body.item_desc,
                pic: req.body.pic,
                section: req.body.section,
                area: req.body.area,
                due_date: req.body.due_date,
                reason: req.body.reason,
                pr_number: req.body.pr_number,
                v_name: req.body.v_name,
                v_value: req.body.v_value,
                v2_name: req.body.v2_name,
                v2_value: req.body.v2_value,
                bidding: req.body.bidding,
                keterangan: req.body.keterangan,
            });

            res.status(200).json(document);
        } catch (error) {
            console.error(error)
            res.status(500).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            const document = await tInput.findOne({
                where: {
                    id: req.params.id,
                },
            });
            const check = fs.existsSync(`public/${document.item_desc_img}`);

            if (check) {
                if (document.item_desc_img != "") {
                    fs.unlinkSync(`public/${document.item_desc_img}`);
                }
            }
            await document.destroy();
            res.status(200).json({ message: "Data deleted" });
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    },
    update: async (req, res) => {
        try {

            let itemDescImgPath = ''; // Initialize with an empty string

            // Check if an image file was uploaded
            if (req.file) {
                itemDescImgPath = `/uploads/${req.file.filename}`;
            }

            const document = await tInput.findOne({
                where: {
                    id: req.params.id,
                },
            });
            let item_desc_img = document.item_desc_img;
            if (req.file) {
                item_desc_img = `/uploads/${req.file.filename}`;
                const check = fs.existsSync(`public${document.item_desc_img}`);
                if (check) {
                    if (document.item_desc_img != "") {
                        fs.unlinkSync(`public/${document.item_desc_img}`);
                    }
                }
            }

            const updateDocument = await tInput.update(
                {
                    req_date: req.body.req_date,
                    item_desc_img: itemDescImgPath,
                    item_desc: req.body.item_desc,
                    pic: req.body.pic,
                    section: req.body.section,
                    area: req.body.area,
                    due_date: req.body.due_date,
                    reason: req.body.reason,
                    pr_number: req.body.pr_number,
                    v_name: req.body.v_name,
                    v_value: req.body.v_value,
                    v2_name: req.body.v2_name,
                    v2_value: req.body.v2_value,
                    bidding: req.body.bidding,
                    keterangan: req.body.keterangan,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            );
            res.status(200).json(updateDocument);
        } catch (error) {
            console.log(error)
            res.status(500).json(error.message);
        }
    },

}