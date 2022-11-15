// import { insert } from "./functions.js";
import { collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js"

import db from "./connection.js";
// DOM Components
export const inputPass = document.querySelector('#password');
export const inputEmail = document.querySelector('#email');
const form = document.querySelector('#form');
export const alert = document.querySelector('#alert');



form.addEventListener('submit', async e => {
    e.preventDefault();
    if ([inputEmail.value, inputPass.value].includes('')) {
        showAlert('There are fields empty', false);
        return;
    }
    if (inputPass.value.length < 8) {
        showAlert('The password is very little');
        return;
    }
    await logearUsuarios();
});



inputEmail.addEventListener('change', e => {
    const emailStr = e.target.value;
    if (!emailStr.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        showAlert('Type email well', false)
        return;
    }
});


const logearUsuarios = async () => {
    try {
        // declaramos a que coleccion nos vamos a conectar y su nombre
        const dbreplay = collection(db, "replayusers");
        // hacemos el query de busqueda del email
        const queryEmail = query(dbreplay, where("email", "==", inputEmail.value));
        const resEmail = await getDocs(queryEmail);
        console.log(queryEmail)
        resEmail.forEach(doc => {
            const { password,name } = doc.data();
            
            if (password === inputPass.value) {
                localStorage.setItem('name',name);
                showAlert('Logged', true);
                window.location.href= "UserIndex.html";
            } else {
                showAlert('Password Wrong', false)
            }
        });
    } catch (error) {
        showAlert("Server Error", false);
    }
}



export function showAlert(msg, aspect) {
    if (aspect == true) {
        alert.textContent = msg;
        alert.classList.add('bg-green-500')
        alert.classList.remove('hidden');
        setTimeout(() => {
            alert.classList.add('hidden');
        }, 3000);
    } else {
        alert.textContent = msg;
        alert.classList.add('bg-red-500')
        alert.classList.remove('hidden');
        setTimeout(() => {
            alert.classList.add('hidden');
        }, 3000);
    }

}

