import _ from 'loadsh';
function component() {
    var div = document.createElement('div');
    div.innerHTML = _.join(['你好','表弟']);
    return div;
}
var el = component();
document.body.appendChild(el);