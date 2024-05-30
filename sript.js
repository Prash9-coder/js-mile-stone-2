document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    // Save user data to localStorage (for demonstration)
    localStorage.setItem('user', JSON.stringify({ username, email, password }));
    alert('Signup successful');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
        alert('Login successful');
    } else {
        alert('Invalid credentials');
    }
});

document.getElementById('recover-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('recover-email').value;
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email) {
        alert('Password recovery email sent');
    } else {
        alert('User not found');
    }
});
// Existing code
courses.forEach(course => {
    const courseElement = document.createElement('div');
    courseElement.innerHTML = `<strong>${course.title}</strong> - Category: ${course.category}`;
    container.appendChild(courseElement);
});
