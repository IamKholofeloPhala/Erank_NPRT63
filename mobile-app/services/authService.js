import { saveToken, removeToken } from '../utils/storage';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function login(email, password) {
  await delay(1500);

  if (!email || !password) {
    throw new Error('Email and password are required.');
  }

  let role = 'passenger';

  const value = email.toLowerCase();

  if (value.includes('marshal')) role = 'marshal';
  else if (value.includes('owner')) role = 'owner';
  else if (value.includes('admin')) role = 'admin';

  const token = 'ERANK_DEMO_TOKEN';

  await saveToken(token);

  return {
    token,
    user: {
      id: 1,
      email,
      role,
      fullName: 'Demo User',
    },
  };
}

export async function logout() {
  await removeToken();
}