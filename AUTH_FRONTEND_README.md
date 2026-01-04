# Master Auth - Penetration Testing Challenge

A hacker-themed frontend application designed as a penetration testing challenge for authentication backend systems. Test your skills at breaking authentication!

## 🎯 Challenge Overview

This is an intentionally vulnerable frontend that connects to your authentication backend. Your mission: Find and exploit vulnerabilities in the authentication system.

## 🚀 Quick Start

1. Install dependencies:
```bash
npm install
```

2. Configure your backend API URL:
   - Open `src/services/api.ts`
   - Change `API_BASE_URL` to your backend URL (default: `http://localhost:3000/api`)

3. Run the development server:
```bash
npm run dev
```

## 🎯 Challenge Objectives

- [ ] Register a new account
- [ ] Successfully authenticate and access the dashboard
- [ ] Analyze JWT tokens for weaknesses
- [ ] Test for SQL injection vulnerabilities
- [ ] Attempt privilege escalation
- [ ] Bypass authentication mechanisms
- [ ] Access unauthorized resources

## 💻 Features

- **Hacker-themed UI** with terminal aesthetics
- **Challenge Home Page** with mission briefing and objectives
- **Registration System** for creating test accounts
- **Login Portal** with JWT-based authentication
- **Dashboard** displaying tokens, user data, and API responses
- **Transparent Security** - All tokens and data visible for analysis
- **Developer Tools Friendly** - Easy to inspect and intercept requests

## Backend API Requirements

Your backend should expose these endpoints:

### POST `/api/auth/register`
**Request Body:**
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "token": "string (optional)",
  "user": "object (optional)",
  "message": "string (optional)"
}
```

### POST `/api/auth/login`
**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "token": "string",
  "user": "object (optional)"
}
```

### GET `/api/dashboard`
**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  // Any data you want to display on the dashboard
}
```

## 🔐 Testing Penetration

This frontend is designed to help test authentication vulnerabilities:

- ✅ All network requests visible in browser DevTools
- ✅ JWT tokens displayed in plaintext (decode at jwt.io)
- ✅ Token storage in localStorage (easily inspectable)
- ✅ Raw API responses shown on dashboard
- ✅ No CSRF protection (intentional)
- ✅ No rate limiting on client side
- ✅📍 Routes

- `/` - Challenge home page with mission briefing
- `/login` - Authentication portal
- `/register` - Account creation
- `/dashboard` - Protected dashboard (requires valid JWT)

## 🎨 Theme

Built with a cyberpunk/hacker aesthetic featuring:
- Terminal-style interface
- Matrix-inspired green color scheme
- ASCII art headers
- Glitch effects
- Monospace fonts throughoutcation
- *⚠️ Disclaimer

This is a **PENETRATION TESTING TOOL** designed for educational purposes and authorized security testing only. 

- Intentionally lacks production security features
- Designed to expose vulnerabilities for testing
- Use only against systems you own or have permission to test
- Not for production use

## 📝 *JWT.io** - Token decoding and analysis
- **SQLMap** - Automated SQL injection testing
- **Postman / cURL** - Manual API testing
- **Hashcat** - JWT secret cracking (if applicable)
## 📝 Notes

- Perfect for bug bounty practice environments
- Ideal for security training and CTF-style challenges
- Great for demonstrating common auth vulnerabilities
- Helps security teams test their backend defenses

**Happy Hacking! 🎯**
## Routes

- `/` - Redirects to login
- `/login` - Login page
- `/register` - Registration page
- `/dashboard` - Protected dashboard (requires authentication)

## Development

Built with:
- React 19
- TypeScript
- Vite
- React Router

## Notes

This is a **testing tool** for penetration testing challenges. It intentionally lacks production security features to allow for easier vulnerability testing.
