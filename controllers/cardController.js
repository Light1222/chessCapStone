// const {Chess} = require('../models')
// const pieces = ['King', 'Queen', 'Rook', 'Knight', 'Bishop', 'Pawn']
//
// module.exports.viewAll = async function(req, res, next){
//     let findPieces = ['All'];
//     for(let i = 0; i < pieces.length; i++) {
//         findPieces.push(pieces[i]);
//     }
//     let pokemons;
//     let findPieces = req.query.type || 'All';
//     let findRandom = req.query.random || false;
//     if (findPieces === 'All') {
//         pokemons = await Pokemon.findAll();
//     } else {
//         pokemons = await Pokemon.findAll({
//             where: {
//                 type: findPieces
//             }
//         });
//     }
//
//     res.render('index', {chess, types:findPieces, findpiece} )
// }

