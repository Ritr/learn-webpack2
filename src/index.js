import _ from 'loadsh';
import './test-sass.scss';
import pic from './pic.jpg';
import wx from './wx.jpg';
function component() {
    var div = document.createElement('div');
    div.innerHTML = _.join(['你好','表弟']);
    div.classList.add('scss');
    return div;
}

function componentImg(src){
    var img = document.createElement('img');
    img.src = src;
    return img;
}
var el = component();
var picImg = componentImg(pic);
var wxImg = componentImg(wx);
el.appendChild(wxImg);
el.appendChild(picImg);
document.body.appendChild(el);