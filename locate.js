var fs = require('fs');
var {disp} = require('./disp');
function locate(x,y,i){
    win = JSON.parse(fs.readFileSync("./window.io"));
    if(win[0].length<i.length+x)throw `Dimension error at locate(${y},${x},"${i}")`;
    for(var v = 0; v < i.length; v++){
        win[y][x+v] = i[v];
    }
    fs.writeFileSync("./window.io",JSON.stringify(win));
    disp(JSON.parse(fs.readFileSync("./window.io")))
}

exports.locate = locate;