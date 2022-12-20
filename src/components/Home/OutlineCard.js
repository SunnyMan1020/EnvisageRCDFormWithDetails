import { useState, Fragment, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import DetailsTable from "./DetailsTable";
import "./OutlineCard.css";

export default function OutlineCard({
  timeSlotRecord,
  record,
  setAddedNew,
  headerRef,
}) {
  function openCorrespondingTable(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.currentTarget);
    console.log(
      JSON.parse(decodeURIComponent(event.currentTarget.dataset.record))
    );
    setToggleTable(true);
    if (headerRef.current) {
      headerRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  function expandAndScroll(e) {
    console.log(e);
    if (e.target.classList.contains("clicked")) {
      e.target.classList.remove("clicked");
      setDivExpand(false);
      /*      if (card) {
        card.scrollIntoView(
         {
          behavior: "smooth",
          block: "start",
        } 
        );
      } */
    } else {
      e.target.classList.add("clicked");
      setDivExpand(true);
      /*    if (card) {
        card.scrollIntoView(
        {
          behavior: "smooth",
          block: "end",
        }
        );
      } */
    }
  }

  function filterItems(arr) {
    return Object.keys(arr).filter(function (el) {
      return arr[el] === true;
    });
  }

  const cardRef = useRef();
  const [divExpand, setDivExpand] = useState(false);
  const [toggleTable, setToggleTable] = useState(false);
  const [ready, setReady] = useState(false);
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    const card = cardRef.current;
    if (divExpand) {
      if (card) {
        card.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [divExpand]);

  useEffect(() => {
    const rockObjtemp = timeSlotRecord.map(
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
    const actionObjtemp = timeSlotRecord.map(
      ({
        直鑽,
        追通鑽,
        放大,
        換水清底,
        加鑽杆,
        維修,
        裝嵌,
        拆機,
        檢查油水,
        磨通,
        換鑽頭,
        清沙缸,
        執窿,
        待機,
      }) => {
        return {
          直鑽,
          追通鑽,
          放大,
          換水清底,
          加鑽杆,
          維修,
          裝嵌,
          拆機,
          檢查油水,
          磨通,
          換鑽頭,
          清沙缸,
          執窿,
          待機,
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
    console.log("timeSlotRecord", timeSlotRecord);
    timeSlotRecord.forEach((rec, index) => {
      tempSummary.push({
        Time_Slot: rec.Time_Slot,
        Grade: filterItems(rockObjtemp[index]),
        Action: filterItems(actionObjtemp[index]),
      });
    });

    console.log(tempSummary);
    setSummary(tempSummary);
  }, [timeSlotRecord]);

  useEffect(() => {
    console.log(summary);
    if (summary.length === timeSlotRecord.length && summary.length > 0) {
      console.log("summary.length", summary.length);
      console.log("timeSlotRecord.length", timeSlotRecord.length);
      setReady(true);
    } else {
      setReady(false);
    }
  }, [summary, timeSlotRecord.length]);

  useEffect(() => {
    console.log(ready);
  }, [ready]);

  return (
    <Fragment>
      <div className="outlineCardWrapper" ref={cardRef}>
        <Card
          sx={{
            width: {
              xs: "90vw", // theme.breakpoints.up('xs')
              sm: "80vw", // theme.breakpoints.up('sm')
              md: "52vw", // theme.breakpoints.up('md')
              lg: "45vw", // theme.breakpoints.up('lg')
              xl: "33vw", // theme.breakpoints.up('xl')
            },
            maxHeight: {
              xs: "28vh", // theme.breakpoints.up('xs')
              sm: "40vh", // theme.breakpoints.up('sm')
              md: "40vh", // theme.breakpoints.up('md')
              lg: "40h", // theme.breakpoints.up('lg')
              xl: "34vh", // theme.breakpoints.up('xl')
            },
            backgroundColor: "unset",
            color: "#5bc0be",
            border: "4px solid #5bc0be",
            borderRadius: "1vw",
            boxShadow: "0 0 0.2rem #5bc0be, inset 0 0 0.3rem #6fffe9",
            animation: "pulsate 1.5s infinite alternate",
            justifyContent: "space-around",
            alignContent: "stretch",
            alignItems: "center",
            position: "relative",
            margin: "auto",
            padding: "10px",
            transition: "max-height 1s ease",
            "&.clicked": {
              maxHeight: "200vh",
              transition: "max-height 2s ease",
            },
          }}
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
                      xs: "5.5vw", // theme.breakpoints.up('xs')
                      sm: "5vw", // theme.breakpoints.up('sm')
                      md: "3.5vw", // theme.breakpoints.up('md')
                      lg: "3vw", // theme.breakpoints.up('lg')
                      xl: "2.5vw", // theme.breakpoints.up('xl')
                    },
                  }}
                >
                  {record.Plant_Id}
                </Typography>
                <Typography
                  className="pile"
                  sx={{
                    fontSize: {
                      xs: "5.5vw", // theme.breakpoints.up('xs')
                      sm: "5vw", // theme.breakpoints.up('sm')
                      md: "3.5vw", // theme.breakpoints.up('md')
                      lg: "3vw", // theme.breakpoints.up('lg')
                      xl: "2.5vw", // theme.breakpoints.up('xl')
                    },
                  }}
                >
                  {record.Pile_Id}
                </Typography>
              </div>
            }
            subheader={
              <Typography
                className="outlineCardSubHeader"
                sx={{
                  fontSize: {
                    xs: "5.5vw", // theme.breakpoints.up('xs')
                    sm: "5vw", // theme.breakpoints.up('sm')
                    md: "3.5vw", // theme.breakpoints.up('md')
                    lg: "3vw", // theme.breakpoints.up('lg')
                    xl: "2.5vw", // theme.breakpoints.up('xl')
                  },
                }}
              >
                {record.Name}
              </Typography>
            }
          />

          <CardContent
            sx={{
              pointerEvents: "none",
              padding: "0px",
              background: "#164765",
              border: "1px solid grey",
              borderRadius: "1vw",
              marginBottom: "1vh",
              opacity: divExpand ? 1 : 0,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "4vw", // theme.breakpoints.up('xs')
                  sm: "3.5vw", // theme.breakpoints.up('sm')
                  md: "3vw", // theme.breakpoints.up('md')
                  lg: "2.5vw", // theme.breakpoints.up('lg')
                  xl: "2vw", // theme.breakpoints.up('xl')
                },
              }}
              variant="body1"
              color="#5bc0be"
            >
              鑽頭號碼： {record.Drill_Id}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "4vw", // theme.breakpoints.up('xs')
                  sm: "3.5vw", // theme.breakpoints.up('sm')
                  md: "3vw", // theme.breakpoints.up('md')
                  lg: "2.5vw", // theme.breakpoints.up('lg')
                  xl: "2vw", // theme.breakpoints.up('xl')
                },
              }}
              variant="body1"
              color="#5bc0be"
            >
              平鞍座上的菠蘿更換數量： {record.PingOnJo}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "4vw", // theme.breakpoints.up('xs')
                  sm: "3.5vw", // theme.breakpoints.up('sm')
                  md: "3vw", // theme.breakpoints.up('md')
                  lg: "2.5vw", // theme.breakpoints.up('lg')
                  xl: "2vw", // theme.breakpoints.up('xl')
                },
              }}
              variant="body1"
              color="#5bc0be"
            >
              斜鞍座上的菠蘿更換數量： {record.CheOnJo}
            </Typography>
          </CardContent>
          <CardContent
            sx={{
              pointerEvents: "none",
              padding: "0px",
              background: "#164765",
              border: "1px solid grey",
              borderRadius: "1vw",
              opacity: divExpand ? 1 : 0,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "5.5vw", // theme.breakpoints.up('xs')
                  sm: "5vw", // theme.breakpoints.up('sm')
                  md: "3.5vw", // theme.breakpoints.up('md')
                  lg: "3vw", // theme.breakpoints.up('lg')
                  xl: "2.5vw", // theme.breakpoints.up('xl')
                },
                textAlign: "left",
              }}
              color="#5bc0be"
            >
              歷程
            </Typography>
            {timeSlotRecord.map((temp) => {
              if (
                temp.Depth !== null ||
                summary
                  .filter((obj) => {
                    return obj.Time_Slot === temp.Time_Slot;
                  })[0]
                  ?.Grade.join(",").length > 0 ||
                summary
                  .filter((obj) => {
                    return obj.Time_Slot === temp.Time_Slot;
                  })[0]
                  ?.Action.join(",").length > 0
              )
                return (
                  <div
                    className="DetailsPreview"
                    key={temp["Time_Slot_SubmitTime"]}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "3.5vw", // theme.breakpoints.up('xs')
                          sm: "3vw", // theme.breakpoints.up('sm')
                          md: "2vw", // theme.breakpoints.up('md')
                          lg: "1.75vw", // theme.breakpoints.up('lg')
                          xl: "2vw", // theme.breakpoints.up('xl')
                        },
                      }}
                      color="#5bc0be"
                    >
                      {temp.Time_Slot}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "3.5vw", // theme.breakpoints.up('xs')
                          sm: "3vw", // theme.breakpoints.up('sm')
                          md: "2vw", // theme.breakpoints.up('md')
                          lg: "1.75vw", // theme.breakpoints.up('lg')
                          xl: "2vw", // theme.breakpoints.up('xl')
                        },
                      }}
                      color="#5bc0be"
                    >
                      {temp.Depth !== null ? `${temp.Depth} 米` : ""}
                    </Typography>
                    {ready && (
                      <Fragment>
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "3.5vw", // theme.breakpoints.up('xs')
                              sm: "3vw", // theme.breakpoints.up('sm')
                              md: "2vw", // theme.breakpoints.up('md')
                              lg: "1.75vw", // theme.breakpoints.up('lg')
                              xl: "2vw", // theme.breakpoints.up('xl')
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
                    {ready && (
                      <Fragment>
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "3.5vw", // theme.breakpoints.up('xs')
                              sm: "3vw", // theme.breakpoints.up('sm')
                              md: "2vw", // theme.breakpoints.up('md')
                              lg: "1.75vw", // theme.breakpoints.up('lg')
                              xl: "2vw", // theme.breakpoints.up('xl')
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
          <CardActions
            disableSpacing
            sx={{
              justifyContent: "flex-end",
              padding: "3px",
              opacity: divExpand ? 1 : 0,
            }}
          >
            <IconButton
              title="Add"
              sx={{
                color: "white",
                padding: "0",
                textAlign: "right",
              }}
              aria-label="open table"
              onClick={openCorrespondingTable}
              data-record={JSON.stringify(record)}
            >
              <AddIcon
                sx={{
                  fontSize: {
                    xs: "8vw", // theme.breakpoints.up('xs')
                    sm: "6vw", // theme.breakpoints.up('sm')
                    md: "5vw", // theme.breakpoints.up('md')
                    lg: "4vw", // theme.breakpoints.up('lg')
                    xl: "3vw", // theme.breakpoints.up('xl')
                  },
                }}
              />
            </IconButton>
          </CardActions>
        </Card>
        <div className="project">
          <Typography
            sx={{
              fontSize: {
                xs: "5.5vw", // theme.breakpoints.up('xs')
                sm: "5vw", // theme.breakpoints.up('sm')
                md: "3.5vw", // theme.breakpoints.up('md')
                lg: "3vw", // theme.breakpoints.up('lg')
                xl: "2vw", // theme.breakpoints.up('xl')
              },
            }}
            variant="body1"
          >
            {record.Project_Id}
          </Typography>
        </div>
      </div>
      {toggleTable && (
        <DetailsTable
          record={record}
          setToggleTable={setToggleTable}
          setAddedNew={setAddedNew}
          setReady={setReady}
          setSummary={setSummary}
        />
      )}
    </Fragment>
  );
}
