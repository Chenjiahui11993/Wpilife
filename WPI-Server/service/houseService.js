const houseModel = require('../modules/houseModels');
const getAllHouse = () => {
    return new Promise((resolve, reject) => {
        houseModel.find({}, (err, house) => {
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
    getOneHouse
}