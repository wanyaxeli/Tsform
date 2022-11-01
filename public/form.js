"use strict";
const Btn = document.querySelectorAll('.btn');
const signUp = document.querySelector('.sign-in-wrapper');
const Login = document.querySelector('.login-wrapper');
const btnLogin = document.querySelector('.login-btn');
const btnSignUp = document.querySelector('.sign-up-btn');
const sec = document.querySelector('section');
const subMit_btn = document.querySelector('#login-btn');
const names = document.getElementById("name");
console.log(names.value);
const password = document.querySelector('#pwd').value;
console.log(password);
let l = Btn.length;
for (let i = 0; i < l; i++) {
    Btn[i].addEventListener('click', (e) => {
        for (let j = 0; j < l; j++) {
            if (Btn[j] !== e.target && Btn[j].classList.contains('btn-active')) {
                Btn[j].classList.remove('btn-active');
            }
        }
        if (Btn[i] === e.target && !Btn[1].classList.contains('btn-active')) {
            Btn[i].classList.add('btn-active');
        }
    });
}
btnLogin.addEventListener('click', (e) => {
    Login.classList.remove('hide-form');
    signUp.classList.add('hide-form');
    sec.classList.remove('sign-height');
});
btnSignUp.addEventListener('click', (e) => {
    Login.classList.add('hide-form');
    signUp.classList.remove('hide-form');
    sec.classList.add('sign-height');
});
subMit_btn.addEventListener('click', (e) => {
});
