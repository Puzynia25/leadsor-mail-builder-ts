import { useState } from "react";
import { FormControl, FormLabel } from "@mui/material";
import { INodeSettingsDialog, INodeSettingsDialogProps } from "../NodeSettingsDialog.types";
import { ScheduledTimeNodeData } from "../../../nodes/Node.types";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

import "./ScheduledTimeNodeSettings.scss";

const ScheduledTimeNodeSettings = ({ data, onUpdateNodeContent }: INodeSettingsDialogProps): INodeSettingsDialog => {
    const scheduledTimeNodeData = data as ScheduledTimeNodeData;

    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs(scheduledTimeNodeData.date) ?? dayjs());
    const [selectedTime, setSelectedTime] = useState<Dayjs | null>(
        dayjs(scheduledTimeNodeData.time, "hh:mm a") ?? dayjs()
    );

    const applyChanges = () => {
        const newData: ScheduledTimeNodeData = {
            ...scheduledTimeNodeData,
            date: selectedDate?.format("YYYY-MM-DD") ?? "",
            time: selectedTime?.format("hh:mm a") ?? "",
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
            </div>
        ),
        applyChanges,
    };
};

export default ScheduledTimeNodeSettings;
