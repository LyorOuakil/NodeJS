var fs = require('fs');
var number = (process.argv[2]);

// Check if directory exists
if (fs.stat('./garbage', function(err){
    if(!err){
        fs.readdir('./garbage', function(err, items){ //Read directory 
            for (i=1; i <= items.length; i++){
                if(items.length > 0){ // Check number of files in directory
                    fs.unlink("./garbage/"+i, function(err) { // Delete files in directory
                        if(!err){ // Create new files
                        }
                    });
                }
            }
            for (i=1; i <= number; i++){ // created files after they have been deleted
                console.log('Created file '+ i);
                fs.writeFile('./garbage/'+i, "", (err) =>{
                    if (err) throw err;
                });
            }
        })
    }else{ // create directory if does not exist
        fs.mkdir('garbage', (err) => {
            if (err) {
                console.log(err.message);
            }
                for (i=1; i <= number; i++){
                    console.log("Created file " + i );
                    fs.writeFile('./garbage/'+i, "", (err) =>{
                        if (err) throw err;
                    });
                }
        });
    }
    console.log("Done");
}));