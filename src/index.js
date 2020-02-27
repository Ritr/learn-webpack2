
var button = document.createElement('button');
button.innerText = '加载DIV模块'
button.onclick = getDiv;
document.body.appendChild(button);
async function getDiv() {
    const { default: Div } = await import(/* webpackChunkName:"div",webpackPrefetch:true */'./div.js');
    console.log('prefetch');
}


async function getInput() {
    const { default: Input } = await import(/* webpackChunkName:"input",webpackPreload:true */'./input.js');
    Input();
    console.log('preload');
}

getInput();

