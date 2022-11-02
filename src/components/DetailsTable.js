import "./DetailsTable.css";
import { useTable } from "react-table";
import { useSticky } from "react-table-sticky";
import { useState, useEffect, useRef, useMemo } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function DetailsTable(props) {
  const [data, setData] = useState([
    {
      original: true,
      Time_Slot: "06:30 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "07:00 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "07:30 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "08:00 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "08:30 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "09:00 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "09:30 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "10:00 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "10:30 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "11:00 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "11:30 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "12:00 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "12:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "01:00 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "01:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "02:00 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "02:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "03:00 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "03:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "04:00 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "04:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "05:00 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "05:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "06:00 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "06:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "07:00 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "07:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "08:00 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "08:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "09:00 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "09:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "10:00 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "10:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "11:00 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "11:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "12:00 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "12:30 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "01:00 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "01:30 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "02:00 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "02:30 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "03:00 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "03:30 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "04:00 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "04:30 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "05:00 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "05:30 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "06:00 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      放大: false,
      追通: false,
      執窿: false,
      換水: false,
      換轉杆: false,
      維修: false,
      檢查: false,
      待機: false,
      Remark: "",
    },
  ]);

  const [dataFromSQL, setDataFromSQL] = useState([]);
  const [dataToFetch, setDataToFetch] = useState({});
  const [usedDataFromSQL, setUsedDataFromSQL] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    async function getTimeSlotData() {
      var getDataUrl =
        "https://envisagepj005.azurewebsites.net/getFormRecordDetails";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(props.record),
      };
      const response = await fetch(getDataUrl, options);
      const responseData = await response.json();
      console.log("responseData", responseData);
      console.log(
        "responseData",
        JSON.parse(JSON.stringify(responseData, replacer))
      );
      setDataFromSQL(JSON.parse(JSON.stringify(responseData, replacer)));
    }
    getTimeSlotData();
  }, [props.record]);

  useEffect(() => {
    if (dataFromSQL.length > 0) {
      var res = data.map(
        (obj) => dataFromSQL.find((o) => o.Time_Slot === obj.Time_Slot) || obj
      );
      console.log(res);
      setData(res);
      setUsedDataFromSQL(true);
    } else {
      setUsedDataFromSQL(true);
    }
  }, [dataFromSQL]);

  useEffect(() => {
    if (data.length > 0 && usedDataFromSQL) {
      console.log("data", data);
      console.log("structuredClone", structuredClone(data));
      console.log("Used fetch data");
    }
  }, [data, usedDataFromSQL]);

  useEffect(() => {
    if (Object.keys(dataToFetch).length) {
      console.log("dataToFetch", dataToFetch);
      var mergeDataUrl =
        "https://envisagepj005.azurewebsites.net/mergeFormDetails";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToFetch),
      };
      fetch(mergeDataUrl, options);
    }
  }, [dataToFetch]);

  function replacer(i, val) {
    if (i === "Depth" || i === "Ref_Level") {
      if (val === null) {
        return ""; // change null to empty string
      } else {
        return Number(val); // return unchanged
      }
    } else {
      if (val === null) {
        return ""; // change null to empty string
      } else {
        return val; // return unchanged
      }
    }
  }

  function closeTable() {
    props.setToggleTable(false);
  }

  function toggleSelect(value, column, row) {
    console.log(value);
    console.log(column);
    console.log(row);

    setData((prevState) => {
      const newState = prevState.map((obj) => {
        if (obj.Time_Slot === row.original.Time_Slot) {
          console.log(obj);
          var dt = new Date();
          var keyToChange = column.Header;
          var fetchBody = structuredClone(obj);
          fetchBody[keyToChange] = !fetchBody[keyToChange];
          fetchBody["RecordId"] = props.record.RecordId;
          fetchBody["Date"] = props.record.Date;
          fetchBody["Time_Slot_SubmitTime"] = new Date(
            dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset())
          ).toISOString();
          fetchBody["Depth"] =
            fetchBody["Depth"] === "" ? null : fetchBody["Depth"];
          fetchBody["Ref_Level"] =
            fetchBody["Ref_Level"] === "" ? null : fetchBody["Ref_Level"];
          setDataToFetch(fetchBody);
          return { ...obj, [keyToChange]: !obj[keyToChange] };
        }
        return obj;
      });
      console.log(newState);
      return newState;
    });
  }

  function updateMyData(rowIndex, columnId, value) {
    setData((prevState) =>
      prevState.map((row, index) => {
        if (index === rowIndex) {
          var temp = structuredClone(row);
          var dt = new Date();
          temp[columnId] = value;
          temp["RecordId"] = props.record.RecordId;
          temp["Date"] = props.record.Date;
          temp["Time_Slot_SubmitTime"] = new Date(
            dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset())
          ).toISOString();
          temp["Depth"] = temp["Depth"] === "" ? null : temp["Depth"];
          temp["Ref_Level"] =
            temp["Ref_Level"] === "" ? null : temp["Ref_Level"];
          setDataToFetch(temp);
          return {
            ...prevState[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  }

  function fetchSQL(rowIndex, columnId, value) {
    console.log(data);
    console.log(usedDataFromSQL);
    if (data.length > 0) {
      console.log("data", data);
      console.log(usedDataFromSQL);
      var temp = structuredClone(data);
      console.log("temp fetchSQL", temp);
      var dt = new Date();
      var desire = temp.find((row, index) => {
        return index === rowIndex;
      });
      console.log("desire", desire);
      desire[columnId] = value;
      desire["RecordId"] = props.record.RecordId;
      desire["Date"] = props.record.Date;
      desire["Time_Slot_SubmitTime"] = new Date(
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset())
      ).toISOString();
      desire["Depth"] = desire["Depth"] === "" ? null : desire["Depth"];
      desire["Ref_Level"] =
        desire["Ref_Level"] === "" ? null : desire["Ref_Level"];
      console.log(desire);

      var mergeDataUrl =
        "https://envisagepj005.azurewebsites.net/mergeFormDetails";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(desire),
      };
      fetch(mergeDataUrl, options);
    }
  }

  const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateMyData, // This is a custom function that we supplied to our table instance
  }) => {
    // We need to keep and update the state of the cell normally
    const [value, setValue] = useState(initialValue);

    const onChange = (e) => {
      setValue(e.target.value);
    };

    // We'll only update the external data when the input is blurred
    const onBlur = () => {
      updateMyData(index, id, value);
      /*       fetchSQL(index, id, value);
       */
    };

    // If the initialValue is changed external, sync it up with our state
    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    return (
      <input
        title={"editable"}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={id === "Depth" || id === "Ref_Level" ? "number" : "text"}
      />
    );
  };

  const columns = useMemo(
    () => [
      {
        Header: "RCD Form",
        className: "mainHeader",
        displayNone: true,
        columns: [
          {
            Header: "時間",
            className: "nonInterval nonIntervalFirst",
            rowSpan: "2",
            columns: [
              {
                Header: "時間",
                accessor: "Time_Slot",
                displayNone: true,
                className: "nonInterval nonIntervalFirst Time_Slot",
                sticky: "left",
              },
            ],
          },
          {
            /*   Header: "深度 \n (m)",*/
            Header: () => {
              return (
                <div className="columnFlex">
                  <span>深度</span>
                  <span>(m)</span>
                </div>
              );
            },
            id: "Depth",
            className: "nonInterval nonIntervalFirst withUnit",
            rowSpan: "2",
            columns: [
              {
                Header: () => {
                  return (
                    <div className="columnFlex">
                      <span>深度</span>
                      <span>(m)</span>
                    </div>
                  );
                },
                accessor: "Depth",
                displayNone: true,
                withUnit: true,
                className: "nonInterval nonIntervalFirst Depth withUnit",
                Cell: EditableCell,
              },
            ],
          },
          {
            Header: () => {
              return (
                <div className="columnFlex">
                  <span>凳面平水</span>
                  <span>(mPD)</span>
                </div>
              );
            },
            id: "Ref_Level",
            className: "nonInterval nonIntervalFirst Ref_Level",
            rowSpan: "2",
            columns: [
              {
                Header: () => {
                  return (
                    <div className="columnFlex">
                      <span>凳面平水</span>
                      <span>(mPD)</span>
                    </div>
                  );
                },
                accessor: "Ref_Level",
                displayNone: true,
                withUnit: true,
                className: "nonInterval nonIntervalFirst Ref_Level",
                Cell: EditableCell,
              },
            ],
          },
          {
            Header: "石質類別",
            className: "nonInterval nonIntervalThird grade",
            columns: [
              {
                Header: "一級石",
                accessor: "一級石",
                className: "nonInterval nonIntervalThird vertical ",
                Cell: ({ value, column, row }) => (
                  <ToggleButton
                    sx={{
                      padding: "0",
                      width: "2vw",
                      height: "2vw",
                      position: "unset",
                    }}
                    disableRipple
                    title="一級石"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
              {
                Header: "二級石",
                accessor: "二級石",
                className: "nonInterval nonIntervalThird vertical",
                Cell: ({ value, column, row }) => (
                  <ToggleButton
                    sx={{
                      padding: "0",
                      width: "2vw",
                      height: "2vw",
                      position: "unset",
                    }}
                    disableRipple
                    title="二級石"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
              {
                Header: "三級石",
                accessor: "三級石",
                className: "nonInterval nonIntervalThird vertical",
                Cell: ({ value, column, row }) => (
                  <ToggleButton
                    sx={{
                      padding: "0",
                      width: "2vw",
                      height: "2vw",
                      position: "unset",
                    }}
                    disableRipple
                    title="三級石"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
              {
                Header: "四級石",
                accessor: "四級石",
                className: "nonInterval nonIntervalThird vertical",
                Cell: ({ value, column, row }) => (
                  <ToggleButton
                    sx={{
                      padding: "0",
                      width: "2vw",
                      height: "2vw",
                      position: "unset",
                    }}
                    disableRipple
                    title="四級石"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
              {
                Header: "黃花沙",
                accessor: "黃花沙",
                className: "nonInterval nonIntervalThird vertical",
                Cell: ({ value, column, row }) => (
                  <ToggleButton
                    sx={{
                      padding: "0",
                      width: "2vw",
                      height: "2vw",
                      position: "unset",
                    }}
                    disableRipple
                    title="黃花沙"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
              {
                Header: "石屎",
                accessor: "石屎",
                className: "nonInterval nonIntervalThird vertical",
                Cell: ({ value, column, row }) => (
                  <ToggleButton
                    sx={{
                      padding: "0",
                      width: "2vw",
                      height: "2vw",
                      position: "unset",
                    }}
                    disableRipple
                    title="石屎"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
            ],
          },
          {
            Header: "工作慨況",
            className: "nonInterval nonIntervalThird action",
            columns: [
              {
                Header: "直鑽",
                accessor: "直鑽",
                className: "nonInterval nonIntervalThird vertical",
                Cell: ({ value, column, row }) => (
                  <ToggleButton
                    sx={{
                      padding: "0",
                      width: "2vw",
                      height: "2vw",
                      position: "unset",
                    }}
                    disableRipple
                    title="直鑽"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
              {
                Header: "放大",
                accessor: "放大",
                className: "nonInterval nonIntervalThird vertical",
                Cell: ({ value, column, row }) => (
                  <ToggleButton
                    sx={{
                      padding: "0",
                      width: "2vw",
                      height: "2vw",
                      position: "unset",
                    }}
                    disableRipple
                    title="放大"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
              {
                Header: "追通",
                accessor: "追通",
                className: "nonInterval nonIntervalThird vertical",
                Cell: ({ value, column, row }) => (
                  <ToggleButton
                    sx={{
                      padding: "0",
                      width: "2vw",
                      height: "2vw",
                      position: "unset",
                    }}
                    disableRipple
                    title="追通"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
              {
                Header: "執窿",
                accessor: "執窿",
                className: "nonInterval nonIntervalThird vertical",
                Cell: ({ value, column, row }) => (
                  <ToggleButton
                    sx={{
                      padding: "0",
                      width: "2vw",
                      height: "2vw",
                      position: "unset",
                    }}
                    disableRipple
                    title="執窿"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
              {
                Header: "換水",
                accessor: "換水",
                className: "nonInterval nonIntervalThird vertical",
                Cell: ({ value, column, row }) => (
                  <ToggleButton
                    sx={{
                      padding: "0",
                      width: "2vw",
                      height: "2vw",
                      position: "unset",
                    }}
                    disableRipple
                    title="換水"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
              {
                Header: "換轉杆",
                accessor: "換轉杆",
                className: "nonInterval nonIntervalThird vertical",
                Cell: ({ value, column, row }) => (
                  <ToggleButton
                    sx={{
                      padding: "0",
                      width: "2vw",
                      height: "2vw",
                      position: "unset",
                    }}
                    disableRipple
                    title="換轉杆"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
              {
                Header: "維修",
                accessor: "維修",
                className: "nonInterval nonIntervalThird vertical",
                Cell: ({ value, column, row }) => (
                  <ToggleButton
                    sx={{
                      padding: "0",
                      width: "2vw",
                      height: "2vw",
                      position: "unset",
                    }}
                    disableRipple
                    title="維修"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
              {
                Header: "檢查",
                accessor: "檢查",
                className: "nonInterval nonIntervalThird vertical",
                Cell: ({ value, column, row }) => (
                  <ToggleButton
                    sx={{
                      padding: "0",
                      width: "2vw",
                      height: "2vw",
                      position: "unset",
                    }}
                    disableRipple
                    title="檢查"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
              {
                Header: "待機",
                accessor: "待機",
                className: "nonInterval nonIntervalThird vertical",
                Cell: ({ value, column, row }) => (
                  <ToggleButton
                    sx={{
                      padding: "0",
                      width: "2vw",
                      height: "2vw",
                      position: "unset",
                    }}
                    disableRipple
                    title="待機"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
            ],
          },
          {
            Header: "備注",
            className: "nonInterval nonIntervalThird",
            rowSpan: "2",
            columns: [
              {
                Header: "備注",
                accessor: "Remark",
                displayNone: true,
                className: "nonInterval nonIntervalThird Remark",
                Cell: EditableCell,
              },
            ],
          },
        ],
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        updateMyData,
        fetchSQL,
      },
      useSticky
    );

  return (
    usedDataFromSQL && (
      <div className="tableDiv">
        <div className="closeTable">
          <IconButton onClick={closeTable}>
            <CloseIcon></CloseIcon>
          </IconButton>
        </div>

        <div className="tableInnerDiv" ref={ref}>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps([
                        { className: column.className },
                      ])}
                      rowSpan={`${column.rowSpan ?? column.rowSpan}`}
                      style={column.displayNone ? { display: "none" } : {}}
                    >
                      <div>
                        <span>{column.render("Header")}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps([
                      {
                        style: {
                          borderBottom: "solid 2px lightgreen",
                        },
                      },
                    ])}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td
                          rowSpan={cell.rowSpan}
                          {...cell.getCellProps([
                            {
                              className: cell.column.className,
                            },
                          ])}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  );
}
