import { useState } from "react";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { INodeSettingsDialog, INodeSettingsDialogProps, TimeRange } from "../NodeSettingsDialog.types";
import { WaitNodeData } from "../../../nodes/Node.types";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

import "./WaitNodeSettings.scss";

const WaitNodeSettings = ({ data, onUpdateNodeContent }: INodeSettingsDialogProps): INodeSettingsDialog => {
    const waitNodeData = data as WaitNodeData;

    const [type, setType] = useState<string>(waitNodeData.type ?? "setWaitingTime");
    const [waitingType, setWaitingType] = useState<string>(waitNodeData.waitingType ?? "timePeriod");
    const [calendar, setCalendar] = useState<Dayjs | null>(dayjs(waitNodeData.calendar) ?? dayjs());
    const [timePeriod, setTimePeriod] = useState<number>(waitNodeData.timePeriod ?? 0);
    const [timeRange, setTimeRange] = useState<TimeRange>(waitNodeData.timeRange ?? TimeRange.second);

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
            <div className="node-settings__container">
                <div>
                    <p className="node-settings__item-title">Type:</p>
                    <Select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        sx={{ width: "100%", bgcolor: "#ffff" }}>
                        <MenuItem value="setWaitingTime">Set waiting time</MenuItem>
                    </Select>
                </div>

                <div>
                    <p className="node-settings__item-title">Waiting type:</p>
                    <Select
                        value={waitingType}
                        onChange={(e) => setWaitingType(e.target.value)}
                        sx={{ width: "100%", bgcolor: "#ffff" }}>
                        <MenuItem value="calendar">Date in the calendar</MenuItem>
                        <MenuItem value="timePeriod">Time period</MenuItem>
                    </Select>
                </div>

                {waitingType === "calendar" && (
                    <div>
                        <p className="node-settings__item-title">Date picker:</p>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={calendar}
                                onChange={(date) => setCalendar(date)}
                                sx={{ width: "100%", bgcolor: "#ffff" }}>
                                <TextField />
                            </DatePicker>
                        </LocalizationProvider>
                    </div>
                )}

                {waitingType === "timePeriod" && (
                    <div>
                        <p className="node-settings__item-title">Enter the time period:</p>
                        <div className="node-settings__custom-group">
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
                                {Object.values(TimeRange).map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                )}
            </div>
        ),
        advanced: (
            <div className="wait-advanced">
                <div className="wait-advanced__item">
                    <div className="wait-advanced__text">
                        <h3>Release all waiting contacts</h3>
                        <p>
                            This option releases all waiting contacts immediately. Keep in mind that these contacts will
                            immediately continue further into the next node. If no other node is connected, the contacts
                            will leave the automation workflow.
                        </p>
                    </div>
                    <div className="wait-advanced__button">
                        <Button
                            variant="outlined"
                            onClick={(e) => console.log(e.target)}
                            sx={{
                                fontSize: "0.6rem",
                                color: "#555",
                                borderColor: "#555",
                                backgroundColor: "#e1e1e1",
                            }}>
                            Release contacts
                        </Button>
                    </div>
                </div>
                <div className="wait-advanced__item">
                    <div className="wait-advanced__text">
                        <h3>Reschedule waiting time of contacts that are already waiting</h3>
                        <p>
                            If you change the wait time in a previously running workflow, this change only affects new
                            contacts coming into the node. Contacts that had been waiting in this node before it was
                            edited will still wait for the originally set period. If you also want to change the wait
                            time for contacts that are already waiting, turn this option on.
                        </p>
                    </div>

                    <div className="wait-advanced__button">
                        <Button
                            variant="outlined"
                            onClick={(e) => console.log(e.target)}
                            sx={{
                                fontSize: "0.6rem",
                                color: "#555",
                                borderColor: "#555",
                                backgroundColor: "#e1e1e1",
                            }}>
                            Update waiting time
                        </Button>
                    </div>
                </div>
            </div>
        ),
        applyChanges,
    };
};

export default WaitNodeSettings;
