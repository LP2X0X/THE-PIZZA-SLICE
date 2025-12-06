import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import { getUserName } from "../features/user/userSlice";
import { useNavigate } from "react-router";

function Home() {
  const userName = useSelector(getUserName);
  const navigate = useNavigate();

  return (
    <article>
      <h1>
        The best pizza.
        <br />
        <span>Straight out of the oven, straight to you.</span>
      </h1>
      {userName ? (
        <button onClick={() => navigate("/menu")}>
          Continue ordering, {userName}
        </button>
      ) : (
        <CreateUser />
      )}
    </article>
  );
}

export default Home;
