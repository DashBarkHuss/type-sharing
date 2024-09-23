import React, { useState, useEffect } from 'react';
import { User } from '@myproject/shared';

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Simulating an API call
    const fetchUser = async () => {
      // In a real app, this would be an actual API call
      const mockUser: User = {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com'
      };
      setUser(mockUser);
    };

    fetchUser();
  }, []);

  return (
    <div className="App">
      <h1>User Information</h1>
      {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
}

export default App;