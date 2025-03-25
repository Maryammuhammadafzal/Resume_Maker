import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userData = params.get('user');

    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [location]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-green-100">
      {user ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Welcome {user.firstName} {user.lastName}</h2>
          <p className="text-lg mb-2">Email: {user.email}</p>
          <p className="text-gray-600">LinkedIn ID: {user.id}</p>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Success;
