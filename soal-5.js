//without sort

function sort(arr) {
    arr = arr.split("");
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr.join("");
}

let alpha = "qwertyuiopasdfghjklzxcvbnm"
console.log(sort(alpha));

// with sort

function sort(str){
    let value = str.split('')
    let sort = value.sort().join('')
    return sort    
}

let alphabet = "qwertyuiopasdfghjklzxcvbnm"
console.log(sort(alphabet));