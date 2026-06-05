type User = {
  id: number;
  email: string;
  password: string;
};

export const users: User[] = [];

export function createUser(user: Omit<User, "id">): User {
  const newUser: User = { ...user, id: users.length + 1 };
  users.push(newUser);
  return newUser;
}

export function findUserByUsername(username: string): User | undefined {
  return users.find((u) => u.email === username);
}

export function getAllUsers(): User[] {
  return users;
}