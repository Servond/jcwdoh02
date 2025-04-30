function secondSmallest(arr) {
    let first = Number.MAX_VALUE;
    let second = Number.MAX_VALUE;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < first) {
            second = first;
            first = arr[i];
        }
        
        if (arr[i] < second) second = arr[i];
    }

    return second;
}

console.log(secondSmallest([5, 3, 6, 2, 1, 1]))