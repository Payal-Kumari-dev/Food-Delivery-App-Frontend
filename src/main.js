'use strict'
    
    const registrationForm = document.querySelector('#registration-form')
    const loginForm        = document.querySelector('#login-form')
    console.log(registrationForm, loginForm)
    
    registrationForm.addEventListener('submit', async function(e) {
        e.preventDefault()

        const username = e.target.username.value.trim()
        const phone    = e.target.phone.value.trim()
        const email    = e.target.userEmail.value.trim()
        const password = e.target.userPassword.value.trim()
        
        if ( [username, phone, email, password].some(value => value === "") ) {
            console.log("Fields must not be empty.");
        } else {
            try {
                const res = await fetch('http://127.0.0.1:8000/register', {
                    method: 'post',
                    body: JSON.stringify({ user: username, phone, email, pwd: password }),
                    headers: { 'Content-Type': 'application/json' },
                })
        
                const message = await res.json()
                console.log(message)
            } catch (error) {
                console.log(error)
            }
        }
    })

    loginForm.addEventListener('submit', async function(e) {
        console.log('login')
        e.preventDefault()

        const email    = e.target.userEmail.value.trim()
        const password = e.target.userPassword.value.trim()

        if ( [email, password].some(value => value === "") ) {
            console.log("Fields must not be empty.");
        } else {
            try {
                const res = await fetch('http://127.0.0.1:8000/auth', {
                    method: 'post',
                    body: JSON.stringify({ email, pwd: password }),
                    headers: { 'Content-Type': 'application/json' },
                })
        
                const message = await res.json()
                console.log(message)
            } catch (error) {
                console.log(error)
            }
        }
    })

