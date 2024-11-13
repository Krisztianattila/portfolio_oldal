const csapatok = ['Real Madrid', 'Barcelona', 'Chelsea', 'Manchester United']
function init() {
    document.getElementById('body').innerHTML = csapatok.map( v => `<div onclick="f('${ v }')">${ v }</div>`).join("");
}

const f = console.log