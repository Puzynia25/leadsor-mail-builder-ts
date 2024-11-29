import { ChangeEventHandler, useState } from "react";
import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { INodeEditor, INodeEditorProps } from "./NodeEditor.types";
import { WaitNodeData } from "../nodes/Node.types";

import "./WaitNodeEditor.scss";

const WaitNodeEditor = ({ data, onUpdateNodeContent }: INodeEditorProps): INodeEditor => {
    const waitNodeData = data as WaitNodeData;

    const [wait, setPause] = useState(waitNodeData.wait);
    const [timeRange, setTimeRange] = useState("hours");

    const handleUpdateWait: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        const newData: WaitNodeData = {
            ...waitNodeData,
            wait: Number(e.target.value),
        };

        setPause(Number(e.target.value));
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

    return {
        render: (
            <div>
                <p>Enter the wait duration:</p>
                <div className="wait-node-editor__content">
                    <TextField
                        value={wait}
                        size="medium"
                        onChange={handleUpdateWait}
                        sx={{ width: "80px", bgcolor: "#ffff" }}
                        type="number"
                    />
                    <Select value={timeRange} onChange={handleUpdateTimeRange} sx={{ bgcolor: "#ffff" }}>
                        <MenuItem value="seconds">seconds</MenuItem>
                        <MenuItem value="minutes">minutes</MenuItem>
                        <MenuItem value="hours">hours</MenuItem>
                    </Select>
                </div>
            </div>
        ),
    };
};

export default WaitNodeEditor;
