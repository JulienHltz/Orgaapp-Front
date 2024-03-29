import LoginForm from "../components/LoginForm";
import Home from "../pages/Home";
import User from "../pages/User";
import NewUser from "../components/NewUser";

const Main = ({ component }) => {
  return (
    <main>
      {component === "login" && <LoginForm />}
      {component === "home" && <Home />}
      {component === "user" && <User />}
      {component === "newuser" && <NewUser />}
    </main>
  );
};

export default Main;
