// Configure your backend API URL here
const API_BASE_URL = 'https://devendpoint.guru/api';

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface AuthResponse {
  accessToken?: string;
  username?: string;
  message?: string;
}

export const authService = {
  async register(data: RegisterData): Promise<AuthResponse> {
    try {
      console.log('Registering user:', data);
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies
        body: JSON.stringify(data),
      });
      
      console.log('Register response status:', response.status);
      
      if (!response.ok) {
        try {
          const errorText = await response.text();
          console.error('Register error response:', errorText);
          throw new Error(errorText || 'Registration failed');
        } catch (e) {
          throw new Error(`Registration failed with status ${response.status}`);
        }
      }
      
      // Backend returns plain text "Registered: username"
      const text = await response.text();
      console.log('Register success:', text);
      return { message: text, username: data.username };
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
  },

  async login(data: LoginData): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include cookies for refresh token
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      try {
        const error = await response.json();
        throw new Error(error.message || 'Login failed');
      } catch {
        throw new Error('Login failed');
      }
    }
    
    return response.json();
  },

  async getDashboardData(token: string): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/dashboard`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include cookies
    });
    
    if (!response.ok) {
      try {
        const error = await response.json();
        throw new Error(error.message || 'Failed to fetch dashboard data');
      } catch {
        throw new Error('Failed to fetch dashboard data');
      }
    }
    
    return response.json();
  },

  async refreshToken(): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: 'POST',
      credentials: 'include', // Required for refresh token cookie
    });
    
    if (!response.ok) {
      throw new Error('Token refresh failed');
    }
    
    return response.json();
  },

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getToken(): string | null {
    return localStorage.getItem('token');
  },

  saveToken(token: string) {
    localStorage.setItem('token', token);
  },

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
};
