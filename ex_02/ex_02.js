var number = (process.argv[2]);
// Check if argv is number and is equal to 2
if (isNaN(number) || process.argv.length > 3 || process.argv.length < 2) {
    console.log("Critical Error");
    console.log("Done");
    return false;
}
// Returns number of files in directory if exists
var fs = require('fs');
const dir = './garbage';
if (fs.existsSync('./garbage')) {
    var files = fs.readdirSync('./garbage');
}

// Check if directory exists and delete files in it if it does
if (fs.existsSync('./garbage')) {
    console.log('folder already exist');
    for (i = 1; i <= files.length; i++) {
        if (fs.existsSync('./garbage/' + i)) {
            fs.unlinkSync("./garbage/" + i);
        }
    }
    for (i = 1; i <= number; i++) {
        fs.writeFileSync('./garbage/' + i, "");
        console.log('Created file ' + i);
    }
    console.log('Done');
    return false;
}

// Create directory with files
fs.mkdirSync('garbage');
for (i = 1; i <= number; i++) {
    fs.writeFileSync('./garbage/' + i, "");
    console.log('Created file ' + i);
}
console.log('Done');

