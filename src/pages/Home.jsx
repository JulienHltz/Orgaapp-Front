import logoOrgaapp from "../assets/images/logofull2.png";
import "./_home.scss";

const Home = () => {
    return (
        <div id="homeContainer">
            <div className="imgLoginContainer">
            <img src={logoOrgaapp} alt="logoOrgaapp" />
            </div>
            <h1 id="accueil">Bienvenue</h1>
        </div>
    );
};

export default Home;