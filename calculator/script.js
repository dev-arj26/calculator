let input = document.getElementById("input");
console.log(input.value);
let buttons = document.getElementsByTagName("button");
console.log(buttons[0].innerHTML);
let string = "";
input.value = string;
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    if (buttons[i].innerHTML === "AC") {
      string = "";
      input.value = string;
    } else if (buttons[i].innerHTML === "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (buttons[i].innerHTML === "=") {
      string = eval(string);
      input.value = string;
    } else {
      string += buttons[i].innerHTML;
      input.value = string;
    }
  });
}

// function printMyName(name) {
//   console.log("My name is " + name);
// }

// printMyName("Devaraj");

// let name = "Devashish";
// console.log(name.length);
// name = name.substring(0, name.length - 1);
// console.log(name);

window.addEventListener('keypress', (event) => {
    let symbol = event.key;
    console.log(event)
    switch(symbol) {
        case '0': {
            string += '0';
            input.value = string;
        }
            break;
        case '1': {
            string += '1';
            input.value = string;
        }
            break;
        case '2': {
            string += '2';
            input.value = string;
        }
            break;
        case '3': {
            string += '3';
            input.value = string;
        }
            break;
        case '4': {
            string += '4';
            input.value = string;
        }
            break;
        case '5': {
            string += '5';
            input.value = string;
        }
            break;
        case '6': {
            string += '6';
            input.value = string;
        }
            break;
        case '7': {
            string += '7';
            input.value = string;
        }
            break;
        case '8': {
            string += '8';
            input.value = string;
        }
            break;
        case '9': {
            string += '9';
            input.value = string;
        }
            break;
        case '+': {
            string += '+';
            input.value = string;
        }
            break;
        case '-': {
            string += '-';
            input.value = string;
        }
            break;
        case '/': {
            string += '/';
            input.value = string;
        }
            break;
        case '*': {
            string += '*';
            input.value = string;
        }
            break;
        case '%': {
            string += '%';
            input.value = string;
        }
            break;
        case '.': {
            string += '.';
            input.value = string;
        }
            break;
        case 'Enter': {
            string = eval(string)
            input.value = string;
        }
            break;
    }
})
