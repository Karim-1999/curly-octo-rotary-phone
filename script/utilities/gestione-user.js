// QUI IL CODICE PRINCIPALE PER FAR FUNZIONARE LE 3 PAGINE DEL FORM
/* TUTTE LE FUNZIONI DI GESTIONE DELL'ACCOUNT */

// FUNZIONE DI REGISTRAZIONE
/* 
URL: https://api-nodejs-todolist.herokuapp.com/
ENDPOINT: /user/register
PARAMETERS: <none>
*/

const register = async () => {
    try {
        // const user = {
        //     name: localStorage.getItem('username'),
        //     email: localStorage.getItem('email'),
        //     password: document.getElementById('psw').value,
        //     age: localStorage.getItem('age')  
        // }

        const user = {
            name: document.querySelector('#username').value,
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value,
            age: document.querySelector('#number').value  
        }

        console.log(user);

        const result = await fetch("https://api-nodejs-todolist.herokuapp.com/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        if(result.ok){
            const data = await result.json();
            // console.log(result, data);
            localStorage.setItem('token', data.token);
            location.href = 'profile.html';
        }
        else {throw new Error(`Failed to fetch: ${result.statusText}`);}
    } catch (error) {
        alert(error);
    }
}

// -- -- -- -- -- -- -- -- --- - -- - - - - -- - - - - -- - -- -- - 


/* FUNZIONE DI LOGIN */
/* 
BASEURL: https://api-nodejs-todolist.herokuapp.com
ENDPOINT: /user/login
PARAMETERS: <null>
 */
const login = async () => {
    try {
        const result = await fetch("https://api-nodejs-todolist.herokuapp.com/user/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": document.querySelector("#email2").value,
	            "password": document.querySelector("#password2").value
            })
        })
        console.log(document.querySelector("#email2").value);
        console.log(document.querySelector("#password2").value);
        if(result.ok){
            const data = await result.json();
            /* console.log(result, data); */
            localStorage.setItem('token', data.token);
            location.href = 'profile.html';
        }
        throw new Error(`Failed to fetch: ${result.statusText}`);
    } catch (error) {
        console.error(error);
    }
}


/* FUNZIONE DI LOGOUT */
/* 
URL: https://api-nodejs-todolist.herokuapp.com
ENDPOINT: /user/logout
PARAMETERS: <none>
*/
const logout = async () => {
    try {
        const result = await fetch("https://api-nodejs-todolist.herokuapp.com/user/logout",{
            method: "POST",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        console.log(result);
        console.log(result.json());
        if(result.ok){
            localStorage.removeItem('token');
            location.href = 'login.html';
        }
        else {throw new Error(`Failed to fetch: ${result.statusText}`);}
    } catch (error) {
        alert(error);
    }
}

// ---------------------------------------------------------------------

/* 
URL: https://api-nodejs-todolist.herokuapp.com/
ENDPOINT: /user/logout
PARAMETERS: <none>
*/
const getUser = async () => {
    try {
        const result = await fetch('https://api-nodejs-todolist.herokuapp.com/user/me', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        if (result.ok) {
            const data = await result.json();
            
            injectUser(data);
        }
        else { throw new Error(`Failed to fetch: ${result.statusText}`); }
    } catch (error) {
        alert(error);
    }
}


const injectUser = (data) => {

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const number = document.getElementById("number");

    const { email:mail, name, age } = data;

    email.textContent  = mail
    username.textContent = name
    number.textContent = age

    // prende i campi dell'html e li riempie 
    //elemento.textContent = data.email / ecc ;
}



































