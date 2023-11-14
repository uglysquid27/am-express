const { Pr_monitoring } = require('../models')

module.exports = {
    index: async (req, res) => {
        try {
            const pr = await Pr_monitoring.findAll();
            res.status(200).json(pr);
        }catch(e){
            res.status(500).json(e)
        }
    },
    store: async (req, res) => {
        try {
            let itemDescImgPath = ''; // Initialize with an empty string
    
            // Check if an image file was uploaded
            if (req.file) {
                itemDescImgPath = `/images/${req.file.filename}`;
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
    
}