import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import { zhHK } from "date-fns/locale";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

registerLocale("zhHK", zhHK);

export default function Calendar(props) {
  return (
    <div className="calendar">
      <CalendarTodayIcon sx={{ color: "white" }} />
      <DatePicker
        title="dateUsing"
        selected={props.Date}
        onChange={(date) => {
          props.prevDateUsingRef.current = props.Date;
          props.setDate(date);
        }}
        dateFormat="yyyy年MM月dd日"
        locale="zhHK"
      />
    </div>
  );
}