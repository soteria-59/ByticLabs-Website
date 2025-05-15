// Define global types or interfaces for the ByticLabs-Website project here

// Example: Interface for a generic API response
export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}

// Example: Type for a user object
export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'user' | 'guest';
}

// Add more types or interfaces as needed for your project