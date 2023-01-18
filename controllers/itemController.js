const Sequelize = require("sequelize");
const {items} = require('../dbModels/dbModels')

class ItemController{
    async getItems(req,res){
        try{
            const findAll = await items.findAll()
            res.json(findAll)
        }catch(e){
            console.log(e);
        }
    }
}

module.exports = new ItemController()