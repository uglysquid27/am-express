const { log } = require('console');
const { Pr_monitoring } = require('../models/sms/pr')
const { SectionTab } = require('../models/sms/mst_section')
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
            let itemDescImgPath = '';
            let attachmentPath = '';
            let attachment2Path = '';

            if (req.files['item_desc_img'] && req.files['item_desc_img'][0]) {
                itemDescImgPath = `/uploads/${req.files['item_desc_img'][0].filename}`;
            }

            if (req.files['attachment'] && req.files['attachment'][0]) {
                attachmentPath = `/uploads/${req.files['attachment'][0].filename}`;
            }
            if (req.files['attachment2'] && req.files['attachment'][0]) {
                attachment2Path = `/uploads/${req.files['attachment2'][0].filename}`;
            }

            // Create a new document in the database
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
                attachment: attachmentPath,
                attachment2: attachment2Path,
                v_inputDate: req.body.v_inputDate,
                v2_inputDate: req.body.v2_inputDate,
            });

            // Respond with the created document
            res.status(200).json(document);
        } catch (error) {
            console.error(error);
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
            const checkAt = fs.existsSync(`public/${document.attachment}`);
            const checkAt2 = fs.existsSync(`public/${document.attachment2}`);

            if (check) {
                if (document.item_desc_img != "") {
                    fs.unlinkSync(`public/${document.item_desc_img}`);
                }
            }
            if (checkAt) {
                if (document.attachment != "") {
                    fs.unlinkSync(`public/${document.attachment}`);
                }
            }
            if (checkAt2) {
                if (document.attachment2 != "") {
                    fs.unlinkSync(`public/${document.attachment2}`);
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
            const document = await Pr_monitoring.findOne({
                where: {
                    id: req.params.id,
                },
            });

            let itemDescImgPath = '';

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

            let attachmentPath = '';

            let attachment = document.attachment;
            if (req.file) {
                attachment = `/pdf/${req.file.filename}`;
                const check = fs.existsSync(`public${document.attachment}`);
                if (check) {
                    if (document.attachment != "") {
                        fs.unlinkSync(`public/${document.attachment}`);
                    }
                }
            }

            let attachment2Path = '';

            let attachment2 = document.attachment2;
            if (req.file) {
                attachment2 = `/pdf/${req.file.filename}`;
                const check = fs.existsSync(`public${document.attachment2}`);
                if (check) {
                    if (document.attachment2 != "") {
                        fs.unlinkSync(`public/${document.attachment2}`);
                    }
                }
            }

            if (req.files['item_desc_img'] && req.files['item_desc_img'][0]) {
                itemDescImgPath = `/uploads/${req.files['item_desc_img'][0].filename}`;
            }
            if (req.files['attachment'] && req.files['attachment'][0]) {
                attachmentPath = `/pdf/${req.files['attachment'][0].filename}`;
            }
            if (req.files['attachment2'] && req.files['attachment2'][0]) {
                attachment2Path = `/pdf/${req.files['attachment2'][0].filename}`;
            }

            const updateDocument = await Pr_monitoring.update(
                {
                    req_date: req.body.req_date,
                    item_desc_img: itemDescImgPath == '' ? document.item_desc_img : itemDescImgPath,
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
                    attachment: attachmentPath == '' ? document.attachment : attachmentPath,
                    attachment2: attachment2Path == '' ? document.attachment2 : attachment2Path,
                    v_inputDate: req.body.v_inputDate,
                    v2_inputDate: req.body.v2_inputDate,
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