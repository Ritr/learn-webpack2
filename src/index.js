import Div from './div.js';
var div = Div();
document.body.appendChild(div);
div.innerHTML = '点击加载input.js';
div.onclick = getInput;

async function getInput(){
    const { default: Input } = await import(/* webpackChunkName:"input222" */'./input.js');
    document.body.appendChild(Input());
}

