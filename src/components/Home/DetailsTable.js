import "./DetailsTable.css";
import { useTable } from "react-table";
import { useSticky } from "react-table-sticky";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth0 } from "@auth0/auth0-react";
import { DateTime } from "luxon";

export default function DetailsTable({
  record,
  setToggleTable,
  setAddedNew,
  setReady,
  setSummary,
}) {
  const { getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState([
    {
      original: true,
      Time_Slot: "06:30 AM",
      Depth: "",
      樁通長度: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "07:00 AM",
      Depth: "",
      樁通長度: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "07:30 AM",
      Depth: "",
      樁通長度: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "08:00 AM",
      Depth: "",
      樁通長度: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "08:30 AM",
      Depth: "",
      樁通長度: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "09:00 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      樁通長度: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "09:30 AM",
      樁通長度: "",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "10:00 AM",
      樁通長度: "",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "10:30 AM",
      Depth: "",
      樁通長度: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "11:00 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      樁通長度: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "11:30 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      樁通長度: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "12:00 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      樁通長度: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "12:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      樁通長度: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "01:00 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      樁通長度: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "01:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      樁通長度: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "02:00 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      樁通長度: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "02:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      樁通長度: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "03:00 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      樁通長度: "",
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "03:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      樁通長度: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "04:00 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      樁通長度: "",
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "04:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      樁通長度: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "05:00 PM",
      Depth: "",
      樁通長度: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "05:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      樁通長度: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "06:00 PM",
      Depth: "",
      樁通長度: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "06:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      樁通長度: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "07:00 PM",
      Depth: "",
      樁通長度: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "07:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      樁通長度: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "08:00 PM",
      Depth: "",
      樁通長度: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "08:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      樁通長度: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "09:00 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      樁通長度: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "09:30 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      樁通長度: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "10:00 PM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      樁通長度: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "10:30 PM",
      Depth: "",
      樁通長度: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "11:00 PM",
      Depth: "",
      樁通長度: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "11:30 PM",
      Depth: "",
      樁通長度: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "12:00 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      樁通長度: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "12:30 AM",
      Depth: "",
      樁通長度: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "01:00 AM",
      Depth: "",
      樁通長度: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "01:30 AM",
      Depth: "",
      樁通長度: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "02:00 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      樁通長度: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "02:30 AM",
      樁通長度: "",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "03:00 AM",
      樁通長度: "",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "03:30 AM",
      Depth: "",
      樁通長度: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "04:00 AM",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      樁通長度: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "04:30 AM",
      樁通長度: "",
      Depth: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "05:00 AM",
      Depth: "",
      樁通長度: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "05:30 AM",
      Depth: "",
      樁通長度: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
    {
      Time_Slot: "06:00 AM",
      Depth: "",
      樁通長度: "",
      Time_Slot_SubmitTime: "",
      Time_Slot_ISO: "",
      Ref_Level: "",
      一級石: false,
      二級石: false,
      三級石: false,
      四級石: false,
      黃花沙: false,
      石屎: false,
      直鑽: false,
      追通鑽: false,
      放大: false,
      換水清底: false,
      維修: false,
      加鑽杆: false,
      裝嵌: false,
      拆機: false,
      檢查油水: false,
      磨通: false,
      換鑽頭: false,
      清沙缸: false,
      執窿: false,
      待機: false,
      Remark: "",
    },
  ]);

  const [dataFromSQL, setDataFromSQL] = useState([]);
  const [dataToFetch, setDataToFetch] = useState({});
  const [usedDataFromSQL, setUsedDataFromSQL] = useState(false);
  const [selected, setSelected] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    async function getTimeSlotData() {
      const accessToken = await getAccessTokenSilently({
        audience: "https://envisagepj005.azurewebsites.net",
      });
      var getDataUrl =
        "https://envisagepj005.azurewebsites.net/getFormRecordDetails";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
        body: JSON.stringify(record),
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
  }, [record, getAccessTokenSilently]);

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
    async function mergeData() {
      const accessToken = await getAccessTokenSilently({
        audience: "https://envisagepj005.azurewebsites.net",
      });
      var mergeDataUrl =
        "https://envisagepj005.azurewebsites.net/mergeFormDetails";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
        body: JSON.stringify(dataToFetch),
      };
      fetch(mergeDataUrl, options);
    }
    if (Object.keys(dataToFetch).length) {
      console.log("dataToFetch", dataToFetch);
      mergeData();
    }
  }, [dataToFetch, getAccessTokenSilently]);

  function replacer(i, val) {
    if (i === "Depth" || i === "Ref_Level" || i === "樁通長度") {
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
    setToggleTable(false);
    setAddedNew(true);
    /*  setReady(false); */
    setSummary([]);
  }
  const toggleSelect = useCallback(
    (value, column, row) => {
      console.log(value);
      console.log(column);
      console.log(row);

      setData((prevState) => {
        const newState = prevState.map((obj) => {
          if (obj.Time_Slot === row.original.Time_Slot) {
            console.log(obj);
            var dt = new Date();
            var keyToChange = column.id;
            var fetchBody = structuredClone(obj);
            fetchBody[keyToChange] = !fetchBody[keyToChange];
            fetchBody["RecordId"] = record.RecordId;
            fetchBody["Date"] = record.Date;
            fetchBody["Time_Slot_SubmitTime"] = new Date(
              dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset())
            ).toISOString();
            fetchBody["Time_Slot_ISO"] = DateTime.fromFormat(
              fetchBody["Time_Slot"],
              "t",
              { zone: "utc" }
            ).toString();
            console.log("Time_Slot_ISO", fetchBody["Time_Slot_ISO"]);
            fetchBody["Depth"] =
              fetchBody["Depth"] === "" ? null : fetchBody["Depth"];
            fetchBody["Ref_Level"] =
              fetchBody["Ref_Level"] === "" ? null : fetchBody["Ref_Level"];
            fetchBody["樁通長度"] =
              fetchBody["樁通長度"] === "" ? null : fetchBody["樁通長度"];
            setDataToFetch(fetchBody);
            return { ...obj, [keyToChange]: !obj[keyToChange] };
          }
          return obj;
        });
        console.log(newState);
        return newState;
      });
      setSelected(row.index);
    },
    [record]
  );
  /* function toggleSelect(value, column, row) {
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
          fetchBody["RecordId"] = record.RecordId;
          fetchBody["Date"] = record.Date;
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
    setSelected(row.index);
  } */

  function updateMyData(rowIndex, columnId, value) {
    setData((prevState) =>
      prevState.map((row, index) => {
        if (index === rowIndex) {
          var temp = structuredClone(row);
          var dt = new Date();
          temp[columnId] = value;
          temp["RecordId"] = record.RecordId;
          temp["Date"] = record.Date;
          temp["Time_Slot_SubmitTime"] = new Date(
            dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset())
          ).toISOString();
          temp["Time_Slot_ISO"] = DateTime.fromFormat(temp["Time_Slot"], "t", {
            zone: "utc",
          }).toString();
          console.log("Time_Slot_ISO", temp["Time_Slot_ISO"]);

          temp["Depth"] = temp["Depth"] === "" ? null : temp["Depth"];
          temp["Ref_Level"] =
            temp["Ref_Level"] === "" ? null : temp["Ref_Level"];
          temp["樁通長度"] = temp["樁通長度"] === "" ? null : temp["樁通長度"];
          setDataToFetch(temp);
          return {
            ...prevState[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
    setSelected(rowIndex);
  }

  async function fetchSQL(rowIndex, columnId, value) {
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
      desire["RecordId"] = record.RecordId;
      desire["Date"] = record.Date;
      desire["Time_Slot_SubmitTime"] = new Date(
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset())
      ).toISOString();
      desire["Time_Slot_ISO"] = DateTime.fromFormat(desire["Time_Slot"], "t", {
        zone: "utc",
      }).toString();
      console.log("Time_Slot_ISO", desire["Time_Slot_ISO"]);
      desire["Depth"] = desire["Depth"] === "" ? null : desire["Depth"];
      desire["Ref_Level"] =
        desire["Ref_Level"] === "" ? null : desire["Ref_Level"];
      desire["樁通長度"] =
        desire["樁通長度"] === "" ? null : desire["樁通長度"];
      console.log(desire);
      const accessToken = await getAccessTokenSilently({
        audience: "https://envisagepj005.azurewebsites.net",
      });
      var mergeDataUrl =
        "https://envisagepj005.azurewebsites.net/mergeFormDetails";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
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
      console.log(index);
      console.log(id);
      console.log(value);
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
        type={
          id === "Depth" || id === "Ref_Level" || id === "樁通長度"
            ? "number"
            : "text"
        }
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
            Header: () => {
              return (
                <div className="columnFlex">
                  <span>樁通長度</span>
                  <span>(m)</span>
                </div>
              );
            },
            id: "樁通長度",
            className: "nonInterval nonIntervalFirst withUnit",
            rowSpan: "2",
            columns: [
              {
                Header: () => {
                  return (
                    <div className="columnFlex">
                      <span>樁通長度</span>
                      <span>(m)</span>
                    </div>
                  );
                },
                id: "樁通長度",
                accessor: "樁通長度",
                displayNone: true,
                Cell: EditableCell,
                className: "nonInterval nonIntervalFirst withUnit",
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
            Header: "工作概況",
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
                Header: "追通鑽",
                accessor: "追通鑽",
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
                    title="追通鑽"
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
                Header: "換水/清底",
                accessor: "換水清底",
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
                    title="換水/清底"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
              {
                Header: "加鑽杆",
                accessor: "加鑽杆",
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
                    title="加鑽杆"
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
                Header: "裝嵌",
                accessor: "裝嵌",
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
                    title="裝嵌"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
              {
                Header: "拆機",
                accessor: "拆機",
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
                    title="拆機"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
              {
                Header: "檢查油水",
                accessor: "檢查油水",
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
                    title="檢查油水"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
              {
                Header: "磨通",
                accessor: "磨通",
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
                    title="磨通"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
              {
                Header: "換鑽頭",
                accessor: "換鑽頭",
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
                    title="換鑽頭"
                    value="check"
                    selected={value}
                    onChange={() => toggleSelect(value, column, row)}
                  >
                    {value && <CheckIcon />}
                  </ToggleButton>
                ),
              },
              {
                Header: "清沙缸",
                accessor: "清沙缸",
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
                    title="清沙缸"
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
    [toggleSelect]
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
          <IconButton onClick={closeTable} sx={{ padding: "0px" }}>
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
                /*    console.log(row); */
                return (
                  <tr
                    {...row.getRowProps([
                      {
                        style: {
                          borderBottom: "solid 2px lightgreen",
                          backgroundColor:
                            row.index === selected ? "#beed92" : "#ffffff",
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
