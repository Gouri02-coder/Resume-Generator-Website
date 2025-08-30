// src/pages/Login.jsx
import { useState } from 'react';
import { loginUser } from '../api';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await loginUser(form);
      alert('Login successful!');
      console.log(res);
    } catch (err) {
      alert('Login failed: ' + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: '400px',
          borderRadius: '15px',
          background: 'white',
        }}
      >
        <h3 className="text-center mb-4 text-primary">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button
            className="btn w-100"
            style={{
              background: 'linear-gradient(90deg, #667eea, #764ba2)',
              color: 'white',
              fontWeight: 'bold',
            }}
            type="submit"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
