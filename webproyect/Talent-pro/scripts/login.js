// login.js - Registro y login real con localStorage

document.addEventListener('DOMContentLoaded', function() {
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    const loginSection = document.getElementById('login');
    const registerSection = document.getElementById('register');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (showRegister && showLogin && loginSection && registerSection) {
        showRegister.addEventListener('click', function(e) {
            e.preventDefault();
            loginSection.style.display = 'none';
            registerSection.style.display = 'block';
        });
        showLogin.addEventListener('click', function(e) {
            e.preventDefault();
            loginSection.style.display = 'block';
            registerSection.style.display = 'none';
        });
    }

    // Registro
    registerForm.onsubmit = function(e) {
        e.preventDefault();
        const nombre = registerForm.querySelector('input[type="text"]').value.trim();
        const email = registerForm.querySelector('input[type="email"]').value.trim().toLowerCase();
        const pass = registerForm.querySelector('input[type="password"]').value;
        if (!nombre || !email || !pass) return alert('Completa todos los campos');
        let users = JSON.parse(localStorage.getItem('talentpro_users') || '{}');
        if (users[email]) return alert('Este correo ya está registrado. Inicia sesión.');
        users[email] = { nombre, email, pass, carrera: null, lecciones: {} };
        localStorage.setItem('talentpro_users', JSON.stringify(users));
        localStorage.setItem('talentpro_current', email);
        window.location.href = 'test.html';
    };

    // Login
    loginForm.onsubmit = function(e) {
        e.preventDefault();
        const email = loginForm.querySelector('input[type="email"]').value.trim().toLowerCase();
        const pass = loginForm.querySelector('input[type="password"]').value;
        let users = JSON.parse(localStorage.getItem('talentpro_users') || '{}');
        if (!users[email] || users[email].pass !== pass) return alert('Correo o contraseña incorrectos');
        localStorage.setItem('talentpro_current', email);
        window.location.href = 'test.html';
    };
});