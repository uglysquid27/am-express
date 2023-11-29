const { log } = require('console');
const { Pr_monitoring } = require('../models/sms/pr')
const { SectionTab } = require('../models/sms/section')
const fs = require('fs')

module.exports = {
    index: async (req, res) => {
        try {
            const pr = await Pr_monitoring.findAll();
            console.log(pr)
            res.status(200).json(pr);
        } catch (e) {
            res.status(500).json(e)
        }
    },
    section: async (req, res) => {
        try {
            const sec = await SectionTab.findAll();
            console.log(sec)
            res.status(200).json(sec);
        } catch (e) {
            res.status(500).json(e)
        }
    },
    findById: async (req, res) => {
        try {
            const pr = await Pr_monitoring.findOne({
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

            const document = await Pr_monitoring.create({
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
            const document = await Pr_monitoring.findOne({
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

            const document = await Pr_monitoring.findOne({
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

            const updateDocument = await Pr_monitoring.update(
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