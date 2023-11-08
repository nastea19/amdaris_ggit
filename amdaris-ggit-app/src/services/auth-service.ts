export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  age: number;
}

const USERS_STORAGE_KEY = "users"; // Define a storage key for your users data

// Function to get the list of users from local storage
export function getUsersFromLocalStorage(): User[] {
  const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
  return storedUsers ? JSON.parse(storedUsers) : [];
}

// Function to save the list of users to local storage
export function saveUsersToLocalStorage(users: User[]): void {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
}

// Function to register a new user
export function registerUser(user: User): boolean {
  const users = getUsersFromLocalStorage();

  // Check if a user with the same email already exists
  if (users.some((u) => u.email === user.email)) {
    return false; // Email already exists
  }

  // Generate a unique ID (you can use a more robust method)
  const id = users.length + 1;

  // Set the ID and save the user to the list of users
  user.id = id;
  users.push(user);

  // Save the updated users list in local storage
  saveUsersToLocalStorage(users);

  return true; // Registration successful
}

// Function to log in a user
export function loginUser(email: string, password: string): boolean {
  const users = getUsersFromLocalStorage();
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
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
  window.location.reload();
}

// Function to get the currently logged-in user (if any)
export function getLoggedInUser(): User | null {
  const loggedInUserId = localStorage.getItem("loggedInUserId");
  if (loggedInUserId) {
    const userId = parseInt(loggedInUserId, 10);
    const users = getUsersFromLocalStorage();
    return users.find((user) => user.id === userId) || null;
  }
  return null;
}
