import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
    //   const response = await axios.get('/api/user/1'); // Simulate getting the current logged-in user
    //   setUser(response.data);
    const simulatedResponse = { id: '1', name: 'User', role: 'teacher', class:[2, 3]};
    // const simulatedResponse = { id: '1', name: 'Admin User', role: 'admin' };
    // const simulatedResponse = { id: '1', name: 'Student', role: 'student' };
      setUser(simulatedResponse);
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
