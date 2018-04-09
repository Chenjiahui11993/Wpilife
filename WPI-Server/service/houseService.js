const houseModel = require('../modules/houseModels');
const getAllHouse = () => {
    return new Promise((resolve, reject) => {
        houseModel.find({type: true}, (err, house) => {
            if (err) {
                reject(err);
            } else {
                resolve(house);
            }
        });
    });
}
const getOneHouse = (id) => {
    return new Promise((resolve, reject) => {
        houseModel.findOne({ id: id }, (err, house) => {
            if (err) {
                reject(err);
            } else {
                resolve(house);
            }
        });
    });
}
const getUserHouse = (id) => {
    return new Promise((resolve, reject) => {
        houseModel.find({ ownerID: id, type: true }, (err, house) => {
            if (err) {
                reject(err);
            } else {
                resolve(house);
            }
        });
    });
}
const deleteUserHouse = (id) => {
    return new Promise((resolve, reject) => {
        var update = { type: false }
        houseModel.update({ id: id }, update, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}
const addHouse = (newHouse) => {
    return new Promise((resolve, reject) => {
        houseModel.count({}, (err, number) => {
            if (err) {
                reject(err);
            } else {
                var id = number + 1;
                newHouse.id = id;
                const mongoHouse = new houseModel(newHouse);
                mongoHouse.save(newHouse); 
                resolve(mongoHouse);
            }
        });
    });
}
module.exports = {
    addHouse,
    getAllHouse,
    getOneHouse,
    getUserHouse,
    deleteUserHouse
}