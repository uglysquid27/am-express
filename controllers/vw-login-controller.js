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
            console.log(response)
            res.status(200).json(response);
        } catch (e) {
            console.error(e);
            res.status(500).json(e);
        }
    },
    indexById: async (req, res) => {
        try {
            // Fetch data from Login model based on id
            const loginData = await Login.findOne({
                where: {
                    id: req.params.id,
                },
            });
    
            // If no data found for the given id, handle it accordingly (send an error response or something)
            if (!loginData) {
                return res.status(404).json({ error: 'Login data not found for the given id' });
            }
    
            // Fetch all data from vw_login
            const vwLoginData = await vw_login.findAll();
    
            // Find the corresponding vw_login data based on lg_nik
            const matchingVwLogin = vwLoginData.find(item => item.lg_nik === loginData.lg_nik);
    
            // Merge the data from vw_login into the loginData object
            if (matchingVwLogin) {
                loginData.lg_name = matchingVwLogin.lg_name;
            }
    
            // Respond with the modified loginData
            res.status(200).json({
                id: loginData.id,
                lg_nik: loginData.lg_nik,
                user_level: loginData.user_level,
                lg_name: loginData.lg_name // Added lg_name to the response
            });
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    update: async (req, res) => {
        try {

            const document = await Login.findOne({
                where: {
                    id: req.params.id,
                },
            });

            const updateDocument = await Login.update(
                {
                    user_level: req.body.user_level,
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
};