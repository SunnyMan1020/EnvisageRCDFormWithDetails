import "./Header.css";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import Calendar from "./Calendar";

export default function Header(props) {
  const { logout } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  function addNewRecord() {
    props.setChecked(true);
  }

  return (
    <div className="header" ref={props.headerRef}>
      <Calendar
        Date={props.dateUsing}
        setDate={props.setDateUsing}
        prevDateUsingRef={props.prevDateUsingRef}
      />
      <div className="subHeader">
        <p>鑽石機每天工作紀錄</p>
        <IconButton
          title="Add"
          sx={{
            color: "white",
            padding: "0",
            //   height: "fit-content",
            //    width: "fit-content",
          }}
          onClick={addNewRecord}
        >
          <AddCircleOutlinedIcon
            sx={{
              fontSize: {
                xs: "6vw", // theme.breakpoints.up('xs')
                sm: "5.5vw", // theme.breakpoints.up('sm')
                md: "5vw", // theme.breakpoints.up('md')
                lg: "4.5vw", // theme.breakpoints.up('lg')
                xl: "4vw", // theme.breakpoints.up('xl')
              },
            }}
          ></AddCircleOutlinedIcon>
        </IconButton>
      </div>
      <div className="logout">
        <IconButton
          title="Logout"
          sx={{
            color: "white",
            padding: "0",
            position: "absolute",
            top: "0",
            right: "0",
            //   height: "fit-content",
            //    width: "fit-content",
          }}
          onClick={logoutWithRedirect}
        >
          <LogoutIcon
            sx={{
              fontSize: {
                xs: "6vw", // theme.breakpoints.up('xs')
                sm: "5.5vw", // theme.breakpoints.up('sm')
                md: "5vw", // theme.breakpoints.up('md')
                lg: "4.5vw", // theme.breakpoints.up('lg')
                xl: "4vw", // theme.breakpoints.up('xl')
              },
            }}
          ></LogoutIcon>
        </IconButton>
      </div>
    </div>
  );
}
