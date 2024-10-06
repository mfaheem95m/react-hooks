// src/App.js
import React, { Suspense } from 'react';
const UserProfile = React.lazy(() => import('./UserProfile'));

function User() {
  return (
    <div>
      <h1>User Profiles</h1>
      <Suspense fallback={<div>Loading user profile...</div>}>
        <UserProfile />
      </Suspense>
    </div>
  );
}

export default User;
