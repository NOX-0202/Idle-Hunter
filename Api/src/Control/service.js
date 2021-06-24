const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = {   
     
    async storeUser (req, res) {
        console.log(req.body)
        const user = await User.create(req.body)
        return res.json({
            id:user._id
        })
    },

    async showUser(req, res) {
        const user = await User.findById(req.params.id);
        return res.json(user);
    },

    async deleteUser(req,res){
        const user = await User.findByIdAndRemove(req.params.id)
        return res.send(user)
    },

    async updateUser(req,res){
        const user = await User.findOneAndUpdate(req.params.id, req.body, {new:true})
        return res.send(user)
    }
}