import { Fragment, useEffect, useState } from "react";
import "./FormPopup.css";
import Zoom from "@mui/material/Zoom";
import { Card, Typography, Input, IconButton } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import { DateTime } from "luxon";
import { useAuth0 } from "@auth0/auth0-react";
import { useCallback } from "react";

export default function FormPopup({
  dateUsing,
  checked,
  setChecked,
  addedNew,
  setAddedNew,
}) {
  const { getAccessTokenSilently, user } = useAuth0();
  const [projectNameList, setProjectNameList] = useState([]);
  const [plantList, setPlantList] = useState([]);
  const [recordsOptions, setRecordsOptions] = useState({
    Plant_Id: [],
    Project_Id: [],
  });
  const [record, setRecord] = useState({
    project: "",
    plantNumber: "",
    pileNumber: "",
    drillNumber: "",
    pingOnJo: "",
    cheOnJo: "",
    date: dateUsing,
  });
  const [displaySubmit, setDisplaySubmit] = useState(false);
  const [readyToSubmit, setReadyToSubmit] = useState(false);

  useEffect(() => {
    async function combinedFetch() {
      return Promise.all([
        fetch(
          "https://envisagepj002.azurewebsites.net/getProjectNameForEveryone"
        )
          .then((value) => value.json())
          .then((data) => setProjectNameList(data)),
        fetch("https://envisagepj005.azurewebsites.net/getRcdPlant")
          .then((value) => value.json())
          .then((data) => setPlantList(data)),
      ]).catch((err) => {
        console.log(err);
      });
    }
    combinedFetch();
  }, []);

  useEffect(() => {
    if (projectNameList.length > 0 && plantList.length > 0) {
      var projectNameAnswerChoices = [],
        plantNumberAnswerChoices = [],
        operatorNameAnswerChoices = [];
      projectNameList.forEach((prj) => {
        projectNameAnswerChoices.push(prj.Project_Id);
      });
      plantList.forEach((prj) => {
        plantNumberAnswerChoices.push(prj.Plant_Number);
      });
      console.log(projectNameAnswerChoices);
      setRecordsOptions((prevState) => ({
        ...prevState,
        Plant_Id: plantNumberAnswerChoices,
        Project_Id: projectNameAnswerChoices,
        Operators: operatorNameAnswerChoices,
      }));
    }
  }, [projectNameList, plantList]);

  const handleChange = (event) => {
    setRecord((prevState) => ({
      ...prevState, // Copy the old fields
      [event.target.name]: event.target.value, // But override this one
    }));
  };

  const getSubmitTime = () => {
    var dt = new Date();
    setRecord((prevState) => ({
      ...prevState, // Copy the old fields
      Time: new Date(
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset())
      ).toISOString(), // But override this one
      name: Object.keys(user).includes("https://envisage-dt/claims/Operator")
        ? user["https://envisage-dt/claims/Operator"]
        : "測試",
    }));
    setReadyToSubmit(true);
  };

  const closePopup = () => {
    setChecked(false);
    reset();
  };

  const reset = useCallback(() => {
    setRecord({
      project: "",
      plantNumber: "",
      pileNumber: "",
      drillNumber: "",
      pingOnJo: "",
      cheOnJo: "",
      date: dateUsing,
    });
    setReadyToSubmit(false);
    setDisplaySubmit(false);
  }, [dateUsing]);

  useEffect(() => {
    setRecord((prevState) => ({
      ...prevState, // Copy the old fields
      date: DateTime.fromJSDate(dateUsing).toFormat("yyyy-MM-dd"), // But override this one
    }));
  }, [dateUsing]);

  useEffect(() => {
    console.log(recordsOptions);
  }, [recordsOptions]);

  useEffect(() => {
    if (Object.values(record).includes("")) {
      setDisplaySubmit(false);
    } else {
      setDisplaySubmit(true);
    }
  }, [record, displaySubmit]);

  useEffect(() => {
    if (
      Object.values(record).every((currentValue) => currentValue !== "") &&
      readyToSubmit
    ) {
      async function insertFormDetailsData() {
        const accessToken = await getAccessTokenSilently({
          audience: "https://envisagepj005.azurewebsites.net",
        });
        var insertFormUrl =
          "https://envisagepj005.azurewebsites.net/insertFormTemp";
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accessToken,
          },
          body: JSON.stringify(record),
        };
        console.log(JSON.stringify(record));

        fetch(insertFormUrl, options)
          .then(function (response) {
            return response.json();
          })
          .then(function (responseJson) {
            console.log(responseJson);
            setChecked(false);
            setAddedNew(true);
            reset();
          });
      }
      insertFormDetailsData();
    } else {
      return;
    }
  }, [
    record,
    readyToSubmit,
    reset,
    setChecked,
    setAddedNew,
    getAccessTokenSilently,
  ]);

  /*   function reset() {
    setRecord({
      name: "",
      project: "",
      plantNumber: "",
      pileNumber: "",
      drillNumber: "",
      pingOnJo: "",
      cheOnJo: "",
      date: dateUsing,
    });
    setReadyToSubmit(false);
    setDisplaySubmit(false);
  } */

  return (
    <div className="formPopup">
      <Zoom in={checked} style={{ transitionDelay: checked ? "250ms" : "0ms" }}>
        <Card
          sx={{
            zIndex: "2",
            border: "4px solid #db9c15",
            boxShadow: `0 0 0.2rem 0px #db9c15, 0 0 0.2rem #db9c15, inset 0 0 1rem #db9c15`,
            borderRadius: "3vw",
            width: {
              xs: "92vw", // theme.breakpoints.up('xs')
              sm: "82vw", // theme.breakpoints.up('sm')
              md: "72vw", // theme.breakpoints.up('md')
              lg: "62vw", // theme.breakpoints.up('lg')
              xl: "52vw", // theme.breakpoints.up('xl')
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {projectNameList.length > 0 && plantList.length > 0 && (
            <Fragment>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  rowGap: "1vh",
                }}
              >
                <Typography
                  component={"div"}
                  sx={{
                    textAlign: "left",
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: {
                      xs: "5.5vw", // theme.breakpoints.up('xs')
                      sm: "5vw", // theme.breakpoints.up('sm')
                      md: "4.5vw", // theme.breakpoints.up('md')
                      lg: "4vw", // theme.breakpoints.up('lg')
                      xl: "2vw", // theme.breakpoints.up('xl')
                    },
                  }}
                >
                  新增資料
                  <IconButton
                    onClick={closePopup}
                    sx={{
                      fontSize: {
                        xs: "4vw", // theme.breakpoints.up('xs')
                        sm: "3.5vw", // theme.breakpoints.up('sm')
                        md: "3vw", // theme.breakpoints.up('md')
                        lg: "2.5vw", // theme.breakpoints.up('lg')
                        xl: "1.5vw", // theme.breakpoints.up('xl')
                      },
                    }}
                  >
                    <CloseIcon></CloseIcon>
                  </IconButton>
                </Typography>
                <Typography
                  component={"div"}
                  sx={{
                    textAlign: "left",
                    fontSize: {
                      xs: "4.5vw", // theme.breakpoints.up('xs')
                      sm: "4vw", // theme.breakpoints.up('sm')
                      md: "3.5vw", // theme.breakpoints.up('md')
                      lg: "3vw", // theme.breakpoints.up('lg')
                      xl: "1.5vw", // theme.breakpoints.up('xl')
                    },
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingLeft: "3vw",
                    paddingRight: "3vw",
                  }}
                >
                  鑽石機機號:
                  <Select
                    labelId="plantNumber-select-label"
                    id="plantNumber-simple-select"
                    onChange={handleChange}
                    value={record.plantNumber}
                    name="plantNumber"
                    sx={{
                      width: {
                        xs: "35vw", // theme.breakpoints.up('xs')
                        sm: "18vw", // theme.breakpoints.up('sm')
                        md: "13vw", // theme.breakpoints.up('md')
                        lg: "9vw", // theme.breakpoints.up('lg')
                        xl: "8vw", // theme.breakpoints.up('xl')
                      },
                      "& .MuiSelect-select": {
                        padding: "8.5px 14px",
                      },
                    }}
                  >
                    {recordsOptions.Plant_Id.length > 0 &&
                      recordsOptions.Plant_Id.map((Id) => {
                        return (
                          <MenuItem value={Id} key={Id}>
                            {Id}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </Typography>
                <Typography
                  component={"div"}
                  sx={{
                    textAlign: "left",
                    fontSize: {
                      xs: "4.5vw", // theme.breakpoints.up('xs')
                      sm: "4vw", // theme.breakpoints.up('sm')
                      md: "3.5vw", // theme.breakpoints.up('md')
                      lg: "3vw", // theme.breakpoints.up('lg')
                      xl: "1.5vw", // theme.breakpoints.up('xl')
                    },
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingLeft: "3vw",
                    paddingRight: "3vw",
                  }}
                >
                  地盤編號:
                  <Select
                    labelId="project-select-label"
                    id="project-simple-select"
                    onChange={handleChange}
                    value={record.project}
                    name="project"
                    sx={{
                      width: {
                        xs: "35vw", // theme.breakpoints.up('xs')
                        sm: "18vw", // theme.breakpoints.up('sm')
                        md: "13vw", // theme.breakpoints.up('md')
                        lg: "9vw", // theme.breakpoints.up('lg')
                        xl: "8vw", // theme.breakpoints.up('xl')
                      },
                      "& .MuiSelect-select": {
                        padding: "8.5px 14px",
                      },
                    }}
                  >
                    {recordsOptions.Project_Id.length > 0 &&
                      recordsOptions.Project_Id.map((Id) => {
                        return (
                          <MenuItem value={Id} key={Id}>
                            {Id}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </Typography>
                <Typography
                  component={"div"}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingLeft: "3vw",
                    paddingRight: "3vw",
                    textAlign: "left",
                    fontSize: {
                      xs: "4.5vw", // theme.breakpoints.up('xs')
                      sm: "4vw", // theme.breakpoints.up('sm')
                      md: "3.5vw", // theme.breakpoints.up('md')
                      lg: "3vw", // theme.breakpoints.up('lg')
                      xl: "1.5vw", // theme.breakpoints.up('xl')
                    },
                  }}
                >
                  樁編號:
                  <Input
                    id="pileNumber-simple-select"
                    onChange={handleChange}
                    value={record.pileNumber}
                    name="pileNumber"
                    sx={{
                      width: {
                        xs: "35vw", // theme.breakpoints.up('xs')
                        sm: "18vw", // theme.breakpoints.up('sm')
                        md: "13vw", // theme.breakpoints.up('md')
                        lg: "9vw", // theme.breakpoints.up('lg')
                        xl: "8vw", // theme.breakpoints.up('xl')
                      },
                    }}
                    inputProps={{ title: "pileNumber" }}
                  ></Input>
                </Typography>
                <Typography
                  component={"div"}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingLeft: "3vw",
                    paddingRight: "3vw",
                    textAlign: "left",
                    fontSize: {
                      xs: "4.5vw", // theme.breakpoints.up('xs')
                      sm: "4vw", // theme.breakpoints.up('sm')
                      md: "3.5vw", // theme.breakpoints.up('md')
                      lg: "3vw", // theme.breakpoints.up('lg')
                      xl: "1.5vw", // theme.breakpoints.up('xl')
                    },
                  }}
                >
                  <Typography
                    component={"div"}
                    sx={{
                      display: "flex",
                      fontSize: {
                        xs: "4.5vw", // theme.breakpoints.up('xs')
                        sm: "4vw", // theme.breakpoints.up('sm')
                        md: "3.5vw", // theme.breakpoints.up('md')
                        lg: "3vw", // theme.breakpoints.up('lg')
                        xl: "1.5vw", // theme.breakpoints.up('xl')
                      },
                      flexDirection: "column",
                    }}
                  >
                    鑽頭號碼:
                    <Typography
                      component={"span"}
                      sx={{
                        textAlign: "left",
                        fontSize: {
                          xs: "3.5vw", // theme.breakpoints.up('xs')
                          sm: "3vw", // theme.breakpoints.up('sm')
                          md: "2.5vw", // theme.breakpoints.up('md')
                          lg: "2vw", // theme.breakpoints.up('lg')
                          xl: "1vw", // theme.breakpoints.up('xl')
                        },
                      }}
                    >
                      如沒有維修鑽頭，請填寫 0
                    </Typography>
                  </Typography>

                  <Input
                    id="drillNumber-simple-select"
                    onChange={handleChange}
                    value={record.drillNumber}
                    name="drillNumber"
                    sx={{
                      width: {
                        xs: "35vw", // theme.breakpoints.up('xs')
                        sm: "18vw", // theme.breakpoints.up('sm')
                        md: "13vw", // theme.breakpoints.up('md')
                        lg: "9vw", // theme.breakpoints.up('lg')
                        xl: "8vw", // theme.breakpoints.up('xl')
                      },
                    }}
                    inputProps={{ title: "drillNumber" }}
                  ></Input>
                </Typography>
                <Typography
                  component={"div"}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingLeft: "3vw",
                    paddingRight: "3vw",
                    textAlign: "left",
                    fontSize: {
                      xs: "4.5vw", // theme.breakpoints.up('xs')
                      sm: "4vw", // theme.breakpoints.up('sm')
                      md: "3.5vw", // theme.breakpoints.up('md')
                      lg: "3vw", // theme.breakpoints.up('lg')
                      xl: "1.5vw", // theme.breakpoints.up('xl')
                    },
                  }}
                >
                  平鞍座上的菠蘿更換數量:
                  <Input
                    id="pingOnJo-simple-select"
                    onChange={handleChange}
                    value={record.pingOnJo}
                    name="pingOnJo"
                    sx={{
                      width: {
                        xs: "35vw", // theme.breakpoints.up('xs')
                        sm: "18vw", // theme.breakpoints.up('sm')
                        md: "13vw", // theme.breakpoints.up('md')
                        lg: "9vw", // theme.breakpoints.up('lg')
                        xl: "8vw", // theme.breakpoints.up('xl')
                      },
                      "& input": {
                        textAlign: "center",
                      },
                    }}
                    type="number"
                    inputProps={{ title: "pingOnJo" }}
                  ></Input>
                </Typography>
                <Typography
                  component={"div"}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingLeft: "3vw",
                    paddingRight: "3vw",
                    textAlign: "left",
                    fontSize: {
                      xs: "4.5vw", // theme.breakpoints.up('xs')
                      sm: "4vw", // theme.breakpoints.up('sm')
                      md: "3.5vw", // theme.breakpoints.up('md')
                      lg: "3vw", // theme.breakpoints.up('lg')
                      xl: "1.5vw", // theme.breakpoints.up('xl')
                    },
                    "& input": {
                      textAlign: "center",
                    },
                  }}
                >
                  斜鞍座上的菠蘿更換數量:
                  <Input
                    id="cheOnJo-simple-select"
                    onChange={handleChange}
                    value={record.cheOnJo}
                    name="cheOnJo"
                    sx={{
                      width: {
                        xs: "35vw", // theme.breakpoints.up('xs')
                        sm: "18vw", // theme.breakpoints.up('sm')
                        md: "13vw", // theme.breakpoints.up('md')
                        lg: "9vw", // theme.breakpoints.up('lg')
                        xl: "8vw", // theme.breakpoints.up('xl')
                      },
                      textAlign: "center",
                    }}
                    type="number"
                    inputProps={{ title: "cheOnJo" }}
                  ></Input>
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                {/*  <Fade in={displaySubmit} timeout={500}> */}
                <Button
                  sx={{
                    fontSize: {
                      xs: "6vw", // theme.breakpoints.up('xs')
                      sm: "5.5vw", // theme.breakpoints.up('sm')
                      md: "5vw", // theme.breakpoints.up('md')
                      lg: "4.5vw", // theme.breakpoints.up('lg')
                      xl: "2.5vw", // theme.breakpoints.up('xl')
                    },
                    "&.Mui-disabled": {
                      color: "red",
                    },
                  }}
                  onClick={getSubmitTime}
                  disabled={!displaySubmit}
                >
                  {displaySubmit ? "提交" : "請填寫所有欄位"}
                </Button>
                {/*    </Fade> */}
              </CardActions>
            </Fragment>
          )}
        </Card>
      </Zoom>
    </div>
  );
}
