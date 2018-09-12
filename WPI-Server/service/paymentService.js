var crypto = require('crypto');
var request = require('request');
var nodemailer = require('nodemailer');
const errorHandler = require('./errorHandleService');
// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    "host": "smtpdm.aliyun.com",
    "port": 25,
    "secureConnection": true, // use SSL
    "auth": {
        "user": '', // user name
        "pass": ''         // password
    }
});
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
const getPayInfo = (req) => {
    //console.log(req.PayMethod);
    var api_user = API_USER;

    //用户支付成功之后, 跳转到的页面 
    var redirect = 'http://www.baidu.com';

    //您系统内部生成的订单号, 唯一标识一个订单 
    var orderID = Math.floor(Math.random() * 1000000);
    var order_id = orderID.toString();

    //您自定义的用户信息, 方便在后台对账, 排查订单是由哪个用户发起的, 强烈建议加上
    var userInfo = `${req.school}/${req.name}/${req.email}/${req.userPhone}`
    var order_info = new Buffer(userInfo, 'utf8').toString();

    var signature = gen_signature(api_user, req.price, req.PayMethod, redirect, order_id, order_info)

    var p = {
        'api_user': api_user,
        'price': req.price,
        'type': req.PayMethod,
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
   // console.log(data);
    return JSON.stringify(p);
}
const saveConfirmData = (payInfo) => {

    var orderInfo = payInfo.order_info.toString().split('/');
    var email = orderInfo[2];
    var name = orderInfo[0];
    var orderID = payInfo.order_id;
    var info = {
        'ppz_order_id': payInfo.ppz_order_id,
        'order_id': payInfo.order_id,
        'price': payInfo.price,
        'real_price': payInfo.real_price,
        'order_info': payInfo.order_info,
        'signature': payInfo.signature,
        'email': email
    }
    var mailOptions = {
        from: 'WPICSSA<admin@wpilife.org>', // sender address mailfrom must be same with the user
        to: email, // list of receivers
        // cc:'haha<xxx@xxx.com>', // copy for receivers
        // bcc:'haha<xxxx@xxxx.com>', // secret copy for receivers
        subject: '感谢您参加WPI&Clark中秋晚会', // Subject line
       // text: 'Hello world', // plaintext body
        html: ` <p>亲爱的：${name} 同学</p>
        <br>
        <p style="text-indent:2em;">您好， 首先非常感谢您参加我们的中秋晚会，您的订单号是：<b style="font-size: 40px">${orderID}</b>, 订单号是您当天入场的唯一凭证，请妥善保存。 我们的晚会将会于2018年9月30号晚上6点在WPI学校的<b style="font-size: 20px">Alden-memorial</b>准时开始，非常期待您的光临。
            如您当天有事情不能到来，请最晚于2018/10/1日之前内添加微信：chenjiahui11993，我们会尽快帮您办理退款。</p>
            <p>任何有关WPILIFE网站或者CSSA的建议，请您发送到：hbchenjh@gmail.com，为您提供便利与服务是我们WPICSSA的荣幸。</p>
            <br>
            <p style="text-indent:2em;">WPICSSA祝您学习进步，生活愉快！</p>
            <br>
            <p style="text-indent:2em;">WPICSSA全体成员敬上</p>`, // html body
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            errorHandler.saveError(error);
        }
        console.log('Message sent: ' + info);
        errorHandler.saveData(info.response);
    });
    var mongoosePayInfo = new paymentModel(info);
    mongoosePayInfo.save();

}
const queryData = (userEmail) => {
    return new Promise((resolve, reject) => {
        paymentModel.find({ email: userEmail }, (err, payInfo) => {
            if (err) {
                
                reject(err);
            } else {
                resolve(payInfo);
            }
        });
    });
}
module.exports = {
    getPayInfo,
    saveConfirmData,
    queryData
}