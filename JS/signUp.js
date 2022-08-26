
import { collection, getDocs, addDoc, query, where } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js"
import db from "./connection.js";

const formSignup = document.querySelector('#form-signup');
const inputPassSign = document.querySelector('#password');
const inputEmailSign = document.querySelector('#email');
const alert = document.querySelector('#alert');
const inputRepPass = document.querySelector('#reppass');
const inputName = document.querySelector('#name');


formSignup.addEventListener('submit', async e => {
    e.preventDefault();
    const emailStr = inputEmailSign.value;
    if ([inputEmailSign.value, inputPassSign.value, inputName.value].includes('')) {
        showAlert('There are fields empty', false);
        return;
    }
    if (inputPassSign.value !== inputRepPass.value) {
        showAlert('Passwords are not the same', false)
        return;
    }
    if (inputPassSign.value.length < 6) {
        showAlert('Very short password', false)
        return;
    }
    if (!emailStr.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        showAlert('Type email well', false);
        return;
    }
    verifyEmail();



});

async function userInsert() {

    const usObj = {
        name: inputName.value,
        email: inputEmailSign.value,
        password: inputPassSign.value
    }
    try {
        await addDoc(collection(db, "replayusers"), usObj);
        showAlert('Succesful Registration', true);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

function showAlert(msg, aspect) {
    if (aspect === true) {
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



async function verifyEmail() {
    const flag = false;
    try {
        // declaramos a que coleccion nos vamos a conectar y su nombre
        const dbreplay = collection(db, "replayusers");
        // hacemos el query de busqueda del email
        const queryEmail = query(dbreplay, where("email", "==", inputEmailSign.value));
        const resEmail = await getDocs(queryEmail);
        resEmail.forEach(doc => {
            const { email } = doc.data();
            if (email === inputEmailSign.value) {
                showAlert('This email already are use', false);
                flag = true;
                return;
            }
        });
        if (flag === false) {
            userInsert();
        }
    } catch (error) {
        console.log(error)
    }

}