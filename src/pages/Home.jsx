import React, {useContext} from "react";
import Maintenance from "../components/Maintenance";
import OnlineListWrapper from "../components/OnlineListWrapper";
import AuthContext from "../context/auth/authContext";

const Home = ({ history }) => {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext.isAuthenticated;
  if(isAuthenticated)
  {
  return (
    <OnlineListWrapper>
      <Maintenance />
    </OnlineListWrapper>
  );
  }
  return <Maintenance/>
};

export default Home;
