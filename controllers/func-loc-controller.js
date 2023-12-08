const { log } = require('console');
const { iflotx } = require('../models/sap_master/ifloxt')
const fs = require('fs')

module.exports = {
    index: async (req, res) => {
        try {
            const pr = await iflotx.findAll({attributes: ['TPLNR', 'PLTXT', 'PLTXU']});
            console.log(pr)
            res.status(200).json(pr);
        } catch (e) {
            res.status(500).json(e)
        }
    },
    findById: async (req, res) => {
        try {
            const pr = await iflotx.findOne({
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
}