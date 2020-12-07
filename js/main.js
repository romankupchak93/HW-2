// 1. Проекспериментувати з типами даних.
    //Прописав через елемент <code></code>//
// 2. Написати конвертер валют - пишете скільки у вас є гривень і які очікуємо можливі конвертації - у долар, євро, нафту(brent), золото. Додатково зробити перевірку чи не обманює вас юзер і перевіряти чи не прийшов вам null or undefined.
function ConvertToAll() {
        let UserUAH = document.getElementById("UserUAH").value;
        if (UserUAH < 0) {
            document.getElementById("ConvertList").innerHTML = 'Не сиди на кредитах:)';
        } else if (UserUAH == '' || isNaN(UserUAH)) {
            document.getElementById("ConvertList").innerHTML = 'Некоректний ввід';
        } else if (UserUAH == 0) {
            document.getElementById("ConvertList").innerHTML = 'Скористайся кредитом';
        } else {
        let GiveMeUSD = (UserUAH / 28.2).toFixed(2);
        let GiveMeEUR = (UserUAH / 33.1).toFixed(2);
        let GiveMeBRENT = (UserUAH / 1146).toFixed(2);
        let GiveMeGOLD = (UserUAH / 1871).toFixed(2);
        document.getElementById("ConvertList").innerHTML = 'Ваша сума у іноземній валюті складає: ' +
            '<br> <strong>- Долар</strong> - ' + `${GiveMeUSD}` +
            '<br> <strong>- Євро</strong> - ' + `${GiveMeEUR}` +
            '<br> <strong>- Нафта</strong> - ' + `${GiveMeBRENT}` +
            '<br> <strong>- Золото</strong> - ' + `${GiveMeGOLD}` +
            '';
        }
}

// 3. Спитатись у юзера суму замовлення і вивести результат з урахуванням знижки : до 500 гривень знижка -1 %, від 500 до 1000 - 5%, більше 1000 - 10% та подарунковий сертифікат на 200 гривень у подарунок!
function CheckSum(){
    check = document.getElementById('OrderSum').value;
    return check;
}
function DiscountForUser(){
    check = CheckSum();
    discount = document.getElementById('DiscountSum').value;
    if (check < 0 || check == '' || isNaN(check)) {
        alert('Введіть коректну суму');
        document.getElementById('OrderSum').value = '';
    }else {
        switch (true) {
            case check < 500:
                document.getElementById('DiscountSum').value = check * .01;
                break;
            case  500 <= check && check < 1000:
                document.getElementById('DiscountSum').value = check * .05;
                break;
            default:
                document.getElementById('DiscountSum').value = check * .1;
                document.getElementById("CertificateForUser").innerHTML='Також ви отримуєте 200грн бонус, бо ви красава';
        }
    }
}
// 4. Створити тест на знання будь-чого, юзер має відповісти на 5 питань, вірна відповідь - 1 бал, якщо юзер відповість правильно на всі 5 запитань - додатково додати 1 бонусний бал.
// scripts here:

function submitQuiz() {
    console.log('submitted');

    function answerScore (qName) {
        var radiosNo = document.getElementsByName(qName);
        for (var i = 0, length = radiosNo.length; i < length; i++) {
            if (radiosNo[i].checked) {
                var answerValue = Number(radiosNo[i].value);
            }
        }
        if (isNaN(answerValue)) {
            answerValue = 0;
        }
        return answerValue;
    }

    var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4'));
    console.log("CalcScore: " + calcScore);

    function correctAnswer (correctStringNo, qNumber) {
        // console.log("qNumber: " + qNumber);
        return ("Відповідь на запитання #" + qNumber + ": &nbsp;<strong>" +
            (document.getElementById(correctStringNo).innerHTML) + "</strong>");
    }

    if (answerScore('q1') === 0) {
        document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
    }
    if (answerScore('q2') === 0) {
        document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
    }
    if (answerScore('q3') === 0) {
        document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
    }
    if (answerScore('q4') === 0) {
        document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
    }

    // calculate "possible score" integer
    var questionCountArray = document.getElementsByClassName('QuestionForUser');

    var questionCounter = 0;
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
    }

    var showScore = "Результат: " + calcScore +"/" + questionCounter;
    if (calcScore === questionCounter) {
        showScore = showScore + "&nbsp; <strong>Неймовірно! Лови бонус + 1бал</strong>"

    };
    document.getElementById('userScore').innerHTML = showScore;
}

$(document).ready(function() {

    $('#submitButton').click(function() {
        $(this).addClass('hide');
    });

});
// 5. Запитатись у користувача 3 значне число та сказати чи є у ньому однакові цифри
function ThreeDigitNumber() {
    let FullNumber = document.getElementById('FullNumber').value;
    let PartNum1 = Math.trunc(FullNumber / 100);
    let PartNum2 = Math.trunc(FullNumber / 10) - (PartNum1 * 10);
    let PartNum3 = FullNumber - (PartNum1 * 100) - (PartNum2 * 10);
    let i = 0;
    if (PartNum1 === PartNum2) {
        document.getElementById("ThreeDigitNumberResult").innerHTML='Юху';
        i = 1;
    }
    if (PartNum2 === PartNum3) {
        document.getElementById("ThreeDigitNumberResult").innerHTML='Юху';
        i = 1;
    }
    if (PartNum1 === PartNum3) {
        document.getElementById("ThreeDigitNumberResult").innerHTML='Юху';
        i = 1;
    }
    if (i === 0) {
        document.getElementById("ThreeDigitNumberResult").innerHTML='О нііі';
    }
}
// 6. Запитатись у юзера одну кнопку від 1 до 0 на клавіатурі та вивести що буде при нажиманні цифри разом з шифтом.
function UserSomeWrite() {
    let UserSomeWrite = prompt("Натисніть що небудь від 1 до 0");
    UserSomeWrite = Number(UserSomeWrite);
    if (UserSomeWrite < 0) {
        alert('Натисни щось від 1 до 0')
    } else {
        switch (UserSomeWrite) {
            case 1:
                document.getElementById("UserSomeWriteAnswer").innerHTML = 'Натиснувши цю кнопку ми отримаємо <strong></strong>';
                break;
            case 2:
                document.getElementById("UserSomeWriteAnswer").innerHTML = 'Натиснувши цю кнопку ми отримаємо <strong>@</strong>';
                break;
            case 3:
                document.getElementById("UserSomeWriteAnswer").innerHTML = 'Натиснувши цю кнопку ми отримаємо <strong>#</strong>';

                break;
            case 4:
                document.getElementById("UserSomeWriteAnswer").innerHTML = 'Натиснувши цю кнопку ми отримаємо <strong>$</strong>';
                break;
            case 5:
                document.getElementById("UserSomeWriteAnswer").innerHTML = 'Натиснувши цю кнопку ми отримаємо <strong>%</strong>';
                break;
            case 6:
                document.getElementById("UserSomeWriteAnswer").innerHTML = 'Натиснувши цю кнопку ми отримаємо <strong>^</strong>';
                break;
            case 7:
                document.getElementById("UserSomeWriteAnswer").innerHTML = 'Натиснувши цю кнопку ми отримаємо <strong>&</strong>';
                break;
            case 8:
                document.getElementById("UserSomeWriteAnswer").innerHTML = 'Натиснувши цю кнопку ми отримаємо <strong>*</strong>';
                break;
            case 9:
                document.getElementById("UserSomeWriteAnswer").innerHTML = 'Натиснувши цю кнопку ми отримаємо <strong>(</strong>';
                break;
            case 0:
                document.getElementById("UserSomeWriteAnswer").innerHTML = 'Натиснувши цю кнопку ми отримаємо <strong>)</strong>';
                break;
            default:
                document.getElementById("UserSomeWriteAnswer").innerHTML = 'Некоректний ввід';
        }
    }
}