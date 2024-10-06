// src/UserProfile.js
import React, { useEffect, useState } from 'react';

function UserProfile() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div>Loading user profile</div>;
  }

  return <div>User Profile Loaded!</div>;
}

export default UserProfile;
