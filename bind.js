/// ==================================================================================================== /// 

// -------------------------// M
// let user = {
//     firstName: "Вася",
//     sayHi() {
//       console.log(`Привет, ${this.firstName}!`);
//     }
//   };
  
//   setTimeout(user.sayHi, 1000);
//   setTimeout(() => user.sayHi(), 1000);
 

// const userSayHi = user.sayHi.bind(user);
// userSayHi()
//   setTimeout(userSayHi, 1000);


// -------------------------// 

// bindAll

// for (let key in user) {
//     if (typeof user[key] == 'function') {
//       user[key] = user[key].bind(user);
//     }
//   }


/// ==================================================================================================== /// 


// function partial(func, ...argsBound) {
//     return function(...args) { // (*)
//       return func.call(this, ...argsBound, ...args);
//     }
//   }


// function sayHi() {
//     console.log( this.name );
//   }
//   sayHi.test = 5;
//   console.log(sayHi)
//   let bound = sayHi.bind({
//     name: "Вася"
//   });

//   console.log(bound)

  
//   console.log( bound.test );

/// ==================================================================================================== /// 


// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.

// Однако, его вызов приводит к ошибке. Почему?

// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).


// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//   }
  
//   let user = {
//     name: 'Вася',
  
//     loginOk() {
//       alert(`${this.name} logged in`);
//     },
  
//     loginFail() {
//       alert(`${this.name} failed to log in`);
//     },
  
//   };
  
//   askPassword(user.loginOk, user.loginFail);

// -------------------------// M
// function askPassword(ok, fail) {

//     let password = "rockstar";

//     if (password == "rockstar") ok();
//     else fail();
//   }
  
//   let user = {
//     name: 'Вася',
  
//     loginOk() {
//         console.log(`${this.name} logged in`);
//     },
  
//     loginFail() {
//         console.log(`${this.name} failed to log in`);
//     },
  
//   };
  
//   askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// -------------------------//

/// ==================================================================================================== /// 
// Использование частично применённой функции для логина
// важность: 5

// Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".

// Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).

// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

// function askPassword(ok, fail) {
// //   let password = "2";
//   let password = "rockstar";
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   login(result) {
//     console.log( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?

// Ваши изменения должны затрагивать только выделенный фрагмент кода.

/// ==================================================================================================== /// 
