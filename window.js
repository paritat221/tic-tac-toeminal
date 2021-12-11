const fs = require('fs');
function window(x,y){
    console.clear();
    x++;
    y++;
    var mat = [];
    for(var b=0;b<x;b++){
        mat.push(newArray(y));
    }
    fs.writeFileSync("./window.io",JSON.stringify(mat));
}

function newArray(size){
    arr = [];
    for(var i=0;i<size;i++){
        arr.push(null);
    }
    return arr;
}
exports.window = window;