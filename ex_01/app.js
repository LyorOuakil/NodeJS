var number = (process.argv.length);
for (i=2; i < number; i++){
    if(!isNaN(process.argv[i])){
        console.log(process.argv[i]);
    }
}
