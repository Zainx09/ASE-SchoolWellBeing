 
import axios from 'axios';

axios.defaults.baseURL = '/mock';

axios.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

// Mock Data
const users = [
  { id: '1', name: 'Admin User', role: 'admin' },
  { id: '2', name: 'Student User', role: 'student' },
];

const studentData = [
  { id: '1', date: '2024-07-01', mood: 3, stress: 2, userId: '2' },
  { id: '2', date: '2024-07-02', mood: 4, stress: 3, userId: '2' },
  // more data
];

const adminData = [
  { date: '2024-07-01', mood: 3.5, stress: 2.5 },
  { date: '2024-07-02', mood: 4, stress: 3 },
  // more data
];

axios.get = (url) => {
  if (url === '/api/studentData') {
    return Promise.resolve({ data: studentData });
  } else if (url === '/api/adminData') {
    return Promise.resolve({ data: adminData });
  } else if (url === '/api/users') {
    return Promise.resolve({ data: users });
  } else if (url.startsWith('/api/user/')) {
    const userId = url.split('/').pop();
    const user = users.find(user => user.id === userId);
    return user ? Promise.resolve({ data: user }) : Promise.reject({ error: 'User not found' });
  }
  return Promise.reject({ error: 'Unknown URL' });
};
