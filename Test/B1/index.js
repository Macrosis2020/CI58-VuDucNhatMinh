checkString = () => {
    let input = document.getElementById('input-field').value;
    const arr = input.split('');
    const arr2 = [];

    for (i=0; i<arr.length; i++) {
        arr2.push(arr[arr.length-i-1]);
    }

    input = arr.toString();
    input2 = arr2.toString();

    if (input === input2) {
        console.log('TRUE');
    } else {
        console.log('FALSE');
    }
}
document.getElementById('btn').addEventListener('click', checkString);