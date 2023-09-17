import data from './test.json' assert { type: 'json' };
console.log(data);
console.log(data['0,0']);

const button = document.getElementById("butt");
button.addEventListener("click", run_algo);
console.log(button);

function update_table() {
    let index = "";
    
    for (let i = 0; i < 14; i++) {
        for (let j = 0; j < 5; j++) {
            index = i + "," + j;
            console.log(index);
            document.getElementById(index).innerHTML = data[index];
        }
    }
}

function run_algo() {
    console.log("ran");

    update_table();
}