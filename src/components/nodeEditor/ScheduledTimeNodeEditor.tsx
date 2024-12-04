import { ChangeEventHandler, RefAttributes, useState } from "react";
import { TextField } from "@mui/material";
import { INodeEditor, INodeEditorProps } from "./NodeEditor.types";
import { ScheduledTimeNodeData } from "../nodes/Node.types";
import { DatePicker, LocalizationProvider, TimePicker, TimePickerProps } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

import "./ScheduledTimeNodeEditor.scss";

const ScheduledTimeNodeEditor = ({ data, onUpdateNodeContent }: INodeEditorProps): INodeEditor => {
    const scheduledTimeNodeData = data as ScheduledTimeNodeData;

    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
    const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs());

    const handleUpdateNodeDate = (newDate: Dayjs | null) => {
        const newData: ScheduledTimeNodeData = {
            ...scheduledTimeNodeData,
            date: newDate?.toISOString() ?? "",
        };

        setSelectedDate(newDate);
        onUpdateNodeContent(newData);
    };

    const handleUpdateNodeTime = (newTime: Dayjs | null) => {
        const newData: ScheduledTimeNodeData = {
            ...scheduledTimeNodeData,
            time: newTime?.toISOString() ?? "",
        };

        setSelectedTime(newTime);
        onUpdateNodeContent(newData);
    };

    return {
        render: (
            <div className="scheduledTime-node-editor__container">
                <div>
                    <p className="scheduledTime-node-editor__item-title">Select date:</p>
                    <div className="scheduledTime-node-editor__time-period">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={selectedDate}
                                onChange={handleUpdateNodeDate}
                                sx={{ width: "100%", bgcolor: "#ffff" }}>
                                <TextField />
                            </DatePicker>
                        </LocalizationProvider>
                    </div>
                </div>
                <div>
                    <p className="scheduledTime-node-editor__item-title">Select time:</p>
                    <div className="scheduledTime-node-editor__time-period">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                                value={selectedTime}
                                onChange={handleUpdateNodeTime}
                                sx={{ width: "100%", bgcolor: "#ffff" }}>
                                <TextField />
                            </TimePicker>
                        </LocalizationProvider>
                    </div>
                </div>
            </div>
        ),
    };
};

export default ScheduledTimeNodeEditor;
