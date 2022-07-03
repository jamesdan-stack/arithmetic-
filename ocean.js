const choice = prompt("Please, enter the choice you want to calculate: *,/,+,-");

const first_choice= Number(prompt( 'first number'));
const sec_choice= Number(prompt('second nummber'));

let result;

if (choice == '*') {
    result = first_choice * sec_choice
}

else if (choice == '/') {
    result = first_choice / sec_choice
}

else if (choice == '+') {
    result = first_choice + sec_choice
}

else if (choice == '-') {
    result = first_choice - sec_choice
}

alert(result);