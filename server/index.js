const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const fplayer = 1;
const splayer = 2;
const template = [[0,0,0],[0,0,0],[0,0,0]];
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');

app.use(cors());

function sdb(obj){
    fs.writeFileSync("./db.txt",JSON.stringify(obj));
}
function rdb(){
    return JSON.parse(fs.readFileSync("./db.txt",{encoding:'utf8', flag:'r'}));
}

app.get('/getstate', function(req, res){
    res.send(rdb());
});

app.get('/play', function(req, res){
    let rawUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    let parsedUrl = url.parse(rawUrl);
    let parsedQs = querystring.parse(parsedUrl.query);
    db = rdb();
    db[parsedQs.code][parsedQs.x][parsedQs.y] = parseInt(parsedQs.p);
    sdb(db);
    res.send("");
});

app.get('/makes', function(req, res){
    var db = rdb();
    let rawUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    let parsedUrl = url.parse(rawUrl);
    let parsedQs = querystring.parse(parsedUrl.query);
    var session = parsedQs.code;
    db[session] = template;
    sdb(db);
    res.send("");
})

app.listen(3000);