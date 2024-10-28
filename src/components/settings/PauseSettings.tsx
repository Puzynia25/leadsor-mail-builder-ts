import { useState } from "react";
import { MenuItem, Select, TextField } from "@mui/material";
import { ISettingsMenu, ISettingsMenuProps } from "./SettingsMenu.types";
import { PauseNodeData, PauseNodeType } from "../nodes/Node.types";

import "./PauseSettings.scss";

const PauseSettings = ({ node, onUpdateNodeContent }: ISettingsMenuProps): ISettingsMenu => {
    const pauseNode = node as PauseNodeType;

    const [pause, setPause] = useState(pauseNode.data.pause);
    const [timeRange, setTimeRange] = useState("hours");

    const createNewNode = (newData: PauseNodeData): PauseNodeType => {
        const newNode: PauseNodeType = {
            ...pauseNode,
            data: newData,
        };

        return newNode;
    };

    const handleUpdatePause = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newData: PauseNodeData = {
            ...pauseNode.data,
            pause: Number(e.target.value),
        };

        setPause(Number(e.target.value));
        onUpdateNodeContent(pauseNode.id, createNewNode(newData));
    };

    const handleUpdateTimeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData: PauseNodeData = {
            ...pauseNode.data,
            timeRange: e.target.value,
        };

        setTimeRange(e.target.value);
        onUpdateNodeContent(pauseNode.id, createNewNode(newData));
    };

    return {
        render: (
            <div>
                <p>Enter the pause duration:</p>
                <div className="pause-settings__content">
                    <TextField
                        value={pause}
                        size="medium"
                        onChange={handleUpdatePause}
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
