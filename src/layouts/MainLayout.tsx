import type { ReactNode } from 'react'
import { useRouter } from '../router/RouterContext'

interface MainLayoutProps {
    children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    const { navigate } = useRouter()

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <header style={{
                background: '#1a1a2e',
                color: 'white',
                padding: '16px 24px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
                <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                    <h2 style={{ margin: 0, fontSize: '20px' }}>My App</h2>
                    <button
                        onClick={() => navigate('/home')}
                        style={{
                            background: 'transparent',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '16px'
                        }}
                    >
                        Home
                    </button>
                    <button
                        onClick={() => navigate('/login')}
                        style={{
                            background: 'transparent',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '16px',
                            marginLeft: 'auto'
                        }}
                    >
                        Logout
                    </button>
                </nav>
            </header>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '24px' }}>
                {children}
            </main>

            {/* Footer */}
            <footer style={{
                background: '#f5f5f5',
                padding: '16px 24px',
                textAlign: 'center',
                color: '#666'
            }}>
                © 2025 My App. All rights reserved.
            </footer>
        </div>
    )
}