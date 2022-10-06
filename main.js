var number=function(array){

    const result = [];

    for (let i = 0, j = 1; i < array.length; i += 1) {
        if (array.length === 0) {
            return `Empty array should return empty array`;
        } else {
            result.push(`${j}: ${array[i]}`);
            j += 1;
        }
    }

    return result;
}

var number = function(array) {
    return array.map(function (line, index) {
        return (index + 1) + ": " + line;
    });
}