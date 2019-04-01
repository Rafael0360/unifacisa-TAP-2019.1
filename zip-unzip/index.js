const fs = require('fs');
const archiver = require('archiver');
const extract = require('extract-zip');
//var type = process.argv[2];

var fileTarget = process.argv[2];
var type = process.argv[3]



//if(type == types.ZIP){
//    var zip = function() {
        
//    }
//}
if(type == "zip"){
	
    var output = fs.createWriteStream(__dirname + '/output.zip');

    var archive  = archiver('zip');

    output.on('close', function(){
        console.log('Zip finish');
    })

    archive.pipe(output);

    var file = __dirname + fileTarget;
    archive.append(fs.createReadStream(file), {name: fileTarget})

    archive.finalize();
}else if(type == "unzip"){


    extract(fileTarget, {dir: __dirname + '/test'}, function (err) {
        console.error(err);
    })

}




