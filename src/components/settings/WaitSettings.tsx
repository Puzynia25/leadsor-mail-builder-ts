import { useState } from "react";
import { MenuItem, Select, TextField } from "@mui/material";
import { ISettingsMenu, ISettingsMenuProps } from "./SettingsMenu.types";
import { WaitNodeData, WaitNodeType } from "../nodes/Node.types";

import "./WaitSettings.scss";

const PauseSettings = ({ node, onUpdateNodeContent }: ISettingsMenuProps): ISettingsMenu => {
    const waitNode = node as WaitNodeType;

    const [pause, setPause] = useState(waitNode.data.wait);
    const [timeRange, setTimeRange] = useState("hours");

    const createNewNode = (newData: WaitNodeData): WaitNodeType => {
        const newNode: WaitNodeType = {
            ...waitNode,
            data: newData,
        };

        return newNode;
    };

    const handleUpdateWait = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newData: WaitNodeData = {
            ...waitNode.data,
            wait: Number(e.target.value),
        };

        setPause(Number(e.target.value));
        onUpdateNodeContent(waitNode.id, createNewNode(newData));
    };

    const handleUpdateTimeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData: WaitNodeData = {
            ...waitNode.data,
            timeRange: e.target.value,
        };

        setTimeRange(e.target.value);
        onUpdateNodeContent(waitNode.id, createNewNode(newData));
    };

    return {
        render: (
            <div>
                <p>Enter the pause duration:</p>
                <div className="pause-settings__content">
                    <TextField
                        value={pause}
                        size="medium"
                        onChange={handleUpdateWait}
                        sx={{ width: "80px", bgcolor: "#ffff" }}
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

export default PauseSettings;
