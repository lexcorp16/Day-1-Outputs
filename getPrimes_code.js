function getPrimes(num) {
    if (typeof(num) != 'number' || num <= 0){
        return "Invalid Input";
    }
    var outputArray = [];
    for (var i = 2; i < num; i++) {
        var divisorFound = false;
        for (var count = 2; count < i; count++) {
            
            if (i % count === 0) {
                divisorFound = true;
                break;
            }
        }
        if (divisorFound == false) {
            outputArray.push(i);
        }
    }
    return outputArray;
}