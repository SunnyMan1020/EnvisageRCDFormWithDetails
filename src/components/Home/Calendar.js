import DatePicker from "react-datepicker";
import { forwardRef } from "react";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import { zhHK } from "date-fns/locale";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

registerLocale("zhHK", zhHK);

export default function Calendar(props) {
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
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
        customInput={<ExampleCustomInput />}
        dateFormat="yyyy年MM月dd日"
        locale="zhHK"
      />
    </div>
  );
}
