var Type = require('type-of-is');

var check = function(arr){
    tab = [];
    for (i=0; i < arr.length; i++){
        tab.push(Type.of(arr[i]));
    }
    return tab;
}

module.exports.check = check;