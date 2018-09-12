const demandModel = require('../modules/demandModel');
const errorHandler = require('./errorHandleService');
const getAllDemands = () => {
    return new Promise((resolve, reject) => {
        demandModel.find({}, (err, demands) => {
            if (err) {
                errorHandler.saveError(err);
                reject(err);
            } else {
                resolve(demands);
            }
        });
    });
}
const addDemands = (newDemand) => {
    return new Promise((resolve, reject) => {
        demandModel.count({}, (err, number) => {
            if (err) {
                errorHandler.saveError(err);
                reject(err);
            } else {
                var id = number + 1;
                newDemand.id = id;
                const mongoDemand = new demandModel(newDemand);
                mongoDemand.save(newDemand); 
                resolve(newDemand);
            }
        });
    });
}
module.exports = {
    getAllDemands,
    addDemands
}