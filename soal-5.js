//without sort

function sort(arr) {
    arr = arr.split("");
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length -1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr.join("");
}


// with sort

function sorted(str){
    let value = str.split('')
    let sort = value.sort().join('')
    return sort    
}

module.exports = {sort, sorted}