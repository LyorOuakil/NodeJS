var fs = require('fs');
var arg1 = (process.argv[2]); // Take first argument, that would be the first file
var arg2 = process.argv[3]; // take second argument, that would be the second file

// Check if file exists : 
fs.stat('./'+arg1+'.txt', function(err){
    if(!err){
        console.log("file exists");
    }else{
        console.log("Error:_Critical_Failure");
        return false;
    }
});

// Read file 
fs.readFile( arg1+'.txt', 'utf8', function(err, data){
    if(!err)
    {
        // Write the data read in new file 
        fs.writeFile(arg2 +'.txt', data, (err) => {
            if(err) throw err;
        });
    }else{
        return false;
    }
})
