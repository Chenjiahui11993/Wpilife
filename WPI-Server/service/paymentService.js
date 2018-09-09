var crypto = require('crypto');
var request = require('request');
//您自己的api_user与api_key
var API_USER = '5692428a';
var API_KEY = '8871b437-3547-45e5-a181-7e5233d17f1e';
const paymentModel = require('../modules/payInfoModels');
function gen_md5(param_str) {
    var md5 = crypto.createHash('md5');
    var res = md5.update(param_str, 'utf8').digest('hex');
    return res;
}

function gen_signature(api_user, price, type, redirect, order_id, order_info) {
    var param = {
        'api_user': api_user,
        'price': price,
        'type': type,
        'redirect': redirect,
        'order_id': order_id,
        'order_info': order_info,
    }
    var param_str = API_KEY;
    var sorted_keys = Object.keys(param).sort();
    for (var index in sorted_keys) {
        var key = sorted_keys[index];
        param_str = param_str + param[key];
    }

    sign = gen_md5(param_str);
    return sign;
}
const getPayInfo = (price, type) => {
    var api_user = API_USER;

    //用户支付成功之后, 跳转到的页面 
    var redirect = 'http://www.baidu.com';

    //您系统内部生成的订单号, 唯一标识一个订单   
    var order_id = '123456777';

    //您自定义的用户信息, 方便在后台对账, 排查订单是由哪个用户发起的, 强烈建议加上
    var order_info = new Buffer('测试订单', 'utf8').toString();

    var signature = gen_signature(api_user, price, type, redirect, order_id, order_info)

    var p = {
        'api_user': api_user,
        'price': price,
        'type': type,
        'redirect': redirect,
        'order_id': order_id,
        'order_info': order_info,
        'signature': signature,
    }

    var data = {
        'msg': 'OK',
        'data': p,
        'code': 1
    }
    console.log(data);
     return JSON.stringify(p);
}
 const saveConfirmData = (payInfo) => {
     console.log(payInfo);
     var mongoosePayInfo = new paymentModel(payInfo);
         mongoosePayInfo.save(payInfo);

 }
module.exports = {
    getPayInfo,
    saveConfirmData
}