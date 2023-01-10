let user = {}
  const form = document.getElementById('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    user = {name, email, password}
    
    localStorage.setItem('name', JSON.stringify(user) );
  });