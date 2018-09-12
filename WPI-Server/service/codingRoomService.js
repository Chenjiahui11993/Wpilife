const codingModels = require('../modules/codingModels');
const errorHandler = require('./errorHandleService');
const addCodingRoom = (newCodingRoom) => {
    return new Promise((resolve, reject) => {
        codingModels.count({}, (err, number) => {
            if (err) {
                errorHandler.saveError(err);
                reject(err);
            } else {
                var id = number + 1;
                newCodingRoom.id = id;
                const mongoCodingRoom = new codingModels(newCodingRoom);
                mongoCodingRoom.save(newCodingRoom);
                resolve(newCodingRoom);
            }
        });
    });
}
const getCodingRoom = (roomNumber) => {
    return new Promise((resolve, reject) => {
        codingModels.findOne({ roomNumber: roomNumber }, (err, codingRoom) => {
            if (err) {
                errorHandler.saveError(err);
                reject(err);
            } else {
                resolve(codingRoom);
            }
        });
    });
}
module.exports = {
    addCodingRoom,
    getCodingRoom
}

