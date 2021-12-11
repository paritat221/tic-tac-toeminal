const fs = require('fs');
function wind(){
    win=JSON.parse(fs.readFileSync("./window.io"))
    console.clear();
    var mat = [];
    for(var b=0;b<win[0].length;b++){
        mat.push(newArray(win.length));
    }
    fs.writeFileSync("./window.io",JSON.stringify(mat));
}

exports.clr_text = wind;

function newArray(size){
    arr = [];
    for(var i=0;i<size;i++){
        arr.push(null);
    }
    return arr;
}