import Input from './input.js';
import Div from './div.js';
import './style.css';
var input = Input();
var div = Div();
document.body.appendChild(input);
document.body.appendChild(div);

//错误代码
var id = document.getElementById('id');
console.log(id.innerHTML);

console.log(module.hot);
if (module.hot) {
    module.hot.accept('./div.js', function () {
        console.log('div模块热更新');
        document.body.removeChild(div);
        document.body.appendChild(Div());
    });
}