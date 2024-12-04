import { ChangeEventHandler, useState } from "react";
import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { INodeEditor, INodeEditorProps } from "./NodeEditor.types";
import { WaitNodeData } from "../nodes/Node.types";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

import "./WaitNodeEditor.scss";

const WaitNodeEditor = ({ data, onUpdateNodeContent }: INodeEditorProps): INodeEditor => {
    const waitNodeData = data as WaitNodeData;

    const [type, setType] = useState<string>("setWaitingTime");
    const [waitingType, setWaitingType] = useState<string>("timePeriod");
    const [calendar, setCalendar] = useState<Dayjs | null>(dayjs());
    const [timePeriod, setTimePeriod] = useState<number>(waitNodeData.wait);
    const [timeRange, setTimeRange] = useState<string>("minute");

    const handleUpdateTimePeriod: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        const newData: WaitNodeData = {
            ...waitNodeData,
            wait: Number(e.target.value),
        };

        setTimePeriod(Number(e.target.value));
        onUpdateNodeContent(newData);
    };

    const handleUpdateTimeRange = (e: SelectChangeEvent<string>) => {
        const newData: WaitNodeData = {
            ...waitNodeData,
            timeRange: e.target.value,
        };

        setTimeRange(e.target.value);
        onUpdateNodeContent(newData);
    };

    const handleUpdateType = (e: SelectChangeEvent<string>) => {
        const newData: WaitNodeData = {
            ...waitNodeData,
            type: e.target.value,
        };

        setType(e.target.value);
        onUpdateNodeContent(newData);
    };

    const handleUpdateWaitingType = (e: SelectChangeEvent<string>) => {
        const newData: WaitNodeData = {
            ...waitNodeData,
            waitingType: e.target.value,
        };

        setWaitingType(e.target.value);
        onUpdateNodeContent(newData);
    };

    const handleUpdateCalendar: ChangeEventHandler<HTMLTextAreaElement> = (newCalendar) => {
        const newData: WaitNodeData = {
            ...waitNodeData,
            calendar: newCalendar?.toISOString() ?? "",
        };
        console.log(calendar, "handleUpdateCalendar");

        setCalendar(newCalendar);
        onUpdateNodeContent(newData);
    };

    return {
        render: (
            <div className="wait-node-editor__container">
                <div>
                    <p className="wait-node-editor__item-title">Type:</p>
                    <div className="wait-node-editor__select">
                        <Select value={type} onChange={handleUpdateType} sx={{ width: "100%", bgcolor: "#ffff" }}>
                            <MenuItem value="setWaitingTime">Set waiting time</MenuItem>
                        </Select>
                    </div>
                </div>

                <div>
                    <p className="wait-node-editor__item-title">Waiting type:</p>
                    <div className="wait-node-editor__select">
                        <Select
                            value={waitingType}
                            onChange={handleUpdateWaitingType}
                            sx={{ width: "100%", bgcolor: "#ffff" }}>
                            <MenuItem value="calendar">Date in the calendar</MenuItem>
                            <MenuItem value="timePeriod">Time period</MenuItem>
                        </Select>
                    </div>
                </div>

                {waitingType === "calendar" && (
                    <div>
                        <p className="wait-node-editor__item-title">Date picker:</p>
                        <div className="wait-node-editor__select">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    value={calendar}
                                    onChange={handleUpdateCalendar}
                                    sx={{ width: "100%", bgcolor: "#ffff" }}>
                                    <TextField />
                                </DatePicker>
                            </LocalizationProvider>
                        </div>
                    </div>
                )}

                {waitingType === "timePeriod" && (
                    <div>
                        <p className="wait-node-editor__item-title">Enter the time period:</p>
                        <div className="wait-node-editor__time-period">
                            <TextField
                                value={timePeriod}
                                size="medium"
                                onChange={handleUpdateTimePeriod}
                                sx={{ width: "100%", marginRight: "10px", bgcolor: "#ffff" }}
                                type="number"
                            />
                            <Select
                                value={timeRange}
                                onChange={handleUpdateTimeRange}
                                sx={{ width: "100%", bgcolor: "#ffff" }}>
                                <MenuItem value="minute">minute</MenuItem>
                                <MenuItem value="hour">hour</MenuItem>
                                <MenuItem value="week">week</MenuItem>
                                <MenuItem value="month">month</MenuItem>
                                <MenuItem value="year">year</MenuItem>
                            </Select>
                        </div>
                    </div>
                )}
            </div>
        ),
    };
};

export default WaitNodeEditor;
