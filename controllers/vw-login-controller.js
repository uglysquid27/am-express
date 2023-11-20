const { log } = require('console');
const { Login } = require('../models');
const { vw_login } = require('../models');

module.exports = {
    index: async (req, res) => {
        try {
            const vwLoginData = await vw_login.findAll();
            const loginData = await Login.findAll();
            const updatedLoginData = [];

            for (const loginItem of loginData) {
                const matchingVwLogin = vwLoginData.find(vwLoginItem => vwLoginItem.lg_nik === loginItem.lg_nik);
                
                if (matchingVwLogin) {
                    // Update the Login model with lg_name from vw_login
                    loginItem.lg_name = matchingVwLogin.lg_name;
                    updatedLoginData.push(loginItem);
                }
            }

            const response = updatedLoginData.map(item => ({
                id: item.id,
                lg_nik: item.lg_nik,
                lg_name: item.lg_name,
                user_level: item.user_level,
            }));

            res.status(200).json(response);
        } catch (e) {
            console.error(e);
            res.status(500).json(e);
        }
    },
};