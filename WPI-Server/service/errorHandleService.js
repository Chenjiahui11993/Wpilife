var fs = require('fs');
var sd = require('silly-datetime');
const saveError = (error) => {
    var time=sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    var error = {
        'time': time,
        'error': error
    }
   try {    
        fs.appendFile('../error.json', JSON.stringify(error), function(err){
            if(err) {
                console.log('error happen')
            } else {
               // console.log('log finish')
            }

        });
    } catch(e) {
        console.log('error');
    }
}
const saveData =(data) => {
    var time=sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    var error = {
        'time': time,
        'data': data
    }
    try {    
        fs.appendFile('../emaildata.json', JSON.stringify(error), function(err){
            if(err) {
                console.log('error happen')
            } else {
               // console.log('log finish')
            }

        });
    } catch(e) {
        console.log('error');
    }
}
module.exports = {
    saveError,
    saveData
}