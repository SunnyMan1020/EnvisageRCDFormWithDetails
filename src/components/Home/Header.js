import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Calendar from "./Calendar";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import IconButton from "@mui/material/IconButton";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";

export default function Header(props) {
  const { logout } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  const [openSpeedDial, setOpenSpeedDial] = useState(false);
  const handleOpenSpeedDial = () => setOpenSpeedDial(true);
  const handleCloseSpeedDial = () => setOpenSpeedDial(false);

  function addNewRecord() {
    props.setChecked(true);
  }

  const actions = [
    {
      icon: <LogoutIcon sx={{ color: "#5bc0be" }} />,
      name: "登出",
      onClick: logoutWithRedirect,
    },
  ];

  return (
    <div className="header" ref={props.headerRef}>
      <Backdrop open={openSpeedDial} sx={{ zIndex: "3" }} />
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{
          position: "absolute",
          top: "1vh",
          "& .MuiSpeedDial-fab": {
            aspectRatio: "1/1",
            height: "unset",
            width: "unset",
            minHeight: "4vh",
          },
        }}
        icon={<MenuIcon />}
        openIcon={<MenuOpenIcon />}
        onClose={handleCloseSpeedDial}
        onOpen={handleOpenSpeedDial}
        open={openSpeedDial}
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={action.onClick}
            sx={{
              "& .MuiSpeedDialAction-staticTooltipLabel": {
                left: "100%",
                right: "unset",
                backgroundColor: "rgb(46 48 50)",
                color: "#5bc0be",
              },
              "& .MuiSpeedDialAction-fab": {
                backgroundColor: "rgb(46 48 50)",
                color: "#5bc0be",
              },
              "& .MuiSpeedDialAction-fab:hover": {
                backgroundColor: "rgb(86 78 78)",
              },
            }}
          />
        ))}
      </SpeedDial>
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
                sm: "5vw", // theme.breakpoints.up('sm')
                md: "4vw", // theme.breakpoints.up('md')
                lg: "3.5vw", // theme.breakpoints.up('lg')
                xl: "3vw", // theme.breakpoints.up('xl')
              },
            }}
          ></AddCircleOutlinedIcon>
        </IconButton>
      </div>
      {/*   <div className="logout">
        <IconButton
          title="Logout"
          sx={{
            color: "white",
            padding: "0",
          }}
          onClick={logoutWithRedirect}
        >
          <LogoutIcon
            sx={{
              fontSize: {
                xs: "6vw", // theme.breakpoints.up('xs')
                sm: "5vw", // theme.breakpoints.up('sm')
                md: "4vw", // theme.breakpoints.up('md')
                lg: "3.5vw", // theme.breakpoints.up('lg')
                xl: "3vw", // theme.breakpoints.up('xl')
              },
              color: "red",
            }}
          ></LogoutIcon>
        </IconButton>
      </div> */}
    </div>
  );
}
