var fs = require('fs');
var arg1 = (process.argv[2]); // Take first argument
var arg2 = process.argv[3]; // take second argument

//Check if file exists : 
     // Do code here

// Read file 
fs.readFile( arg1+'.txt', 'utf8', function(err, data){
    if(!err)
    {
        // Write the data read in new file 
        fs.writeFile(arg2 +'.txt', data, (err) => {
            if(err) throw err;
        });
    }else{
        throw err;
    }
})
