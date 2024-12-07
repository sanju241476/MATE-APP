async function signup() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:3000/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const result = await response.json();
  alert(result.message);
}

async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const result = await response.json();
  if (response.ok) {
    alert('Login successful');
    window.location.href = 'booking.html';
  } else {
    alert(result.message);
  }
}

async function bookFuel() {
  const fuelType = document.getElementById('fuelType').value;
  const quantity = document.getElementById('quantity').value;
  const location = document.getElementById('location').value;

  const response = await fetch('http://localhost:3000/api/book', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fuelType, quantity, location }),
  });

  const result = await response.json();
  alert(result.message);

  if (response.ok) {
    alert('Booking Successful!');
  }
}
