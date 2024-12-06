import { ChangeEventHandler, useState } from "react";
import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { INodeEditor, INodeEditorProps, TimeRange } from "../NodeEditorWrapper.types";
import { WaitNodeData } from "../../nodes/Node.types";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

import "./WaitNodeEditor.scss";

const WaitNodeEditor = ({ data, onUpdateNodeContent }: INodeEditorProps): INodeEditor => {
    const waitNodeData = data as WaitNodeData;

    const [type, setType] = useState<string>("setWaitingTime");
    const [waitingType, setWaitingType] = useState<string>("timePeriod");
    const [calendar, setCalendar] = useState<Dayjs | null>(dayjs());
    const [timePeriod, setTimePeriod] = useState<number>(0);
    const [timeRange, setTimeRange] = useState<TimeRange>(TimeRange.minute);

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
        console.log(waitingType, "handleUpdateWaitingType");

        setWaitingType(e.target.value);
        onUpdateNodeContent(newData);
    };

    const handleUpdateTimePeriod: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        const newData: WaitNodeData = {
            ...waitNodeData,
            timePeriod: Number(e.target.value),
        };

        console.log(timePeriod, "handleUpdateTimePeriod");

        setTimePeriod(Number(e.target.value));
        onUpdateNodeContent(newData);
    };

    const handleUpdateTimeRange = (e: SelectChangeEvent<string>) => {
        const newTimeRange = e.target.value as TimeRange;

        const newData: WaitNodeData = {
            ...waitNodeData,
            timeRange: newTimeRange,
        };
        console.log(timeRange, "handleUpdateTimeRange");

        setTimeRange(newTimeRange);
        onUpdateNodeContent(newData);
    };

    const handleUpdateCalendar = (date: Dayjs | null) => {
        const newCalendar = date?.format("YYYY-MM-DD");

        const newData: WaitNodeData = {
            ...waitNodeData,
            calendar: newCalendar ?? "",
        };
        console.log(calendar, "handleUpdateCalendar");

        setCalendar(date);
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
                                <MenuItem value={TimeRange.minute}>minute</MenuItem>
                                <MenuItem value={TimeRange.hour}>hour</MenuItem>
                                <MenuItem value={TimeRange.week}>week</MenuItem>
                                <MenuItem value={TimeRange.month}>month</MenuItem>
                                <MenuItem value={TimeRange.year}>year</MenuItem>
                            </Select>
                        </div>
                    </div>
                )}
            </div>
        ),
    };
};

export default WaitNodeEditor;
