var fs = require('fs');

async function getkey(k, callback)
{
  var stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding('utf8');
  var ky = 0;
  stdin.on('data', function(key){
      if (k == 'up') {
          k='\u001B\u005B\u0041'; 
      }
      if (k == 'right') {
          k='\u001B\u005B\u0043'; 
      }
      if (k == 'down') {
          k='\u001B\u005B\u0042'; 
      }
      if (k == 'left') {
          k='\u001B\u005B\u0044'; 
      }
      
      if(k==key){
        callback();
      }
      if (key == '\u0003') { process.exit(); }    // ctrl-c
  });
};


  
exports.getkey = getkey;

