let numbers = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100000));

function quickSort (numbers) {


    if (numbers.length <= 1) {
        return numbers;
    }

    let pivot = numbers[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < pivot) {
            leftArr.push(numbers[i]);
        } else {
            rightArr.push(numbers[i]);
        }
    }
    
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
console.time('quicksort');
quickSort (numbers);
console.timeEnd('quicksort');