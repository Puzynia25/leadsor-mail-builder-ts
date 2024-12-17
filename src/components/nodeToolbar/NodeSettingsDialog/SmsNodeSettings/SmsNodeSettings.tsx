import { useState } from "react";
import { FormControl, FormLabel, MenuItem, Select, TextareaAutosize } from "@mui/material";
import { SmsNodeData } from "../../../nodes/Node.types";
import { INodeSettingsDialog, INodeSettingsDialogProps } from "../NodeSettingsDialog.types";

const SmsNodeSettings = ({ data, onUpdateNodeContent }: INodeSettingsDialogProps): INodeSettingsDialog => {
    const smsNodeData = data as SmsNodeData;

    const [sender, setSender] = useState(smsNodeData.sender ?? "some sender");
    const [message, setMessage] = useState(smsNodeData.message ?? "");

    const applyChanges = () => {
        const newData: SmsNodeData = { ...smsNodeData, sender, message };

        onUpdateNodeContent(newData);
    };

    return {
        render: (
            <div className="node-settings__container">
                <FormControl fullWidth>
                    <FormLabel sx={{ fontWeight: 500, color: "#202020", marginBottom: "10px" }}>
                        SMS message to be sent:
                    </FormLabel>
                    <Select value={sender} onChange={(e) => setSender(e.target.value)}>
                        <MenuItem value={sender}>{sender}</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <FormLabel sx={{ fontWeight: 500, color: "#202020", marginBottom: "10px" }}>SMS message:</FormLabel>
                    <TextareaAutosize
                        minRows={3}
                        style={{
                            padding: "8px",
                            borderRadius: "15px",
                            borderColor: "lightgray",
                            resize: "vertical",
                        }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="type sms message..."
                    />
                </FormControl>
            </div>
        ),
        applyChanges,
    };
};

export default SmsNodeSettings;
