import { useSelector } from 'react-redux';
import { getUserName } from '../features/user/userSlice';
import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';

function ProtectedRoute() {
  const user = useSelector(getUserName);
  const navigate = useNavigate();

  // User can still search for order ID from home without userName since after mount, nothing change
  useEffect(
    function () {
      if (!user) {
        navigate('/');
      }
    },
    [user, navigate]
  );

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProtectedRoute;
