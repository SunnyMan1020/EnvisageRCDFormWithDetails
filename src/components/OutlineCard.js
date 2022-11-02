import { useState, Fragment, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import DetailsTable from "./DetailsTable";
import "./OutlineCard.css";

export default function OutlineCard(props) {
  function openCorrespondingTable(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.currentTarget);
    console.log(
      JSON.parse(decodeURIComponent(event.currentTarget.dataset.record))
    );
    setToggleTable(true);
  }

  function expandAndScroll(e) {
    console.log(e);
    if (e.target.classList.contains("clicked"))
      e.target.classList.remove("clicked");
    else e.target.classList.add("clicked");
  }

  function filterItems(arr) {
    return Object.keys(arr).filter(function (el) {
      return arr[el] === true;
    });
  }

  const [toggleTable, setToggleTable] = useState(false);
  const [ready, setReady] = useState(false);
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    const rockObjtemp = props.timeSlotRecord.map(
      ({ 一級石, 二級石, 三級石, 四級石, 黃花沙, 石屎 }) => {
        return {
          一級石,
          二級石,
          三級石,
          四級石,
          黃花沙,
          石屎,
        };
      }
    );
    console.log(rockObjtemp);
    const actionObjtemp = props.timeSlotRecord.map(
      ({ 執窿, 待機, 換水, 換轉杆, 放大, 檢查, 直鑽, 維修, 追通 }) => {
        return {
          執窿,
          待機,
          換水,
          換轉杆,
          放大,
          檢查,
          直鑽,
          維修,
          追通,
        };
      }
    );
    console.log(actionObjtemp);
    rockObjtemp.forEach((obj) => {
      console.log(filterItems(obj));
    });

    actionObjtemp.forEach((obj) => {
      console.log(filterItems(obj));
    });

    var tempSummary = [];

    props.timeSlotRecord.forEach((rec, index) => {
      tempSummary.push({
        Time_Slot: rec.Time_Slot,
        Grade: filterItems(rockObjtemp[index]),
        Action: filterItems(actionObjtemp[index]),
      });
    });

    console.log(tempSummary);
    setSummary(tempSummary);
  }, [props.timeSlotRecord]);

  useEffect(() => {
    console.log(summary);
    if (summary.length === props.timeSlotRecord.length && summary.length > 0) {
      console.log("summary.length", summary.length);
      console.log("props.timeSlotRecord.length", props.timeSlotRecord.length);
      setReady(true);
    } else {
      setReady(false);
    }
  }, [summary]);

  useEffect(() => {
    console.log(ready);
  }, [ready]);

  return (
    <Fragment>
      <div className="outlineCardWrapper">
        <Card
          sx={{
            width: {
              xs: "70vw", // theme.breakpoints.up('xs')
              sm: "60vw", // theme.breakpoints.up('sm')
              md: "50vw", // theme.breakpoints.up('md')
              lg: "40vw", // theme.breakpoints.up('lg')
              xl: "30vw", // theme.breakpoints.up('xl')
            },
          }}
          className="outlineCard"
          onClick={expandAndScroll}
        >
          <CardHeader
            sx={{
              padding: "0px",
              pointerEvents: "none",
              marginBottom: "2vh",
            }}
            color="#5bc0be"
            title={
              <div className="outlineCardHeader">
                <Typography
                  sx={{
                    fontSize: {
                      xs: "3.5vw", // theme.breakpoints.up('xs')
                      sm: "3vw", // theme.breakpoints.up('sm')
                      md: "2.5vw", // theme.breakpoints.up('md')
                      lg: "2vw", // theme.breakpoints.up('lg')
                      xl: "1.5vw", // theme.breakpoints.up('xl')
                    },
                  }}
                >
                  {props.record.Plant_Id}
                </Typography>
                <Typography
                  className="pile"
                  sx={{
                    fontSize: {
                      xs: "3.5vw", // theme.breakpoints.up('xs')
                      sm: "3vw", // theme.breakpoints.up('sm')
                      md: "2.5vw", // theme.breakpoints.up('md')
                      lg: "2vw", // theme.breakpoints.up('lg')
                      xl: "1.5vw", // theme.breakpoints.up('xl')
                    },
                  }}
                >
                  {props.record.Pile_Id}
                </Typography>
              </div>
            }
            subheader={
              <Typography
                className="outlineCardSubHeader"
                sx={{
                  fontSize: {
                    xs: "3vw", // theme.breakpoints.up('xs')
                    sm: "2.5vw", // theme.breakpoints.up('sm')
                    md: "2vw", // theme.breakpoints.up('md')
                    lg: "1.5vw", // theme.breakpoints.up('lg')
                    xl: "1vw", // theme.breakpoints.up('xl')
                  },
                }}
              >
                {props.record.Name}
              </Typography>
            }
          />

          <CardContent sx={{ pointerEvents: "none", padding: "0px" }}>
            <Typography
              sx={{
                fontSize: {
                  xs: "3vw", // theme.breakpoints.up('xs')
                  sm: "2.5vw", // theme.breakpoints.up('sm')
                  md: "2vw", // theme.breakpoints.up('md')
                  lg: "1.5vw", // theme.breakpoints.up('lg')
                  xl: "1vw", // theme.breakpoints.up('xl')
                },
              }}
              variant="body1"
              color="#5bc0be"
            >
              鑽頭號碼： {props.record.Drill_Id}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "3vw", // theme.breakpoints.up('xs')
                  sm: "2.5vw", // theme.breakpoints.up('sm')
                  md: "2vw", // theme.breakpoints.up('md')
                  lg: "1.5vw", // theme.breakpoints.up('lg')
                  xl: "1vw", // theme.breakpoints.up('xl')
                },
              }}
              variant="body1"
              color="#5bc0be"
            >
              平鞍座上的菠蘿更換數量： {props.record.PingOnJo}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "3vw", // theme.breakpoints.up('xs')
                  sm: "2.5vw", // theme.breakpoints.up('sm')
                  md: "2vw", // theme.breakpoints.up('md')
                  lg: "1.5vw", // theme.breakpoints.up('lg')
                  xl: "1vw", // theme.breakpoints.up('xl')
                },
              }}
              variant="body1"
              color="#5bc0be"
            >
              斜鞍座上的菠蘿更換數量： {props.record.CheOnJo}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "3.5vw", // theme.breakpoints.up('xs')
                  sm: "3vw", // theme.breakpoints.up('sm')
                  md: "2.5vw", // theme.breakpoints.up('md')
                  lg: "2vw", // theme.breakpoints.up('lg')
                  xl: "1.5vw", // theme.breakpoints.up('xl')
                },
                textAlign: "left",
              }}
              color="#5bc0be"
            >
              以往紀錄
            </Typography>
            {props.timeSlotRecord.map((temp) => {
              return (
                <div
                  className="DetailsPreview"
                  key={temp["Time_Slot_SubmitTime"]}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "3vw", // theme.breakpoints.up('xs')
                        sm: "2.5vw", // theme.breakpoints.up('sm')
                        md: "2vw", // theme.breakpoints.up('md')
                        lg: "1.5vw", // theme.breakpoints.up('lg')
                        xl: "1vw", // theme.breakpoints.up('xl')
                      },
                    }}
                    color="#5bc0be"
                  >
                    {temp.Time_Slot}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "3vw", // theme.breakpoints.up('xs')
                        sm: "2.5vw", // theme.breakpoints.up('sm')
                        md: "2vw", // theme.breakpoints.up('md')
                        lg: "1.5vw", // theme.breakpoints.up('lg')
                        xl: "1vw", // theme.breakpoints.up('xl')
                      },
                    }}
                    color="#5bc0be"
                  >
                    {temp.Depth} 米
                  </Typography>
                  {ready && (
                    <Fragment>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "3vw", // theme.breakpoints.up('xs')
                            sm: "2.5vw", // theme.breakpoints.up('sm')
                            md: "2vw", // theme.breakpoints.up('md')
                            lg: "1.5vw", // theme.breakpoints.up('lg')
                            xl: "1vw", // theme.breakpoints.up('xl')
                          },
                        }}
                        color="#5bc0be"
                      >
                        {summary
                          .filter((obj) => {
                            return obj.Time_Slot === temp.Time_Slot;
                          })[0]
                          ?.Grade.join(",")}
                      </Typography>
                    </Fragment>
                  )}
                  {/*   {ready &&
                    summary
                      .filter((obj) => {
                        return obj.Time_Slot === temp.Time_Slot;
                      })[0]
                      .Action.map((x) => {
                        return (
                          <Fragment key={x}>
                            <Typography
                              sx={{
                                fontSize: {
                                  xs: "3vw", // theme.breakpoints.up('xs')
                                  sm: "2.5vw", // theme.breakpoints.up('sm')
                                  md: "2vw", // theme.breakpoints.up('md')
                                  lg: "1.5vw", // theme.breakpoints.up('lg')
                                  xl: "1vw", // theme.breakpoints.up('xl')
                                },
                              }}
                              color="#5bc0be"
                            >
                              {x}
                            </Typography>
                          </Fragment>
                        );
                      })} */}
                  {ready && (
                    <Fragment>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "3vw", // theme.breakpoints.up('xs')
                            sm: "2.5vw", // theme.breakpoints.up('sm')
                            md: "2vw", // theme.breakpoints.up('md')
                            lg: "1.5vw", // theme.breakpoints.up('lg')
                            xl: "1vw", // theme.breakpoints.up('xl')
                          },
                        }}
                        color="#5bc0be"
                      >
                        {summary
                          .filter((obj) => {
                            return obj.Time_Slot === temp.Time_Slot;
                          })[0]
                          ?.Action.join(",")}
                      </Typography>
                    </Fragment>
                  )}
                </div>
              );
            })}
          </CardContent>
          <CardActions disableSpacing sx={{ justifyContent: "flex-end" }}>
            <IconButton
              title="Add"
              sx={{
                color: "white",
                padding: "0",
                height: "fit-content",
                width: "fit-content",
                textAlign: "right",
              }}
              aria-label="open table"
              onClick={openCorrespondingTable}
              data-record={JSON.stringify(props.record)}
            >
              <AddIcon />
            </IconButton>
          </CardActions>
        </Card>
        <div className="project">
          <Typography
            sx={{
              fontSize: {
                xs: "3vw", // theme.breakpoints.up('xs')
                sm: "2.5vw", // theme.breakpoints.up('sm')
                md: "2vw", // theme.breakpoints.up('md')
                lg: "1.5vw", // theme.breakpoints.up('lg')
                xl: "1vw", // theme.breakpoints.up('xl')
              },
            }}
            variant="body1"
          >
            {props.record.Project_Id}
          </Typography>
        </div>
      </div>
      {toggleTable && (
        <DetailsTable
          record={props.record}
          setToggleTable={setToggleTable}
          setAddedNew={props.setAddedNew}
          setReady={setReady}
          setSummary={setSummary}
        />
      )}
    </Fragment>
  );
}
