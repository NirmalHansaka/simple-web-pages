
function displayData(){
    // get values from HTML elemants 
    let name_value = document.getElementById('Name-Input').value;
    let regiter_number = document.getElementById('Reg-Input').value;
    let age = document.getElementById('DOB-Input').value;
    let mail_address = document.getElementById("email-Input").value;
    let contact = document.getElementById('Contact-Input').value;
    let programe = document.getElementById("option").value
    let graduated = document.querySelectorAll('input[name="Graduated"]');

    // Person age calculation
    let time_diffrence = Date.now() - new Date(age).getTime();
    let time_milisecond = new Date(time_diffrence);
    let person_age = Math.abs(time_milisecond.getUTCFullYear() - 1970);

    // Value get from radio button
    let selectedValue;
            for (const i of graduated) {
                if (i.checked) {
                    selectedValue = i.value;
                    break;
                }
            }
// Data displayed in form page table
    let display = document.getElementById("fourm-data-body");
    let output = "<tr><td>" + name_value + "</td><td>" + regiter_number + "</td><td>" + person_age + "</td><td>" + mail_address + "</td><td>" + contact + "</td><td>" + programe + "</td><td>" + selectedValue + "</td></tr>";
    display.innerHTML = output+display.innerHTML;
    

}






// let execute = document.getElementById('confirm'); 
// execute.addEventListener("click", displayData);


