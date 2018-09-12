const codingModels = require('../modules/codingModels');
<<<<<<< HEAD
=======
const errorHandler = require('./errorHandleService');
>>>>>>> 21aae07e8f3da4303ccfb012b97e24b8c414cf33
const addCodingRoom = (newCodingRoom) => {
    return new Promise((resolve, reject) => {
        codingModels.count({}, (err, number) => {
            if (err) {
<<<<<<< HEAD
=======
                errorHandler.saveError(err);
>>>>>>> 21aae07e8f3da4303ccfb012b97e24b8c414cf33
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
<<<<<<< HEAD
=======
                errorHandler.saveError(err);
>>>>>>> 21aae07e8f3da4303ccfb012b97e24b8c414cf33
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

