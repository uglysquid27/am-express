// const { Tes } = require('../models')

// module.exports = {
//     index: async (req, res) => {
//         try {
//             const test = await Tes.findAll();
//             res.status(200).json(test);
//         }catch(e){
//             res.status(500).json(e)
//         }
//     },
//     store: async (req, res) => {
//         try {
//           const document = await Tes.create({
//             name: `/images/${req.file.filename}`,
//           });
//           res.status(200).json(document);
//         } catch (error) {
//             console.log(error)
//           res.status(500).json(error);
//         }
//       },
// }