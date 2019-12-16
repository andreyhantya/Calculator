let calculator = document.getElementById("calculator");
let out = document.getElementById('out');
let numbers = [];
let sings = [];
let countOfSings = 0,
    countOfNumbers = 0,
    sum = 0;


function onload() {
    calculator.addEventListener("click", function (e) {
        if (e.target && e.target.className === "item") {
            out.innerText += e.target.innerHTML;
        }
        switch (e.target.id) {
            case "plus":
                sings[countOfSings] = "+";
                clickButton();
                break;
            case "minus":
                sings[countOfSings] = "-";
                clickButton();
                break;
            case "multiple":
                sings[countOfSings] = "*";
                clickButton();
                break;
            case "divided":
                sings[countOfSings] = "/";
                clickButton();
                break;
            case "equal":
                if (sings.length === 0) {
                    alert("Добавьте знак!");
                } else {
                    numbers[countOfNumbers] = Number(out.innerHTML);
                    out.innerText = equal(numbers, sings);
                }
                break;
            case "backspace":
                out.innerText = backspace(out.innerHTML);
                break;
            case "bkt":
                out.innerText = bkt(out.innerHTML);
                break;
        }
    });
}


//После нажатия на мат.символы (кидает число в массив добавляет счетчики и удаляет содержимое в окне)
const clickButton = () => {
    numbers[countOfNumbers] = Number(out.innerHTML);
    countOfNumbers++;
    countOfSings++;
    out.innerText = clear();
};

//Удаление одного символа
const backspace = (num) => {
    num = num.slice(0, -1);
    return num;
};

const clear = () => {
    return "";
};
//Чистка всех переменных
const bkt = (num) => {
    let newOut = Number(num);
    newOut *= -1;
    return newOut;
};

//функции плюс, минус, умножить, поделить
const plus = (a, b) => {
    return a + b;
};

const minus = (a, b) => {
    return a - b;
};

const multiple = (a, b) => {
    return a * b;
};

const divided = (a, b) => {
    if (a === 0 || b === 0) {
        return "Неверное число!";
    } else {
        return a / b;
    }
};

const equal = (number, sings) => {
    // Условие на умножить и поделить
    for (let i = 0; i < sings.length; i++) {
        if (sings[i] === "*") {
            sum = multiple(number[i], number[i + 1]);
            number.splice(i, i + 1, sum);
        } else if (sings[i] === "/") {
            sum = divided(number[i], number[i + 1]);
            number.splice(i, i + 1, sum)
        }
    }
    // Подсчет + -
    for (let i = 0; i < sings.length; i++) {
        switch (sings[i]) {
            case "+":
                sum = plus(number[0], number[1]);
                number.splice(0, 2, sum);
                break;
            case "-":
                sum = minus(number[0], number[1]);
                number.splice(0, 2, sum);
                break;
        }
    }
    number = [];
    sings = [];
    countOfSings = 0;
    countOfNumbers = 0;
    return sum;
};

