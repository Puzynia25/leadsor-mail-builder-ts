import { useState } from "react";
import { MenuItem, Select, TextField } from "@mui/material";
import { INodeEditor, INodeEditorProps, TimeRange } from "../NodeEditorWrapper.types";
import { WaitNodeData } from "../../nodes/Node.types";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

import "./WaitNodeEditor.scss";

const WaitNodeEditor = ({ data, onUpdateNodeContent }: INodeEditorProps): INodeEditor => {
    const waitNodeData = data as WaitNodeData;

    const [type, setType] = useState<string>(waitNodeData.type ?? "setWaitingTime");
    const [waitingType, setWaitingType] = useState<string>(waitNodeData.waitingType ?? "timePeriod");
    const [calendar, setCalendar] = useState<Dayjs | null>(dayjs(waitNodeData.calendar) ?? dayjs());
    const [timePeriod, setTimePeriod] = useState<number>(waitNodeData.timePeriod ?? 0);
    const [timeRange, setTimeRange] = useState<TimeRange>(waitNodeData.timeRange ?? TimeRange.minute);

    const applyChanges = () => {
        const newData: WaitNodeData = {
            ...waitNodeData,
            type,
            waitingType,
            calendar: calendar ? calendar.format("YYYY-MM-DD") : "",
            timePeriod,
            timeRange,
        };

        onUpdateNodeContent(newData);
    };

    return {
        render: (
            <div className="wait-node-editor__container">
                <div>
                    <p className="wait-node-editor__item-title">Type:</p>
                    <div className="wait-node-editor__select">
                        <Select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            sx={{ width: "100%", bgcolor: "#ffff" }}>
                            <MenuItem value="setWaitingTime">Set waiting time</MenuItem>
                        </Select>
                    </div>
                </div>

                <div>
                    <p className="wait-node-editor__item-title">Waiting type:</p>
                    <div className="wait-node-editor__select">
                        <Select
                            value={waitingType}
                            onChange={(e) => setWaitingType(e.target.value)}
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
                                    onChange={(date) => setCalendar(date)}
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
                                onChange={(e) => setTimePeriod(Number(e.target.value))}
                                sx={{ width: "100%", marginRight: "10px", bgcolor: "#ffff" }}
                                type="number"
                            />
                            <Select
                                value={timeRange}
                                onChange={(e) => setTimeRange(e.target.value as TimeRange)}
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
        applyChanges,
    };
};

export default WaitNodeEditor;
