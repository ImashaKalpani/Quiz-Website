import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the User interface to match what your backend returns on successful login/registration
interface User {
  id: string;
  username: string; // The backend returns this
  email: string;    // The backend returns this
  name?: string;    // Optional, if you add a 'name' field to your User model later
}

interface AuthContextType {
  user: User | null;
  // Change login to accept email and password, and return a Promise<boolean>
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to load user from localStorage on initial load
  const [user, setUser] = useState<User | null>(() => {
    try {
      const storedUser = localStorage.getItem('smartmind_user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
      return null;
    }
  });

  // Base URL for your Spring Boot backend (ensure this matches your backend's URL)
  // Double-check this port! It should be the same as your Spring Boot's server.port
  const API_BASE_URL = 'http://localhost:8080/api';

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('smartmind_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('smartmind_user');
    }
  }, [user]);

  // CORRECTED login function to interact with the backend
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) { // Check if the HTTP status code is 2xx (success)
        const userData: User = await response.json();
        setUser(userData); // Set the user in context
        return true; // Login successful
      } else {
        // Handle specific errors from the backend if possible
        const errorData = await response.json(); // Backend might send { message: "Invalid credentials." }
        console.error('Login failed:', errorData.message || 'Unknown error');
        return false; // Login failed (e.g., invalid credentials)
      }
    } catch (error) {
      console.error('Network error during login:', error);
      // This catch block handles network issues (e.g., backend not running, CORS)
      return false; // Network or other error occurred
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};