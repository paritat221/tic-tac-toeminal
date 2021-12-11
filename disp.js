var fs = require('fs');

function disp(mat=JSON.parse(fs.readFileSync("./window.io"))){
    dispStr = "";
    for(var i=0; i<mat.length; i++){
        for(var j=0; j<mat[i].length; j++){
            if(mat[i][j]!=null){
                dispStr += mat[i][j];
            }else{
                if(mat[i][j]==null)dispStr += " ";  
            }          
        }
        dispStr += "\n";
    }
    console.clear();
    console.log(dispStr);
}
exports.disp = disp;