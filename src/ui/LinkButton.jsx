import { Link, useNavigate } from 'react-router';

function LinkButton({ to, children }) {
  const navigate = useNavigate();
  return <Link to={to}>{children}</Link>;
}

export default LinkButton;
