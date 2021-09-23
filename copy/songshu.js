var US = '';
var CA = '';
var DE = '';
var SG = '';
var KR = '';
var JP = '';
var TW = '';
var GB = '';
var NL = '';
var FR = '';
var peers = [];
peers = [...peers,...JSON.parse(US)]
peers = [...peers,...JSON.parse(CA)]
peers = [...peers,...JSON.parse(DE)]
peers = [...peers,...JSON.parse(SG)]
peers = [...peers,...JSON.parse(KR)]
peers = [...peers,...JSON.parse(JP)]
peers = [...peers,...JSON.parse(TW)]
peers = [...peers,...JSON.parse(GB)]
peers = [...peers,...JSON.parse(NL)]
peers = [...peers,...JSON.parse(FR)]

var utils = require('./utils');
// const app = require("app");
// const clipboard = require("clipboard");
var nodeIp = [];

function req(){
    var result = "";
    peers.forEach(server => {
        if (nodeIp.indexOf(server.ip) === -1) {
            var proxy_info = server.proxy_info;
            if (proxy_info) {
                var encryption = proxy_info.encryption;
                var obfs = '';
                var obfs_param = '';
                result += "ss://" + utils.stringToBase64(encryption + ":" + utils.base64ToString(proxy_info.stamp)) + "@" + server.ip + ":" + proxy_info.ps_port +
                    "?plugin=" + obfs + ";" + obfs_param + ";obfs-uri=/#" + proxy_info.country_name + "(" + proxy_info.country_code + ")" + "\n";
            }
            nodeIp.push(server.ip)
        }

    });
    console.log(result);
    // clipboard.setText(result);
    // app.openURL("shadowrocket://");
}
module.exports = {req}