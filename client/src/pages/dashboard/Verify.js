import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Wrapper from "../../assets/wrappers/VerifyPage";
import { Alert } from "../../components";
import Loading from "../../components/Loading";
import { useAppContext } from "../../context/appContext";

const Verify = () => {
  const { emailToken } = useParams();
  const { user, isVerifying, verifyUser, verified, showAlert } =
    useAppContext();
  const navigate = useNavigate();
  //;
  useEffect(() => {
    if (!verified) {
      verifyUser(emailToken);
    }
  }, []);
  useEffect(() => {
    if (verified) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [verified, navigate]);
  if (isVerifying) {
    return (
      <Wrapper className="full-page">
        <Loading center />
      </Wrapper>
    );
  }

  return (
    <Wrapper className="full-page">
      <div>{verified ? "verified successfully" : "verification failed"}</div>
    </Wrapper>
  );
};

export default Verify;
