const { log } = require('console');
const { temuanD } = require('../models/sms/tr_temuan_d')
const fs = require('fs')

module.exports = {
    index: async (req, res) => {
        try {
            const pr = await temuanD.findAll();
            console.log(pr)
            res.status(200).json(pr);
        } catch (e) {
            res.status(500).json(e)
        }
    },

    findById: async (req, res) => {
        try {
            const pr = await temuanD.findOne({
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