import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            tff <span>ras</span> app
          </h1>
          <p>
            I'm baby tumeric swag cred post-ironic intelligentsia 3 wolf moon,
            tofu art party shoreditch ascot affogato glossier taiyaki.
            Farm-to-table slow-carb bespoke, food truck enamel pin tacos iPhone
            tbh blue bottle DIY tumeric green juice letterpress.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
