import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Wrapper from "../../assets/wrappers/VerifyPage";
import Loading from "../../components/Loading";
import { useAppContext } from "../../context/appContext";

const Verify = () => {
  const { emailToken } = useParams();
  const { user, isVerifying, verifyUser, verified } = useAppContext();
  const navigate = useNavigate();
  verifyUser(emailToken);
  if (isVerifying) {
    return <Loading center />;
  }
  useEffect(() => {
    if (user.isVerified) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user.isVerified, navigate]);
  return (
    <Wrapper className="full-page">
      <div>
        <h3>Verify page</h3>
      </div>
    </Wrapper>
  );
};

export default Verify;
