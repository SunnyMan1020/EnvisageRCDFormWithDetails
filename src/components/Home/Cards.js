import OutlinedCard from "./OutlineCard";
import "./Cards.css";

function Cards(props) {
  return (
    <div className="Cards">
      {props.dataForCards.length !== 0 &&
        props.dataForCards.map((record) => {
          return (
            <OutlinedCard
              record={record}
              key={record.Time}
              timeSlotRecord={props.formDetailsDataForCards.filter((temp) => {
                return temp.Time === record.Time;
              })}
              setAddedNew={props.setAddedNew}
              headerRef={props.headerRef}
            />
          );
        })}
    </div>
  );
}
export default Cards;
