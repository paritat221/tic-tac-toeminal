const term = require('term-2d');
const locate = term.locate;
const fetch = require('node-fetch');
const session = {code:"0x1",player:1};

async function makesession(code=session.code){
    await fetch(`http://localhost:3000/makes?code=${code}`);
}
async function play(x,y,p=session.player){
    await fetch(`http://localhost:3000/play?x=${x}&y=${y}&p=${p}&code=${session.code}`);
}
makesession(session.code);
term.window(4,4);


function dboard(){
    locate(1,0,"|");
    locate(3,0,"|");
    locate(1,1,"|");
    locate(3,1,"|");
    locate(1,2,"|");
    locate(3,2,"|");
    locate(1,3,"|");
    locate(3,3,"|");
    locate(1,4,"|");
    locate(3,4,"|");
    locate(2,1,"―");
    locate(0,1,"―");
    locate(4,1,"―");
    locate(2,3,"―");
    locate(0,3,"―");
    locate(4,3,"―");
}

dboard();

async function dbstate(){
    const brd = {
        0:0, 1:2, 2:4
    }
    var db = await fetch(`http://localhost:3000/getstate`);
    var db = await db.text();
    var db = JSON.parse(db);
    for (var v = 0; v < 3; v++) {
        for(var i=0;i<3;i++){
            if(db[session.code][v][i]==1)locate(brd[v],brd[i],"x");
            if(db[session.code][v][i]==2)locate(brd[v],brd[i],"o");
            if(db[session.code][v][i]==0)locate(brd[v],brd[i]," ");
        }
    }
}
var x = 0, y = 0;
async function draw(){
    term.locate(x,y,"*");
    term.getkey('up',async ()=>{
        b=y;
        if(y>0){
            y-=2;
            await dbstate().then(()=>term.locate(x,y,"*"));
        };
    });
    term.getkey('down',async ()=>{ 
        b=y;
        if(y<4){
            y+=2;
            await dbstate().then(()=>term.locate(x,y,"*"));
        }
    });
    term.getkey('left',async ()=>{ 
        a=x;
        if(x>0){
            x-=2;
            await dbstate().then(()=>term.locate(x,y,"*"));
        };
    });
    term.getkey('right',async ()=>{ 
        a=x;
        if(x<4){
            x+=2;
            await dbstate().then(()=>term.locate(x,y,"*"));

        }
    });
    term.getkey('l',()=>{
        const brd = {
            0:0, 2:1, 4:2
        }
        play(brd[x],brd[y]);
    });
    
}
draw();
