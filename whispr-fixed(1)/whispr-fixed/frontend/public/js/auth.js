const API = '/api';

function switchTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));

  const tabs = document.querySelectorAll('.tab');
  const forms = document.querySelectorAll('.auth-form');

  if (tab === 'login') {
    tabs[0].classList.add('active');
    forms[0].classList.add('active');
  } else {
    tabs[1].classList.add('active');
    forms[1].classList.add('active');
  }

  document.getElementById('loginError').textContent = '';
  document.getElementById('registerError').textContent = '';
}

async function handleLogin(e) {
  e.preventDefault();
  const btn = document.getElementById('loginBtn');
  const err = document.getElementById('loginError');
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;

  btn.disabled = true;
  btn.querySelector('span').textContent = 'Signing in…';
  err.textContent = '';

  try {
    const res = await fetch(`${API}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();

    if (!res.ok) {
      err.textContent = data.error || 'Login failed';
      btn.disabled = false;
      btn.querySelector('span').textContent = 'Sign in';
      return;
    }

    localStorage.setItem('whispr_token', data.token);
    localStorage.setItem('whispr_user', JSON.stringify(data.user));
    window.location.href = '/app.html';
  } catch {
    err.textContent = 'Network error. Try again.';
    btn.disabled = false;
    btn.querySelector('span').textContent = 'Sign in';
  }
}

async function handleRegister(e) {
  e.preventDefault();
  const btn = document.getElementById('registerBtn');
  const err = document.getElementById('registerError');
  const username = document.getElementById('regUsername').value.trim();
  const password = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regConfirm').value;

  if (password !== confirm) {
    err.textContent = 'Passwords do not match';
    return;
  }

  btn.disabled = true;
  btn.querySelector('span').textContent = 'Creating…';
  err.textContent = '';

  try {
    const res = await fetch(`${API}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();

    if (!res.ok) {
      err.textContent = data.error || 'Registration failed';
      btn.disabled = false;
      btn.querySelector('span').textContent = 'Create account';
      return;
    }

    localStorage.setItem('whispr_token', data.token);
    localStorage.setItem('whispr_user', JSON.stringify(data.user));
    window.location.href = '/app.html';
  } catch {
    err.textContent = 'Network error. Try again.';
    btn.disabled = false;
    btn.querySelector('span').textContent = 'Create account';
  }
}

// Redirect if already logged in
if (localStorage.getItem('whispr_token')) {
  window.location.href = '/app.html';
}
