// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0

// function incrementCount(){
//     count += 1
//     document.getElementById('count-el').innerText = count;
// }

const incrementCount = () => {
    count += 1
    document.getElementById('count-el').innerText = count;

}

// const decrementCount = () => {
//     if (count >= 0) {
//         count -= 1
//         document.getElementById('count-el').innerText = count;
//     }
// }

const countZero = () => {
    count = 0;
    document.getElementById('count-el').innerText = count;
}

const saveCount = () => {
    let display = count+" - "
    document.getElementById('save-el').textContent += display;
    console.log(count);
    countZero()
}