const User = require('../../../models/user');

const getAllUsersDB = async () =>{
    try{
        const res = await User.find().populate('role', 'role').lean();
     
        return res;

    }catch(err){
        throw new Error(`Error al traer a los usuarios ${err}`);
    }
}

module.exports = getAllUsersDB;