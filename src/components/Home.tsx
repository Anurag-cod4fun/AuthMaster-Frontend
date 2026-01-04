import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="btn-close"></span>
            <span className="btn-minimize"></span>
            <span className="btn-maximize"></span>
          </div>
          <div className="terminal-title">challenge@master-auth:~$</div>
        </div>
        
        <div className="terminal-body">
          <pre className="ascii-art">
{`
███╗   ███╗ █████╗ ███████╗████████╗███████╗██████╗      █████╗ ██╗   ██╗████████╗██╗  ██╗
████╗ ████║██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗    ██╔══██╗██║   ██║╚══██╔══╝██║  ██║
██╔████╔██║███████║███████╗   ██║   █████╗  ██████╔╝    ███████║██║   ██║   ██║   ███████║
██║╚██╔╝██║██╔══██║╚════██║   ██║   ██╔══╝  ██╔══██╗    ██╔══██║██║   ██║   ██║   ██╔══██║
██║ ╚═╝ ██║██║  ██║███████║   ██║   ███████╗██║  ██║    ██║  ██║╚██████╔╝   ██║   ██║  ██║
╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝    ╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝
`}
          </pre>

          <div className="challenge-info">
            <h1 className="glitch" data-text="PENETRATION TESTING CHALLENGE">
              PENETRATION TESTING CHALLENGE
            </h1>
            
            <div className="section">
              <h2>[!] MISSION BRIEFING</h2>
              <p>
                A company has deployed a new authentication system and hired you to test its security.
                Your mission is to identify and exploit vulnerabilities in their authentication backend.
              </p>
            </div>

            <div className="section">
              <h2>[*] OBJECTIVES</h2>
              <ul className="objectives-list">
                <li><span className="check">[ ]</span> Register a new account</li>
                <li><span className="check">[ ]</span> Successfully authenticate and access the dashboard</li>
                <li><span className="check">[ ]</span> Analyze JWT tokens for weaknesses</li>
                <li><span className="check">[ ]</span> Test for SQL injection vulnerabilities</li>
                <li><span className="check">[ ]</span> Attempt privilege escalation</li>
                <li><span className="check">[ ]</span> Bypass authentication mechanisms</li>
                <li><span className="check">[ ]</span> Access unauthorized resources</li>
              </ul>
            </div>

            <div className="section">
              <h2>[+] TOOLS AT YOUR DISPOSAL</h2>
              <ul className="tools-list">
                <li>🔧 Browser Developer Tools (Network tab is your friend)</li>
                <li>🔧 Burp Suite / OWASP ZAP (for request interception)</li>
                <li>🔧 JWT.io (for token analysis)</li>
                <li>🔧 SQLMap (for automated SQL injection testing)</li>
                <li>🔧 Your creativity and hacking skills</li>
              </ul>
            </div>

            <div className="section">
              <h2>[!] RULES OF ENGAGEMENT</h2>
              <ul className="rules-list">
                <li>⚠️ This is a controlled environment for educational purposes</li>
                <li>⚠️ Document all vulnerabilities you discover</li>
                <li>⚠️ Test systematically and thoroughly</li>
                <li>⚠️ Think like an attacker, act like a professional</li>
              </ul>
            </div>

            <div className="section hints">
              <h2>[?] HINTS</h2>
              <details>
                <summary>Click to reveal hints (no cheating!)</summary>
                <ul>
                  <li>💡 Always check what data is being sent in requests</li>
                  <li>💡 JWT tokens can reveal interesting information when decoded</li>
                  <li>💡 Try special characters in input fields</li>
                  <li>💡 Weak secret keys make tokens vulnerable</li>
                  <li>💡 Sometimes the backend trusts the client too much</li>
                </ul>
              </details>
            </div>

            <div className="action-buttons">
              <Link to="/register" className="btn-hack">
                <span className="btn-icon">▶</span> START CHALLENGE
              </Link>
              <Link to="/login" className="btn-hack-secondary">
                <span className="btn-icon">⚡</span> ALREADY REGISTERED? LOGIN
              </Link>
            </div>

            <div className="footer-info">
              <p className="blink">► API Endpoint: Configure in src/services/api.ts</p>
              <p>► Good luck, hacker. You'll need it.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
