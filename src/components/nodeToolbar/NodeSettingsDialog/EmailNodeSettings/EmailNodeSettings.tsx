import { useState } from "react";
import { Button, FormControl, FormLabel, MenuItem, Select, TextField } from "@mui/material";
import { INodeSettingsDialog, INodeSettingsDialogProps } from "../NodeSettingsDialog.types";
import { EmailNodeData } from "../../../nodes/Node.types";
import { EditOutlined, RemoveRedEyeOutlined } from "@mui/icons-material";

import "./EmailNodeSettings.scss";

const EmailNodeSettings = ({ data, onUpdateNodeContent }: INodeSettingsDialogProps): INodeSettingsDialog => {
    const emailNodeData = data as EmailNodeData;

    const [email, setEmail] = useState(emailNodeData.email ?? "some email");

    const applyChanges = () => {
        const newData: EmailNodeData = {
            ...emailNodeData,
            email,
        };

        onUpdateNodeContent(newData);
    };

    return {
        render: (
            <div className="node-settings__container">
                <FormControl fullWidth>
                    <FormLabel sx={{ fontWeight: 500, color: "#202020", marginBottom: "10px" }}>
                        Email to be sent:
                    </FormLabel>

                    <Select value={email} onChange={(e) => setEmail(e.target.value)}>
                        <MenuItem value={email}>{email}</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <FormLabel sx={{ fontWeight: 500, color: "#202020", marginBottom: "10px" }}>
                        Email subject:
                    </FormLabel>
                    <TextField value="" size="medium" />
                </FormControl>

                <div className="email-node-settings__preview">
                    <Button variant="contained" sx={{ bgcolor: "ButtonText", opacity: "0.5" }}>
                        <RemoveRedEyeOutlined fontSize="small" sx={{ marginRight: "7px" }} /> Preview
                    </Button>
                    <Button variant="contained" sx={{ bgcolor: "ButtonText", opacity: "0.5" }}>
                        <EditOutlined fontSize="small" sx={{ marginRight: "7px" }} /> Edit email
                    </Button>
                </div>
            </div>
        ),
        applyChanges,
    };
};

export default EmailNodeSettings;
