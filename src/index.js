import './style.css';
import './style.scss';
function createDiv(){
    var div = document.createElement('div');
    div.innerHTML = 'test';
    div.classList.add('sass');
    return div;
}
var ele = createDiv();
document.body.appendChild(ele);