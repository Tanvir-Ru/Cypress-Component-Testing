import React, { useState } from 'react';

/**
 * LoginForm — simple controlled React component under test.
 * @param {function} onSubmit — called with { username, password } on valid submit
 */
function LoginForm({ onSubmit }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError]       = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username.trim() || !password.trim()) {
            setError('Username and password are required.');
            return;
        }
        setError('');
        if (onSubmit) onSubmit({ username, password });
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '2rem auto' }}>
            <h2>Login</h2>

            {error && (
                <div data-testid="error-message" style={{ color: 'red', marginBottom: '1rem' }}>
                    {error}
                </div>
            )}

            <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={e => { setUsername(e.target.value); setError(''); }}
                    style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px' }}
                />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={e => { setPassword(e.target.value); setError(''); }}
                    style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px' }}
                />
            </div>

            <button type="submit" style={{ padding: '10px 24px', cursor: 'pointer' }}>
                Log In
            </button>
        </form>
    );
}

export default LoginForm;
