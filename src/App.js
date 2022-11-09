import "./App.css";
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { getConfig } from "./config";

function App() {
  const navigate = useNavigate();
  const onRedirectCallback = (appState) => {
    console.log(appState);
    navigate(appState?.returnTo || window.location.pathname, { replace: true });
  };

  const config = getConfig();
  const providerConfig = {
    domain: config.domain,
    clientId: config.clientId,
    redirectUri: window.location.origin,
    onRedirectCallback: onRedirectCallback,
  };

  return (
    <div className="App">
      <Auth0Provider {...providerConfig}>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Auth0Provider>
    </div>
  );
}
export default App;
