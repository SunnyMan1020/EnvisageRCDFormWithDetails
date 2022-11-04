import "./Header.css";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { IconButton } from "@mui/material";
import Calendar from "./Calendar";

export default function Header(props) {
  function addNewRecord() {
    props.setChecked(true);
  }

  return (
    <div className="header">
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
    </div>
  );
}
