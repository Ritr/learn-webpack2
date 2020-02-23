import _ from 'loadsh';
import './style.css';
function component() {
    var div = document.createElement('div');
    div.innerHTML = _.join(['你好','表弟啊']);
    div.classList.add('test');
    return div;
}

var el = component();
document.body.appendChild(el);