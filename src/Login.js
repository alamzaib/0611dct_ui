import React, { useState } from 'react';

const Login = ({ setToken }) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const handleLogin = async e => {
    e.preventDefault();
    const res = await fetch('http://192.168.1.143:8000/api/login', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({email,password})
    });
    const data = await res.json();
    if(res.ok) setToken(data.token);
    else alert(data.message);
  }

  return (
    <form onSubmit={handleLogin}>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login;
