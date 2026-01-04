import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/api';
import './Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const token = authService.getToken();

  useEffect(() => {
    if (!authService.isAuthenticated()) {
      navigate('/login');
      return;
    }

    loadDashboardData();
  }, [navigate]);

  const loadDashboardData = async () => {
    try {
      const token = authService.getToken();
      if (token) {
        const data = await authService.getDashboardData(token);
        setDashboardData(data);
        setError('');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load dashboard');
    } finally {
      setLoading(false);
    }
  };

  const handleRefreshToken = async () => {
    setRefreshing(true);
    try {
      const response = await authService.refreshToken();
      if (response.accessToken) {
        authService.saveToken(response.accessToken);
        if (response.username) {
          localStorage.setItem('user', JSON.stringify({ username: response.username }));
        }
        setError('');
        alert('Token refreshed successfully!');
        // Reload dashboard with new token
        await loadDashboardData();
      }
    } catch (err: any) {
      setError('Token refresh failed: ' + (err.message || 'Unknown error'));
    } finally {
      setRefreshing(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Token copied to clipboard!');
  };

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Access Granted</h1>
        <button onClick={handleLogout} className="btn-logout">
          ⚠ Logout
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="dashboard-content">
        <div className="info-card">
          <h2>[✓] Authentication Status</h2>
          <p className="status-success">✓ AUTHENTICATED - Access Level: User</p>
          <div className="token-info">
            <h3>► JWT Token:</h3>
            <div style={{position: 'relative'}}>
              <code className="token-display" style={{display: 'block', wordBreak: 'break-all', whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
                {token}
              </code>
              <button 
                onClick={() => token && copyToClipboard(token)} 
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  padding: '5px 12px',
                  background: '#ff00de',
                  color: '#0a0e27',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  zIndex: 10
                }}
              >
                COPY
              </button>
            </div>
            <p style={{color: '#a8b2d1', fontSize: '12px', marginTop: '35px', fontFamily: 'Courier New, monospace'}}>💡 Try decoding this at jwt.io</p>
            <p style={{color: '#00ffff', fontSize: '12px', marginTop: '8px', fontFamily: 'Courier New, monospace'}}>► Header.Payload.Signature format</p>
          </div>
        </div>

        {dashboardData && (
          <div className="info-card">
            <h2>[*] Server Response</h2>
            <pre className="data-display">
              {JSON.stringify(dashboardData, null, 2)}
            </pre>
          </div>
        )}

        <div className="info-card">
          <h2>[+] User Profile</h2>
          <pre className="data-display">
            {localStorage.getItem('user') 
              ? JSON.stringify(JSON.parse(localStorage.getItem('user')!), null, 2)
              : 'No user data available'}
          </pre>
        </div>

        <div className="info-card testing-section">
          <h2>[!] Penetration Testing Zone</h2>
          <p>► Objective: Find vulnerabilities in the authentication system</p>
          <p>► What to test:</p>
          <ul style={{color: '#a8b2d1', marginLeft: '20px', marginTop: '10px'}}>
            <li>JWT secret strength</li>
            <li>Token expiration enforcement</li>
            <li>SQL injection in API endpoints</li>
            <li>Authorization bypass attempts</li>
            <li>Session management flaws</li>
          </ul>
          <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
            <button onClick={loadDashboardData} className="btn-secondary">
              ⟳ Refresh Dashboard Data
            </button>
            <button onClick={handleRefreshToken} className="btn-secondary" disabled={refreshing}>
              {refreshing ? '⌛ Refreshing...' : '🔄 Refresh Access Token'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
