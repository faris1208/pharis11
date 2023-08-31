const save = document.getElementById('save');
const output1 = document.getElementById('output1');
const out1 = document.getElementById('mySerach');


function saveInput() {
let inputValue = out1.value
output1.innerHTML = inputValue
    // input.value = ("red");
}

save.addEventListener('click',saveInput);

    