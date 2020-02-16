import _ from 'loadsh';
import './test-sass.scss';
function component() {
    var div = document.createElement('div');
    div.innerHTML = _.join(['你好','表弟']);
    div.classList.add('scss');
    return div;
}
function scssComponent(){
    var div = document.createElement('div');
    div.innerHTML = _.join(['你好', '表弟']);
    div.classList.add('text');
    return div;
}
var el = component();
var el2 = scssComponent();
el.appendChild(el2);
document.body.appendChild(el);