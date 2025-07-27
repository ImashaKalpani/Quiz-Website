// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the User interface to match what your backend returns on successful login/registration
// Ensure these fields (id, username, email) exactly match the keys in the JSON returned by your backend.
interface User {
  id: string;
  username: string;
  email: string;
  // Add other user properties like name if applicable and returned by backend
  // name?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State to hold the current user.
  // It attempts to load user data from localStorage on initial load.
  const [user, setUser] = useState<User | null>(() => {
    try {
      const storedUser = localStorage.getItem('smartmind_user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      // Log error if parsing fails (e.g., corrupted localStorage data)
      console.error("AuthContext: Failed to parse user from localStorage:", error);
      return null; // Return null if parsing fails
    }
  });

  // Base URL for your Spring Boot backend API.
  // IMPORTANT: Ensure this matches the port your Spring Boot application is running on.
  const API_BASE_URL = 'http://localhost:8080/api';

  // Effect to save/remove user data from localStorage whenever the 'user' state changes.
  useEffect(() => {
    if (user) {
      // If user is logged in, save their data to localStorage
      localStorage.setItem('smartmind_user', JSON.stringify(user));
    } else {
      // If user logs out (user becomes null), remove data from localStorage
      localStorage.removeItem('smartmind_user');
    }
  }, [user]); // Dependency array: this effect runs whenever 'user' state changes

  /**
   * Handles user login by sending credentials to the backend.
   * @param email The user's email.
   * @param password The user's password.
   * @returns A Promise that resolves to true if login is successful, false otherwise.
   */
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Send a POST request to the backend's login endpoint
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Indicate that the body is JSON
        },
        body: JSON.stringify({ email, password }), // Send email and password as JSON
      });

      // Check if the HTTP response status is OK (2xx success range)
      if (response.ok) {
        const userData: User = await response.json(); // Parse the JSON response into a User object
        setUser(userData); // Update the user state in the context
        console.log("AuthContext: User successfully logged in and state updated:", userData);
        return true; // Indicate successful login
      } else {
        // If response is not OK, parse error message from backend
        const errorData = await response.json();
        console.error('AuthContext: Login failed (backend response):', errorData.message || 'Unknown error');
        return false; // Indicate failed login
      }
    } catch (error) {
      // Catch network errors (e.g., backend not running, CORS issues before response)
      console.error('AuthContext: Network error during login:', error);
      return false; // Indicate network error
    }
  };

  /**
   * Handles user logout by clearing the user state.
   */
  const logout = () => {
    setUser(null); // Clear the user state
    console.log("AuthContext: User logged out.");
  };

  // Provide the user state and login/logout functions to consuming components
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily access AuthContext values in components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    // Throw an error if useAuth is called outside of an AuthProvider
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};