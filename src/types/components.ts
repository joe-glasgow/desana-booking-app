import { IUIDate } from "./utils";
import * as React from "react";
import { SelectChangeEvent } from "@mui/material/Select";

export interface IDateTabs {
  tabDates: IUIDate[];
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface ITimeForm {
  items: string[];
}

export interface ITimeSelect {
  items: string[];
  onChange: (e: SelectChangeEvent) => void;
  value: string;
}
