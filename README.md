# 🔐 Master Auth Frontend - Penetration Testing Challenge

A **hacker-themed, interactive penetration testing platform** designed to test authentication vulnerabilities. Built with **React**, **TypeScript**, and **Vite**, this frontend provides a comprehensive interface for security researchers to identify and exploit authentication weaknesses in backend systems.

**🔴 Live Demo:** [https://devendpoint.guru/](https://devendpoint.guru/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Challenge Objectives](#challenge-objectives)
- [API Requirements](#api-requirements)
- [Testing Vulnerabilities](#testing-vulnerabilities)
- [Security Notes](#security-notes)

---

## 🎯 Overview

Master Auth is an **intentionally vulnerable** authentication frontend built to simulate real-world security testing scenarios. It connects to an authentication backend and provides tools to:

- Register and manage test accounts
- Analyze JWT tokens and authentication mechanisms
- Test for common vulnerabilities (SQL injection, privilege escalation, token manipulation)
- Inspect API requests and responses in real-time
- Bypass authentication mechanisms

This platform is designed for **security professionals, students, and developers** learning about application security and penetration testing.

---

## ✨ Features

### 🎨 User Interface
- **Terminal-style Hacker Theme** - ASCII art, glitch effects, and cyberpunk aesthetics
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Smooth Navigation** - React Router for seamless page transitions
- **Real-time Feedback** - Immediate visual feedback for all actions

### 🔐 Authentication Features
- **User Registration** - Create test accounts with custom credentials
- **JWT-based Login** - Secure token-based authentication
- **Dashboard Analytics** - View tokens, user data, and API responses
- **Token Transparency** - All authentication tokens visible for analysis
- **Session Management** - Automatic token refresh and validation

### 🛠️ Developer Tools
- **Network Inspector** - Easy access to API requests and responses
- **Console Logging** - Detailed logs for debugging
- **Token Decoder** - Analyze JWT structure and claims
- **Error Display** - Clear error messages for troubleshooting

---

## 📸 Screenshots

### Home Page - Challenge Briefing
![Master Auth Home Page](./public/screenshots/home-page.png)
*Terminal-style home page with mission briefing and challenge objectives*

### Registration Page
![Registration Form](./public/screenshots/register-page.png)
*Create new test accounts with custom credentials*

### Login Page
![Login Portal](./public/screenshots/login-page.png)
*Secure login interface with JWT token authentication*

### Dashboard - Token Analysis
![Dashboard](./public/screenshots/dashboard.png)
*View authentication tokens, user data, and API responses*

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.2.0 | UI framework |
| **TypeScript** | 5.9.3 | Type-safe JavaScript |
| **Vite** | 7.2.4 | Build tool & dev server |
| **React Router** | 7.11.0 | Client-side routing |
| **ESLint** | 9.39.1 | Code quality |

---

## 📦 Installation

### Prerequisites
- **Node.js** 16+ and **npm** 7+
- A running authentication backend API

### Step-by-Step Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/master-auth.git
cd master-auth
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure your backend API URL:**
   - Edit `src/services/api.ts`
   - Update the `API_BASE_URL` constant:
   ```typescript
   const API_BASE_URL = 'https://your-backend-url/api';
   ```

4. **Start the development server:**
```bash
npm run dev
```

5. **Open in browser:**
   - Navigate to `http://localhost:5173` (or the URL shown in terminal)

---

## ⚙️ Configuration

### Environment Setup

The application uses environment-based configuration. Update `src/services/api.ts` to configure:

```typescript
// API Base URL - Change this to your backend
const API_BASE_URL = 'https://devendpoint.guru/api'; // Live endpoint

// Token storage key
const TOKEN_KEY = 'auth_token';

// API timeout (ms)
const API_TIMEOUT = 10000;
```

### Customization

**Change Terminal Title:**
Edit `src/components/Home.tsx` to customize the terminal window appearance.

**Modify Theme:**
Update CSS variables in:
- `src/App.css` - Global styles
- `src/components/*.css` - Component-specific styles

---

## 🚀 Usage

### Running the Application

**Development Mode:**
```bash
npm run dev
```
- Hot Module Replacement (HMR) enabled
- Detailed error messages in console

**Production Build:**
```bash
npm run build
```
- Optimized bundle in `dist/` directory

**Preview Production Build:**
```bash
npm run preview
```

**Lint Code:**
```bash
npm run lint
```

---

## 🎯 Challenge Objectives

Your penetration testing mission includes:

- [ ] **Register Account** - Create a user account successfully
- [ ] **Authentication** - Log in and access the dashboard
- [ ] **Token Analysis** - Decode and analyze JWT tokens for weaknesses
- [ ] **SQL Injection** - Test database input validation
- [ ] **Privilege Escalation** - Attempt to gain unauthorized access levels
- [ ] **Authentication Bypass** - Find ways to bypass security mechanisms
- [ ] **Unauthorized Access** - Access restricted resources
- [ ] **Token Manipulation** - Modify tokens to gain unauthorized access
- [ ] **Session Hijacking** - Test session management robustness
- [ ] **Vulnerability Documentation** - Document findings with proof-of-concept

---

## 📡 API Requirements

Your backend must implement these endpoints:

### POST `/api/auth/register`
Register a new user account.

**Request:**
```json
{
  "username": "string (required)",
  "email": "string (required, valid email)",
  "password": "string (required, min 6 chars)"
}
```

**Response (Success):**
```json
{
  "status": "success",
  "message": "Account created successfully",
  "token": "string (optional JWT)",
  "user": {
    "id": "string",
    "username": "string",
    "email": "string"
  }
}
```

**Response (Error):**
```json
{
  "status": "error",
  "message": "Error description"
}
```

---

### POST `/api/auth/login`
Authenticate user and return JWT token.

**Request:**
```json
{
  "username": "string (or email)",
  "password": "string"
}
```

**Response (Success):**
```json
{
  "status": "success",
  "accessToken": "string (JWT token)",
  "refreshToken": "string (optional)",
  "username": "string",
  "expiresIn": 3600
}
```

**Response (Error):**
```json
{
  "status": "error",
  "message": "Invalid credentials"
}
```

---

### GET `/api/dashboard`
Get dashboard data for authenticated user.

**Headers:**
```
Authorization: Bearer <accessToken>
Content-Type: application/json
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "user": {
      "id": "string",
      "username": "string",
      "email": "string",
      "role": "string",
      "createdAt": "ISO 8601 date"
    },
    "stats": {
      "loginCount": "number",
      "lastLogin": "ISO 8601 date"
    }
  }
}
```

---

### POST `/api/auth/refresh`
Refresh expired JWT token.

**Headers:**
```
Authorization: Bearer <refreshToken>
```

**Response:**
```json
{
  "status": "success",
  "accessToken": "string (new JWT token)",
  "expiresIn": 3600
}
```

---

### POST `/api/auth/logout`
Invalidate user session.

**Headers:**
```
Authorization: Bearer <accessToken>
```

**Response:**
```json
{
  "status": "success",
  "message": "Logged out successfully"
}
```

---

## 🔍 Testing Vulnerabilities

### JWT Token Analysis
1. Copy the token from Dashboard
2. Visit [jwt.io](https://jwt.io) or use browser DevTools
3. Analyze the payload structure
4. Look for:
   - Weak signing algorithms
   - Sensitive data in payload
   - No expiration or very long TTL

### SQL Injection Testing
1. Use special characters in login/register: `' OR '1'='1`
2. Try SQL comments: `admin'--`
3. Attempt stacked queries

### Privilege Escalation
1. Try modifying JWT claims manually
2. Attempt to change `role` field
3. Test access to admin endpoints
4. Try changing `userId` in token

### Authentication Bypass
1. Try accessing `/dashboard` without token
2. Test with expired tokens
3. Try empty or malformed tokens
4. Test CORS vulnerabilities

### Common Payloads to Test

**Login Form:**
```
Username: admin' OR '1'='1'--
Password: anything
```

**Registration:**
```
Email: admin@test.com' OR '1'='1'--
Username: ../../../admin
Password: 123456
```

---

## 🔒 Security Notes

### ⚠️ Important Disclaimer

**This application is intentionally vulnerable for educational purposes.**

- ✅ Use only in **authorized testing environments**
- ✅ **Never** use on production systems without permission
- ✅ **Always** follow responsible disclosure practices
- ✅ Get **written authorization** before testing
- ❌ Unauthorized access to computer systems is **illegal**

### Best Practices

1. **Test in Isolated Environment** - Use local deployments
2. **Use Test Accounts** - Never test with real user data
3. **Document Findings** - Keep detailed records
4. **Follow Scope** - Only test authorized endpoints
5. **Report Responsibly** - Use proper disclosure channels

---

## 📁 Project Structure

```
master-auth/
├── src/
│   ├── components/
│   │   ├── Home.tsx              # Challenge briefing page
│   │   ├── Login.tsx             # Login form
│   │   ├── Register.tsx          # Registration form
│   │   ├── Dashboard.tsx         # Token & data dashboard
│   │   ├── Auth.css              # Auth pages styling
│   │   ├── Home.css              # Home page styling
│   │   └── Dashboard.css         # Dashboard styling
│   ├── services/
│   │   └── api.ts                # API client & auth service
│   ├── App.tsx                   # Main app component
│   ├── App.css                   # Global styles
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Base styles
├── public/
│   └── screenshots/              # UI screenshots
├── vite.config.ts                # Vite configuration
├── tsconfig.json                 # TypeScript config
├── package.json                  # Dependencies
└── README.md                      # This file
```

---

## 🐛 Troubleshooting

### "Cannot reach backend API"
- Verify backend is running
- Check `API_BASE_URL` in `src/services/api.ts`
- Ensure CORS is configured on backend
- Check browser console for error messages

### "Token is undefined"
- Verify login endpoint returns `accessToken` field
- Check localStorage in DevTools
- Ensure token is being saved correctly

### "Page not loading"
- Clear browser cache: `Ctrl+Shift+Delete`
- Check browser console for errors
- Verify Node.js version: `node --version` (should be 16+)
- Reinstall dependencies: `npm install`

### "Port already in use"
```bash
# Use alternate port
npm run dev -- --port 5174
```

---

## 📞 Support & Resources

- **Live Deployment:** [https://devendpoint.guru/](https://devendpoint.guru/)
- **Documentation:** See [AUTH_FRONTEND_README.md](./AUTH_FRONTEND_README.md)
- **Report Issues:** Contact your system administrator
- **Security Issues:** Report via responsible disclosure

---

## 📝 License

This project is provided for **educational and authorized testing purposes only**.

---

## 🙏 Acknowledgments

Built with modern web technologies to provide a realistic security testing experience for learning authentication vulnerabilities and penetration testing techniques.

---

**Last Updated:** January 2026  
**Version:** 1.0.0
