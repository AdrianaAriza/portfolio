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
