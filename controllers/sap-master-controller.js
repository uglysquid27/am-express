const { log } = require('console');
const { iflotx } = require('../models/sap_master/ifloxt')
const { qpgt } = require('../models/sap_master/qpgt')
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
    qpgtIndex: async (req, res) => {
        try {
            const pr = await qpgt.findAll({attributes: ['KATALOGART', 'CODEGRUPPE', 'KURZTEXT']});
            console.log(pr)
            res.status(200).json(pr);
        } catch (e) {
            res.status(500).json(e)
        }
    },
    qpctIndex: async (req, res) => {
        try {
            const pr = await qpgt.findAll({attributes: ['CODE', 'CODEGRUPPE', 'KURZTEXT']});
            console.log(pr)
            res.status(200).json(pr);
        } catch (e) {
            res.status(500).json(e)
        }
    },
}