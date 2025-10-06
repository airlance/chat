import { useState } from 'react'
import { useRouter } from '../router/RouterContext.tsx'

export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { navigate } = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Простая валидация для демонстрации
        if (email && password) {
            navigate('/home')
        }
    }

    return (
        <div>
            <h1 style={{ marginTop: 0, marginBottom: '8px', color: '#1a1a2e' }}>
                Welcome Back
            </h1>
            <p style={{ color: '#666', marginBottom: '24px' }}>
                Sign in to your account
            </p>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#333' }}>
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            fontSize: '14px'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#333' }}>
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            fontSize: '14px'
                        }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '12px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '16px',
                        fontWeight: '500',
                        cursor: 'pointer'
                    }}
                >
                    Sign In
                </button>
            </form>
        </div>
    )
}