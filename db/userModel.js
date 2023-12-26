const mongoose = require('mongoose');



// var userSchema = mongoose.Schema({
//     email : {
//         type : String,
//         required : true
//     },
//     password : {
//         type : String,
//         required : true
//     },
//     role : {
//         type : String,
//         required : true
//     }
// })

// const User = mongoose.model('userData', userSchema);


var userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true
    }
})

const User = mongoose.model('reactDet', userSchema);
module.exports = User;