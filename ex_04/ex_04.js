var fs = require('fs');
var path = process.argv[2]; // First argument would be the path to the folder
var extension = '.' + process.argv[3]; // Second argument would be the file extension
var dirPath = require('path');

fs.readdir(path, function(err, items) {
    for (var i=0; i < items.length; i++){ 
        if(dirPath.extname(path + "/"+ items[i]) === extension){
            console.log(items[i]); // Print only files with given extension 
        }
    }
});