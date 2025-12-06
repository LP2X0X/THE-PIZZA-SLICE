import { Link, useNavigate } from "react-router";

function LinkButton() {
  const navigate = useNavigate();
  return <Link to={() => navigate(-1)}></Link>;
}

export default LinkButton;
