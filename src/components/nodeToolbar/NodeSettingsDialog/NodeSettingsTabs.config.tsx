import { ReactNode } from "react";
import { FormControl, FormLabel, TextField } from "@mui/material";

import "./NodeSettingsDialog.scss";

export interface TabConfig {
    key: string;
    label: string;
    visible: (type: string) => boolean;
    content: (
        data: any,
        nodeName: string,
        setNodeName: (name: string) => void,
        render: ReactNode,
        advanced?: ReactNode
    ) => ReactNode;
}

export const getTabsConfig = (): TabConfig[] => [
    {
        key: "settings",
        label: "Settings",
        visible: () => true,
        content: (_, __, ___, render) => render,
    },
    {
        key: "advanced",
        label: "Advanced",
        visible: (type) => type === "wait",
        content: (_, __, ___, ____, advanced) => advanced,
    },
    {
        key: "nodeName",
        label: "Node Name",
        visible: () => true,
        content: (_, nodeName, setNodeName) => (
            <FormControl fullWidth>
                <FormLabel sx={{ fontWeight: 500, color: "#202020", marginBottom: "10px" }}>Node name:</FormLabel>
                <TextField
                    value={nodeName}
                    onChange={(e) => setNodeName(e.target.value)}
                    fullWidth
                    sx={{ bgcolor: "#fff" }}
                />
            </FormControl>
        ),
    },
];
