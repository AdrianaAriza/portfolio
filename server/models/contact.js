/* 
    contact.js 
    Luz Adriana Ariza Bustos: 301161864
    23-10-2021
*/

let mongoose =  require('mongoose')

//create business contact model
let contactModel = mongoose.Schema({
    name: String,
    phoneNumber: String,
    emailAddress: String
}, {
    collection: "contacts"
})

module.exports = mongoose.model('contact', contactModel)
