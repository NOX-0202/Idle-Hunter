const mongoose = require('mongoose')
const Key = mongoose.model('ApiKeys')
const crypto = require('crypto');

module.exports = {   

    async StoreKey (req, res) {

        let current_date = (new Date()).valueOf().toString();
        let random = Math.random().toString();

        const id = crypto.createHash('sha1').update(current_date + random).digest('hex');
        const hash = await Key.create({ KEY: `idle+${id}` })
        return res.json({ API_KEY: hash.KEY })
    },

    async checkKey(req,res){
        const key = await Key.findOne({ "KEY" : req.params.key }) ? true : false 
        return res.json({ok: key})
    },

    async deleteKey(req,res){
        const resp = await User.findByIdAndRemove(req.body) ? true : false 
        return res.json({ok: resp})
    }
}