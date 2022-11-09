import "./home.css";
import { useEffect, useState, useRef } from "react";
import { DateTime } from "luxon";
import Cards from "./Cards.js";
import Header from "./Header.js";
import FormPopup from "./FormPopup";
import { useAuth0 } from "@auth0/auth0-react";
import { Triangle } from "react-loader-spinner";
import { Navigate } from "react-router-dom";

function Home() {
  const { isAuthenticated, isLoading, user, getAccessTokenSilently } =
    useAuth0();

  const [dateUsing, setDateUsing] = useState(new Date());
  const prevDateUsingRef = useRef();
  const [dataForCards, setDataForCards] = useState([]);
  const [dataForCardsReady, setDataForCardsReady] = useState(false);
  const [formDetailsDataForCards, setFormDetailsDataForCards] = useState([]);
  const [checked, setChecked] = useState(false);
  const [addedNew, setAddedNew] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    if (isAuthenticated) {
      console.log("Authenticated, logged in as:", user);
    } else {
      console.log("Not yet authenticated");
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    console.log(DateTime.fromJSDate(dateUsing).toFormat("yyyy-LL-dd"));
    async function getData() {
      setDataForCardsReady(false);
      const accessToken = await getAccessTokenSilently({
        audience: "https://envisagepj005.azurewebsites.net",
      });
      var getDataUrl =
        "https://envisagepj005.azurewebsites.net/getNewFormByDate";
      var bodyData = {
        date: DateTime.fromJSDate(dateUsing).toFormat("yyyy-LL-dd"),
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
        body: JSON.stringify(bodyData),
      };
      const response = await fetch(getDataUrl, options);
      const data = await response.json();
      if (user["https://envisage-dt/claims/Prj005FormAdmin"]) {
        setDataForCards(data);
      } else {
        setDataForCards(
          data.filter((record) => {
            return record.Name === user["https://envisage-dt/claims/Operator"];
          })
        );
      }
      setAddedNew(false);
      console.log("data", data);
    }

    async function getFormDetailsData() {
      const accessToken = await getAccessTokenSilently({
        audience: "https://envisagepj005.azurewebsites.net",
      });
      var getDataUrl =
        "https://envisagepj005.azurewebsites.net/getAllFormRecordDetails";
      var bodyData = {
        date: DateTime.fromJSDate(dateUsing).toFormat("yyyy-LL-dd"),
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
        body: JSON.stringify(bodyData),
      };
      const response = await fetch(getDataUrl, options);
      const data = await response.json();
      setFormDetailsDataForCards(data);
      setAddedNew(false);
    }

    if (isAuthenticated) {
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
    }
  }, [addedNew, dateUsing, isAuthenticated, user, getAccessTokenSilently]);

  useEffect(() => {
    /*    if (dataForCards.length !== 0) { */
    setDataForCardsReady(true);
    console.log(dataForCards);
    /*  } */
  }, [dataForCards]);

  if (isLoading) {
    return (
      <div className="homeLoader">
        <Triangle color="white" />
      </div>
    );
  } else {
    if (isAuthenticated) {
      if (!dataForCardsReady) {
        return (
          <div className="Home">
            <Header
              dateUsing={dateUsing}
              setDateUsing={setDateUsing}
              prevDateUsingRef={prevDateUsingRef}
              checked={checked}
              setChecked={setChecked}
              headerRef={headerRef}
            />
            <div className="dataLoader">
              <Triangle color="white" />
            </div>
          </div>
        );
      } else {
        return (
          <div className="Home">
            <Header
              dateUsing={dateUsing}
              setDateUsing={setDateUsing}
              prevDateUsingRef={prevDateUsingRef}
              checked={checked}
              setChecked={setChecked}
              headerRef={headerRef}
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
              setAddedNew={setAddedNew}
              headerRef={headerRef}
            />
          </div>
        );
      }
    } else {
      return <Navigate to="/" />;
    }
  }
}
export default Home;
