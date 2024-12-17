import { useState } from "react";
import { Divider, FormControl, FormLabel, MenuItem, Select, TextField } from "@mui/material";
import { INodeSettingsDialog, INodeSettingsDialogProps, TimeRange } from "../NodeSettingsDialog.types";
import { RepeatNodeData } from "../../../nodes/Node.types";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

import "./RepeatNodeSettings.scss";

const RepeatNodeSettings = ({ data, onUpdateNodeContent }: INodeSettingsDialogProps): INodeSettingsDialog => {
    const scheduledTimeNodeData = data as RepeatNodeData;

    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs(scheduledTimeNodeData.date) ?? dayjs());
    const [selectedTime, setSelectedTime] = useState<Dayjs | null>(
        dayjs(scheduledTimeNodeData.time, "hh:mm a") ?? dayjs()
    );
    const [repeatInputs, setRepeatInputs] = useState({
        value: scheduledTimeNodeData.repeatValue ?? 1,
        unit: scheduledTimeNodeData.repeatUnit ?? TimeRange.week,
    });

    const handleRepeatChange = (key: "value" | "unit", newValue: string | number) => {
        setRepeatInputs((prev) => ({
            ...prev,
            [key]: newValue,
        }));
    };

    const applyChanges = () => {
        const newData: RepeatNodeData = {
            ...scheduledTimeNodeData,
            date: selectedDate?.format("YYYY-MM-DD") ?? "",
            time: selectedTime?.format("hh:mm a") ?? "",
            repeatValue: repeatInputs.value,
            repeatUnit: repeatInputs.unit,
        };

        onUpdateNodeContent(newData);
    };

    return {
        render: (
            <div className="node-settings__container">
                <div className="node-settings__custom-group">
                    <FormControl fullWidth>
                        <FormLabel sx={{ fontWeight: 500, color: "#202020", marginBottom: "10px" }}>
                            Select date:
                        </FormLabel>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker value={selectedDate} onChange={(newDate) => setSelectedDate(newDate)} />
                        </LocalizationProvider>
                    </FormControl>

                    <FormControl fullWidth>
                        <FormLabel sx={{ fontWeight: 500, color: "#202020", marginBottom: "10px" }}>
                            Select time:
                        </FormLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker value={selectedTime} onChange={(newTime) => setSelectedTime(newTime)} />
                        </LocalizationProvider>
                    </FormControl>
                </div>
                <Divider flexItem />
                <div>
                    <p className="node-settings__item-subtitle">Then repeat every</p>
                    <div className="node-settings__custom-group">
                        <FormControl fullWidth>
                            <FormLabel sx={{ fontWeight: 500, color: "#202020", marginBottom: "10px" }}>
                                Value:
                            </FormLabel>
                            <TextField
                                type="number"
                                value={repeatInputs.value}
                                onChange={(e) => handleRepeatChange("value", Number(e.target.value))}
                                sx={{ bgcolor: "#fff" }}
                            />
                        </FormControl>

                        <FormControl fullWidth>
                            <FormLabel sx={{ fontWeight: 500, color: "#202020", marginBottom: "10px" }}>
                                Unit:
                            </FormLabel>
                            <Select
                                value={repeatInputs.unit}
                                onChange={(e) => handleRepeatChange("unit", e.target.value as TimeRange)}>
                                {Object.values(TimeRange).map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
        ),
        applyChanges,
    };
};

export default RepeatNodeSettings;
