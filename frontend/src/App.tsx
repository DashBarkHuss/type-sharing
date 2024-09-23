import React, { useState, useEffect } from 'react';
import { User } from '@myproject/shared';

function App() {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    // Simulating an API call
    const fetchUser = async () => {
      // call backend api
      const response = await fetch('http://localhost:5000/users');
      const data = await response.json();
      console.log("data: ", data);
      setUsers(data);
    };

    fetchUser();
  }, []);

  return (
    <div className="App">
      <h1>User Information</h1>
      {users ? 
        Array.isArray(users) ? users.map((user: User) => (
          <div key={user.id}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ))
       : (
        <p>Loading user information...</p>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}

export default App;