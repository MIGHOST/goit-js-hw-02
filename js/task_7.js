"use strict";
//task-7
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const isLoginValid = function (login) {
    return login.length >= 4 && login.length <= 16

};

const isLoginUnique = function (allLogins, login) {
    return allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
    if (isLoginValid(login)) {
        if (isLoginUnique(allLogins, login)) {
            allLogins.push(login);
            return console.log("Login added")
        }
        return console.log("The system has this login")

    }
    return console.log("Erorr! The login must be between 4 and 16 characters")
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'