export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  age: number;
}

// Function to save a user to local storage
export function saveUserToLocalStorage(user: User): void {
  localStorage.setItem("user", JSON.stringify(user));
}

// Function to get the user from local storage
export function getUserFromLocalStorage(): User | null {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
}

// Function to register a new user
export function registerUser(user: User): boolean {
  const existingUser = getUserFromLocalStorage();

  // Check if a user with the same username already exists
  if (existingUser && existingUser.email === user.email) {
    return false; // Username already exists
  }

  // Generate a unique ID (you can use a more robust method)
  const id = Date.now(); // Use a timestamp as a simple ID

  // Set the ID and save the user to local storage
  user.id = id;
  saveUserToLocalStorage(user);

  return true; // Registration successful
}

// Function to log in a user
export function loginUser(email: string, password: string): boolean {
  const user = getUserFromLocalStorage();

  if (user && user.email === email && user.password === password) {
    // Set the user's ID in local storage to indicate that they are logged in
    localStorage.setItem("loggedInUserId", String(user.id));
    return true; // Login successful
  }

  return false; // Login failed
}

// Function to check if a user is logged in
export function isLoggedIn(): boolean {
  return localStorage.getItem("loggedInUserId") !== null;
}

// Function to log out the current user
export function logoutUser(): void {
  localStorage.removeItem("loggedInUserId");
}

// Function to get the currently logged-in user
export function getLoggedInUser(): User | null {
  const loggedInUserId = localStorage.getItem("loggedInUserId");
  if (loggedInUserId) {
    return getUserFromLocalStorage();
  }
  return null;
}
