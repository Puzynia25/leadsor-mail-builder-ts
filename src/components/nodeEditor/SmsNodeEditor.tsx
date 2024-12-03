import { useState } from "react";
import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { INodeEditor, INodeEditorProps } from "./NodeEditor.types";
import { EmailNodeData } from "../nodes/Node.types";

const SmsNodeEditor = ({ data, onUpdateNodeContent }: INodeEditorProps): INodeEditor => {
    const emailNodeData = data as EmailNodeData;

    const [sender, setSender] = useState("some sender");

    const handleUpdateSender = (e: SelectChangeEvent<string>) => {
        const newData: EmailNodeData = {
            ...emailNodeData,
            sender: e.target.value,
        };
        console.log(sender, "handleUpdateSender");

        setSender(e.target.value);
        onUpdateNodeContent(newData);
    };

    return {
        render: (
            <div className="wait-node-editor__container">
                <div>
                    <p className="wait-node-editor__item-title">SMS message to be sent:</p>
                    <div className="wait-node-editor__select">
                        <Select value={sender} onChange={handleUpdateSender} sx={{ width: "100%", bgcolor: "#ffff" }}>
                            <MenuItem value={sender}>{sender}</MenuItem>
                        </Select>
                    </div>
                </div>
            </div>
        ),
    };
};

export default SmsNodeEditor;
