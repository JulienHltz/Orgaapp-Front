import LoginForm from "../components/LoginForm";
import Home from "../pages/Home";

const Main = ({component}) => {
    return (
        <main>
            {component === "login" && <LoginForm />}
            {component === "home" && <Home />}
        </main>
    );
};

export default Main;