
//task2

// 1 variant

// function Client() {
//     this.clientBase = [];
// }
//
// Client.toJSON = function (str) {
// //     str = str.split(/\s{2}/g);
// //     return { name: str[0], patronymic: str[1], surname: str[2], address: str[3], creditCard: str[4], bankAccount: str[5] };
// // };
//
// Client.prototype = {
//
//     get getClient() {
//         return this.clientBase;
//     },
//
//     set addClient(data) {
//
//         const chooseMethod = typeof data;
//
//         if (chooseMethod === "string") {
//            this.clientBase = this.clientBase.concat(Client.toJSON(data));
//          } else if (chooseMethod === "object" && Object.keys(data).length === 6 &&
//             isNaN(data.name) && isNaN(data.surname) && isNaN(data.patronymic) &&
//             !isNaN(parseFloat(data.creditCard.replace(/\s?/g, ""))) && !isNaN(parseFloat(data.bankAccount))) {
//
//             this.clientBase = this.clientBase.concat(data);
//         }
//
//
//     }
//
// }
//
// Client.prototype.sort = function () {
//
//     return this.clientBase.sort(function (client1,client2) {
//
//         if(client1.surname[0] < client2.surname[0]) return -1;
//         if(client1.surname[0] > client2.surname[0]) return 1;
//         return 0;
//     });
// };
//
//
// Client.prototype.getClientGivenCondition = function () {
//
//     return this.clientBase.filter(function (client) {
//         return (+client.creditCard.split(/\s+/g)[0] > 4000) && (+client.creditCard.split(/\s+/g)[0] < 4500);
//     })
// }

//2 variant

// class Client {
//
//     constructor() {
//         this.clientBase = [];
//     }
//
//     static toJSON(str) {
//         str = str.split(/\s{2}/g);
//
//         return {
//             name: str[0],
//             patronymic: str[1],
//             surname: str[2],
//             address: str[3],
//             creditCard: str[4],
//             bankAccount: str[5]
//         };
//     };
//
//     get getClient() {
//         return this.clientBase;
//     }
//
//     set addClient(data) {
//
//         const chooseMethod = typeof data;
//
//         if (chooseMethod === "string") {
//             this.clientBase = this.clientBase.concat(Client.toJSON(data));
//         } else if (chooseMethod === "object" && Object.keys(data).length === 6 &&
//             isNaN(data.name) && isNaN(data.surname) && isNaN(data.patronymic) &&
//             !isNaN(parseFloat(data.creditCard.replace(/\s?/g, ""))) && !isNaN(parseFloat(data.bankAccount))) {
//
//             this.clientBase = this.clientBase.concat(data);
//         }
//     }
//
//     sort() {
//
//         return this.clientBase.sort(function (client1,client2) {
//
//             if(client1.surname[0] < client2.surname[0]) return -1;
//             if(client1.surname[0] > client2.surname[0]) return 1;
//             return 0;
//         });
//     };
//
//     getClientGivenCondition() {
//
//         return this.clientBase.filter(function (client) {
//             return (+client.creditCard.split(/\s+/g)[0] > 4000) && (+client.creditCard.split(/\s+/g)[0] < 4500);
//         })
//     }
//
// }


//3 variant

// function  Client() {
//     let clientBase = [];
//
//     const toJSON = function (str) {
//         str = str.split(/\s{2}/g);
//         return {
//             name: str[0],
//             patronymic: str[1],
//             surname: str[2],
//             address: str[3],
//             creditCard: str[4],
//             bankAccount: str[5]
//         };
//     };
//
//     const getClientBase = function () {
//
//         return clientBase;
//     }
//
//     const addClient = function (data) {
//
//         const chooseMethod = typeof data;
//
//         if (chooseMethod === "string") {
//             clientBase = clientBase.concat(toJSON(data));
//         } else if (chooseMethod === "object" && Object.keys(data).length === 6 &&
//             isNaN(data.name) && isNaN(data.surname) && isNaN(data.patronymic) &&
//             !isNaN(parseFloat(data.creditCard.replace(/\s?/g, ""))) && !isNaN(parseFloat(data.bankAccount))) {
//
//             clientBase = clientBase.concat(data);
//         }
//     }
//
//     const sort = function () {
//
//         return clientBase.sort(function (client1, client2) {
//
//             if (client1.surname[0] < client2.surname[0]) return -1;
//             if (client1.surname[0] > client2.surname[0]) return 1;
//             return 0;
//         });
//     };
//
//     const getClientGivenCondition = function (leftBorder, rightBorder) {
//
//         return clientBase.filter(function (client) {
//
//             if ((leftBorder <= +client.creditCard.split(/\s+/g)[0]) && (+client.creditCard.split(/\s+/g)[0] <= rightBorder) &&
//                 (!isNaN(parseFloat(leftBorder))) && (!isNaN(parseFloat(rightBorder)))) {
//
//                 return (+client.creditCard.split(/\s+/g)[0] > leftBorder) && (+client.creditCard.split(/\s+/g)[0] < rightBorder);
//             }
//         })
//     };
//
//
//         return Object.freeze({
//             get getClientBase() {
//                 return getClientBase()
//             },
//             set addClient(data) {
//                 return addClient(data)
//             },
//             sort: sort,
//             getClientGivenCondition: getClientGivenCondition
//         });
// }

// const client =  Client();
// client.addClient = "Илья  Андреевич  Ильич  г.Москва ул.Новоселова  21  4567 5464 5454  5555?44676767463202";
// client.addClient = "Максим  Валерьевич  Храмцов  г.Ростов-на-Дону ул.Стабильная 9  4567 5464 5454 5555  44676767463202";
// client.addClient = "Максим  Викторович  Косолапов  г.Ростов-на-Дону ул.Стабильная 9  4567 5464 5454 5555  44676767463202";
// client.addClient = { name:'Андрей', surname:'Андреевич', patronymic:'Андреев', address:'г.Москва ул. Солженицина 90', creditCard: "4400 5464 5454 5555", bankAccount: "55676767463202"};
// console.log(client.sort());
// console.log(client.getClientGivenCondition(4000, 4500));



//task3

//1 variant

// function Timer() {
//     this.time = [];
// }
//
// Timer.format = function(data){
//     return "0" + data;
// }
// Timer.prototype = {
//
//     set seconds(seconds){
//         if ((seconds >= 10) && (seconds <= 59)) {
//             this.time.push(seconds.toString());
//         } else if (seconds.toString().length === 1) {
//             this.time[2] = Timer.format(seconds);
//         } else {
//             throw "Введите корректные данные"
//         }
//
//     },
//
//     set minutes(minutes){
//         if ((minutes>=10) && (minutes <=59)) {
//             this.time.push(minutes.toString());
//         } else if (minutes.toString().length === 1) {
//             this.time[1] = Timer.format(minutes);
//         } else  {
//             throw "Введите корректные данные";
//         }
//
//     },
//
//     set hours(hours) {
//         if ((hours >= 10) && (hours <= 23)) {
//             this.time.push(hours.toString());
//         } else if (hours.toString().length === 1){
//             this.time[0] =  Timer.format(hours);
//         } else {
//             throw "Введите корректные данные"
//         }
//     },
//
//     get taketime(){
//
//         return this.time.join(".");
//     }
// }

//2 variant

// class Timer {
//
//     constructor(){
//         this.time = [];
//     }
//
//     static format(data) {
//         return "0" + data;
//     }
//
//     set seconds(seconds){
//         if ((seconds >= 10) && (seconds <= 59)) {
//             this.time.push(seconds.toString());
//         } else if (seconds.toString().length === 1) {
//             this.time[2] = Timer.format(seconds);
//         } else {
//             throw "Введите корректные данные"
//         }
//
//     }
//
//     set minutes(minutes){
//         if ((minutes>=10) && (minutes <=59)) {
//             this.time.push(minutes.toString());
//         } else if (minutes.toString().length === 1) {
//             this.time[1] = Timer.format(minutes);
//         } else  {
//             throw "Введите корректные данные";
//         }
//
//     }
//
//     set hours(hours) {
//         if ((hours >= 10) && (hours <= 23)) {
//             this.time.push(hours.toString());
//         } else if (hours.toString().length === 1){
//             this.time[0] =  Timer.format(hours);
//         } else {
//             throw "Введите корректные данные"
//         }
//     }
//
//     get taketime(){
//
//         return this.time.join(".");
//     }
// }

//3 variant

// function Timer() {
//
//     let time = [];
//
//     const Format = function (data) {
//         return "0" + data;
//     }
//
//     const setseconds = function (seconds) {
//         if ((seconds >= 10) && (seconds <= 59)) {
//             time.push(seconds.toString());
//         } else if (seconds.toString().length === 1) {
//             time[2] = Format(seconds);
//         } else {
//             throw "Введите корректные данные"
//         }
//     }
//
//     const setminutes = function (minutes) {
//         if ((minutes>=10) && (minutes <=59)) {
//             time.push(minutes.toString());
//         } else if (minutes.toString().length === 1) {
//             time[1] = Format(minutes);
//         } else  {
//             throw "Введите корректные данные";
//         }
//     }
//
//     const sethours = function (hours) {
//         if ((hours >= 10) && (hours <= 23)) {
//             time.push(hours.toString());
//         } else if (hours.toString().length === 1){
//             time[0] = Format(hours);
//         } else {
//             throw "Введите корректные данные"
//         }
//     }
//
//
//     const taketime = function () {
//         return time;
//     }
//
//
//     return Object.freeze({
//         get taketime() {
//             return taketime()
//         },
//
//         set seconds(data) {
//             return setseconds(data)
//         },
//
//         set minutes(data) {
//             return setminutes(data)
//         },
//
//         set hours(data) {
//             return sethours(data)
//         },
//     });
//
//
//
//
// }


// const time =  Timer();
// time.hours = 9;
// time.minutes = 11;
// time.seconds = 8;
// console.log(time.taketime.join("."));