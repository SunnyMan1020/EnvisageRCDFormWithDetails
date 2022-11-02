import "./App.css";
import { useEffect, useState, useRef } from "react";
import { DateTime } from "luxon";
import Cards from "./components/Cards.js";
import Header from "./components/Header.js";
import FormPopup from "./components/FormPopup";

function App() {
  const [dateUsing, setDateUsing] = useState(new Date());
  const prevDateUsingRef = useRef();
  const [dataForCards, setDataForCards] = useState([]);
  const [formDetailsDataForCards, setFormDetailsDataForCards] = useState([]);
  const [checked, setChecked] = useState(false);
  const [addedNew, setAddedNew] = useState(false);

  useEffect(() => {
    console.log(DateTime.fromJSDate(dateUsing).toFormat("yyyy-LL-dd"));
    async function getData() {
      var getDataUrl =
        "https://envisagepj005.azurewebsites.net/getNewFormByDate";
      var bodyData = {
        date: DateTime.fromJSDate(dateUsing).toFormat("yyyy-LL-dd"),
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      };
      const response = await fetch(getDataUrl, options);
      const data = await response.json();
      setDataForCards(data);
      setAddedNew(false);
      console.log("data", data);
    }

    async function getFormDetailsData() {
      var getDataUrl =
        "https://envisagepj005.azurewebsites.net/getAllFormRecordDetails";
      var bodyData = {
        date: DateTime.fromJSDate(dateUsing).toFormat("yyyy-LL-dd"),
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      };
      const response = await fetch(getDataUrl, options);
      const data = await response.json();
      setFormDetailsDataForCards(data);
      setAddedNew(false);
      console.log("data", data);
    }

    if (addedNew) {
      getData();
      getFormDetailsData();
    }

    if (prevDateUsingRef.current !== undefined) {
      if (dateUsing.getTime() !== prevDateUsingRef.current.getTime()) {
        getData();
        getFormDetailsData();
      }
    } else {
      getData();
      getFormDetailsData();
    }
  }, [addedNew, dateUsing]);

  useEffect(() => {
    if (dataForCards.length !== 0) console.log(dataForCards);
  }, [dataForCards]);

  return (
    <div className="App">
      <Header
        dateUsing={dateUsing}
        setDateUsing={setDateUsing}
        prevDateUsingRef={prevDateUsingRef}
        checked={checked}
        setChecked={setChecked}
      />
      <FormPopup
        checked={checked}
        setChecked={setChecked}
        dateUsing={dateUsing}
        addedNew={addedNew}
        setAddedNew={setAddedNew}
      />
      <Cards
        dataForCards={dataForCards}
        formDetailsDataForCards={formDetailsDataForCards}
      />
    </div>
  );
}
export default App;
