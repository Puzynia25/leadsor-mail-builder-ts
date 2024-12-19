import { useState } from "react";
import { Divider, FormControl, FormControlLabel, FormLabel, MenuItem, Select, Switch, TextField } from "@mui/material";
import { INodeSettingsDialog, INodeSettingsDialogProps, TimeRange } from "../NodeSettingsDialog.types";
import { RepeatNodeData } from "../../../nodes/Node.types";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

import "./RepeatNodeSettings.scss";

const RepeatNodeSettings = ({ data, onUpdateNodeContent }: INodeSettingsDialogProps): INodeSettingsDialog => {
    const repeatNodeData = data as RepeatNodeData;

    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs(repeatNodeData.date) ?? dayjs());
    const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs(repeatNodeData.time, "hh:mm a") ?? dayjs());
    const [repeatInputs, setRepeatInputs] = useState({
        value: repeatNodeData.repeatValue ?? 1,
        unit: repeatNodeData.repeatUnit ?? TimeRange.week,
    });

    const [isScheduled, setIsScheduled] = useState<boolean>(false);
    const [scheduledDate, setScheduledDate] = useState<Dayjs | null>(dayjs(repeatNodeData.scheduledDate) ?? dayjs());
    const [scheduledTime, setScheduledTime] = useState<Dayjs | null>(
        dayjs(repeatNodeData.scheduledTime, "hh:mm a") ?? dayjs()
    );

    const handleRepeatChange = (key: "value" | "unit", newValue: string | number) => {
        setRepeatInputs((prev) => ({
            ...prev,
            [key]: newValue,
        }));
    };

    const applyChanges = () => {
        const newData: RepeatNodeData = {
            ...repeatNodeData,
            date: selectedDate?.format("YYYY-MM-DD") ?? "",
            time: selectedTime?.format("hh:mm a") ?? "",
            repeatValue: repeatInputs.value,
            repeatUnit: repeatInputs.unit,
            scheduledDate: scheduledDate?.format("YYYY-MM-DD") ?? null,
            scheduledTime: scheduledTime?.format("hh:mm a") ?? null,
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
                <Divider flexItem />
                <div>
                    <FormControlLabel
                        control={
                            <Switch
                                color="success"
                                checked={isScheduled}
                                onChange={(e) => setIsScheduled(e.target.checked)}
                            />
                        }
                        label="Scheduled activation"
                        sx={{ marginBottom: "20px" }}
                    />
                    <div className="node-settings__custom-group">
                        <FormControl fullWidth>
                            <FormLabel sx={{ fontWeight: 500, color: "#202020", marginBottom: "10px" }}>
                                Select date:
                            </FormLabel>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    value={scheduledDate}
                                    onChange={(newDate) => setScheduledDate(newDate)}
                                    disabled={!isScheduled}
                                />
                            </LocalizationProvider>
                        </FormControl>

                        <FormControl fullWidth>
                            <FormLabel sx={{ fontWeight: 500, color: "#202020", marginBottom: "10px" }}>
                                Select time:
                            </FormLabel>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <TimePicker
                                    value={scheduledTime}
                                    onChange={(newTime) => setScheduledTime(newTime)}
                                    disabled={!isScheduled}
                                />
                            </LocalizationProvider>
                        </FormControl>
                    </div>
                </div>
            </div>
        ),
        applyChanges,
    };
};

export default RepeatNodeSettings;
