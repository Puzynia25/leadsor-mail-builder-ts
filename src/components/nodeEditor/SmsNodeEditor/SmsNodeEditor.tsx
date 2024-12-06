import { useState } from "react";
import { MenuItem, Select, SelectChangeEvent, TextareaAutosize } from "@mui/material";
import { INodeEditor, INodeEditorProps } from "../NodeEditorWrapper.types";
import { EmailNodeData } from "../../nodes/Node.types";

const SmsNodeEditor = ({ data, onUpdateNodeContent }: INodeEditorProps): INodeEditor => {
    const emailNodeData = data as EmailNodeData;

    const [sender, setSender] = useState("some sender");
    const [message, setMessage] = useState("");

    const handleUpdateSender = (e: SelectChangeEvent<string>) => {
        const newData: EmailNodeData = {
            ...emailNodeData,
            sender: e.target.value,
        };

        setSender(e.target.value);
        onUpdateNodeContent(newData);
    };

    const handleUpdateMessage = (e) => {
        const newData: EmailNodeData = {
            ...emailNodeData,
            message: e.target.value,
        };

        setMessage(e.target.value);
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

                <div>
                    <div className="wait-node-editor__select">
                        <p className="wait-node-editor__item-title">SMS message:</p>
                        <TextareaAutosize
                            minRows={3}
                            style={{
                                width: "100%",
                                marginTop: "10px",
                                padding: "8px",
                                borderRadius: "15px",
                                borderColor: "lightgray",
                                resize: "vertical",
                            }}
                            value={message}
                            onChange={handleUpdateMessage}
                            placeholder="type sms message..."
                        />
                    </div>
                </div>
            </div>
        ),
    };
};

export default SmsNodeEditor;
