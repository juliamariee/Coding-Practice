function dirReduc(dir) {
    reducarr = dir
    for (let i = 0; i < 10; i++) {
        reducarr = reduceArr(dir)
        dir = reducarr
    }

    return reducarr
}

function reduceArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'NORTH' && arr[i + 1] == 'SOUTH') {
            arr.splice(i, 2);
        } else if (arr[i] == 'SOUTH' && arr[i + 1] == 'NORTH') {
            arr.splice(i, 2);
        } else if (arr[i] == 'EAST' && arr[i + 1] == 'WEST') {
            arr.splice(i, 2);
        } else if (arr[i] == 'WEST' && arr[i + 1] == 'EAST') {
            arr.splice(i, 2);
        }
    }

    return arr
}