export const HomePage = () => {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '32px', marginBottom: '16px', color: '#1a1a2e' }}>
                Dashboard
            </h1>
            <p style={{ color: '#666', marginBottom: '32px' }}>
                Welcome to your dashboard! Here you can manage your account and view your data.
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '24px',
                marginTop: '32px'
            }}>
                {/* Card 1 */}
                <div style={{
                    background: 'white',
                    padding: '24px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{ margin: '0 0 8px 0', color: '#667eea' }}>Total Users</h3>
                    <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '0', color: '#1a1a2e' }}>
                        1,234
                    </p>
                </div>

                {/* Card 2 */}
                <div style={{
                    background: 'white',
                    padding: '24px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{ margin: '0 0 8px 0', color: '#764ba2' }}>Active Sessions</h3>
                    <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '0', color: '#1a1a2e' }}>
                        567
                    </p>
                </div>

                {/* Card 3 */}
                <div style={{
                    background: 'white',
                    padding: '24px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{ margin: '0 0 8px 0', color: '#667eea' }}>Revenue</h3>
                    <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '0', color: '#1a1a2e' }}>
                        $89,500
                    </p>
                </div>
            </div>
        </div>
    )
}