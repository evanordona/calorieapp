let btnAdd = document.getElementById('Add');
let table = document.querySelector('table');

let nameInput = document.querySelector('#food');
let caloriesInput = document.querySelector('#calories');

let data = [];

let total = document.querySelector('#total');
console.log("the total is = " + total.textContent);


document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        btnAdd.click();
    }
}

)

btnAdd.addEventListener('click', ()=> {
    let name = nameInput.value;
    let calories = caloriesInput.value;



    
    let template = `
        <tr>
            <td>${name}</td>
            <td>${calories}</td>
        </tr>

    `;

    table.innerHTML += template;

    total.textContent = (parseInt(total.textContent) + parseInt(calories)).toString();

})