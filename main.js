let title_field = document.querySelector("#title_field");
let date_field = document.querySelector("#date_field");
let note_field = document.querySelector("#note_field");
let submit_btn = document.querySelector("#submit_btn");

//let table_body = document.querySelector("#table_body");
//let carne_regex = new RegExp('[0-9]{8}'); //Expresion regular (solo puede del 0-9 y 8 digitos nada mas)

let  addNote = (title, date, note) => {
    let new_row = document.createElement('tr');
    let new_row_02 = document.createElement('tr');

    new_row.className = 'table-active';
    new_row.innerHTML =
    `<th scope= 'row'>${title}</th>
    <td>${date}</td>`;
    table_head.appendChild(new_row);

    new_row_02.className = 'table-active';
    new_row_02.innerHTML =
    `<td colspan="2">${note}</td>`;
    table_head.appendChild(new_row_02);


    /*let new_row = document.createElement('tr');
    let date = new Date();


    new_row.className = 'table-active'; //agregamos una clase al tag tr
    new_row.innerHTML = 
    `<th scope = 'row'>${carne}</th>
    <td>${shcedule}</td>
    <td>${date.toLocaleString()}</td>
    <td>${late}</td>`;
    table_body.appendChild(new_row); //lo coloca de ultimo*/
}

/*let parseLateSwitch = (value) => {
    if(value) {
        return 'Tarde >:v pero wapo ;v';
    }
    return 'Justo a tiempo wapeton ;v';
}*/

submit_btn.addEventListener("click",()=>{
    let title = title_field.value;
    let date = date_field.value;
    let note = note_field.value;
    
    addNote(title,date,note);
});

/*carne_campo.addEventListener("keyup", (event) => {
    let keyCode = event.keyCode;
    let carne = carne_campo.value;

    if(keyCode == 13) {
        submit_btn.click();
    }

    if(carne_regex.test(carne)) {
        submit_btn.disabled = false;
    }
    else {
        submit_btn.disabled = true;
    }
});*/


