import Input from './input.js';
import Div from './div.js';
var input = Input();
var div = Div();
document.body.appendChild(input);
document.body.appendChild(div);

console.log(module.hot);
if (module.hot) {
    module.hot.accept('./div.js', function () {
        console.log('div模块热更新');
        document.body.removeChild(div);
        document.body.appendChild(Div());
    });
}