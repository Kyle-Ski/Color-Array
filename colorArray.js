// Starting with an array of colors 
var arr = ['purple', 'blue', 'red', 'red', 'green','yellow', 'blue', 'red', 'purple', 'yellow']

// return an object with a tally of how many times each color occurs

// example: 
// getColorTally(arr)

// should return 
// {blue: 2, red: 3, green: 1, purple: 2}
function color(array){
    var obj = {}
    for (let index = 0; index < array.length; index++) {
        if(obj.hasOwnProperty(array[index])){
            obj[array[index]] += 1
        }else {
            obj[array[index]] = 1
        }
    }
    return obj
}
console.log(color(arr))