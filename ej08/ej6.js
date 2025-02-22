let numbers = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100000));

function bubbleSort(arr) {
    console.time('Ordenación por burbuja');
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        len--; 
    } while (swapped);
    console.timeEnd('Ordenación por burbuja');
    return arr;
}

bubbleSort(numbers);

