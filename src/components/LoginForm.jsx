import logoOrgaapp from "../assets/images/logofull.png";
import "../layouts/_loginform.scss";

const LoginForm = () => {
  return (
    <div id="loginContainer">
      <div id="imgLoginContainer">
        <img src={logoOrgaapp} alt="logoOrgaapp" />
      </div>
      <div id="loginFormContainer">
        <form action="">
          <label>Login</label>
          <input type="mail" />
          <label>Mot de passe</label>
          <input type="text" />
          <button>Envoyer</button>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
