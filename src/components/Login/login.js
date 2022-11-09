import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { Triangle } from "react-loader-spinner";
import IconButton from "@mui/material/IconButton";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./login.css";

const Login = () => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  if (isLoading) {
    return (
      <div className="loginLoader">
        <Triangle color="white" />
      </div>
    );
  } else {
    return (
      <div className="login">
        {!isAuthenticated && (
          <Box
            display="grid"
            gridTemplateRows="50% 27%"
            alignItems="end"
            minHeight="100vh"
            textAlign="center"
            justifyContent="center"
            justifyItems="center"
          >
            <Typography variant="h2" component="div" gutterBottom>
              鑽石機每天工作紀錄
            </Typography>
            <IconButton
              width="max-content"
              disableRipple
              aria-label="login"
              onClick={() =>
                loginWithRedirect({
                  /*   redirectUri: `${window.location.origin}`, */
                  appState: { returnTo: "/home" },
                })
              }
            >
              <LoginOutlinedIcon sx={{ color: "#fff", fontSize: "60px" }} />
            </IconButton>
            {/*   <button
              onClick={() =>
                loginWithRedirect({
                  appState: { returnTo: "/home" },
                })
              }
            >
              Log In
            </button> */}
          </Box>
        )}
        {isAuthenticated && <Navigate to="/home" />}
      </div>
    );
  }
};

export default Login;
/* <button onClick={() => logoutWithRedirect()}>Log Out</button> */
